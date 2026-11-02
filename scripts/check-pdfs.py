"""Check generated PDFs with Poppler; optionally render every page for review."""
import argparse
import json
import re
import shutil
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


def run(*args):
    return subprocess.check_output(args, text=True)


def check_pdf(path, expected):
    info = run("pdfinfo", str(path))
    count = int(re.search(r"Pages:\s+(\d+)", info).group(1))
    if count != expected["pages"]:
        raise ValueError(f"{path.name}: expected {expected['pages']} pages, got {count}")
    text = " ".join(run("pdftotext", str(path), "-").split())
    for required in expected["text"]:
        if required.casefold() not in text.casefold():
            raise ValueError(f"{path.name}: missing required text {required!r}")
    tree = ET.fromstring(run("pdftotext", "-bbox", str(path), "-"))
    ns = {"x": "http://www.w3.org/1999/xhtml"}
    for index, page in enumerate(tree.findall(".//x:page", ns), start=1):
        width, height = float(page.attrib["width"]), float(page.attrib["height"])
        if abs(width - 595.28) > 1 or abs(height - 841.89) > 1:
            raise ValueError(f"{path.name}: page {index} is not portrait A4")
        words = page.findall(".//x:word", ns)
        if len(words) < 20:
            raise ValueError(f"{path.name}: page {index} is unexpectedly empty")
        for word in words:
            bounds = [float(word.attrib[key]) for key in ("xMin", "yMin", "xMax", "yMax")]
            if bounds[0] < -1 or bounds[1] < -1 or bounds[2] > width + 1 or bounds[3] > height + 1:
                raise ValueError(f"{path.name}: page {index} has text outside the page: {word.text!r}")
    urls = []
    for line in run("pdfinfo", "-url", str(path)).splitlines():
        match = re.match(r"\s*\d+\s+\S+\s+(.+)", line)
        if not match:
            continue
        url = match.group(1).strip()
        parts = urlsplit(url)
        if parts.scheme not in ("https", "http", "mailto", "tel") or (parts.scheme in ("https", "http") and not parts.netloc):
            raise ValueError(f"{path.name}: invalid link {url!r}")
        urls.append(url)
    for required in ("https://github.com/codyzu", "https://linkedin.com/in/cody-zuschlag"):
        if required not in urls:
            raise ValueError(f"{path.name}: missing link {required}")
    print(f"OK {path.name}: {count} A4 pages, required text, bounds and {len(urls)} links")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--pdf-dir", type=Path, default=ROOT / "output/pdf")
    parser.add_argument("--preview", action="store_true")
    parser.add_argument("--public", action="store_true", help="Check only publication-allowlisted variants")
    parser.add_argument("--preview-dir", type=Path, default=ROOT / "output/preview")
    args = parser.parse_args()
    for tool in ("pdfinfo", "pdftotext", "pdftoppm"):
        if not shutil.which(tool):
            parser.error(f"Missing {tool}; install Poppler (see README.md)")
    expectations = json.loads((ROOT / "config/pdf-checks.json").read_text())
    manifest = json.loads(run("node", str(ROOT / "lib/pdf-manifest.js")))
    checks = {item["filename"]: expectations[item["filename"]] for item in manifest
              if not args.public or item["public"]}
    actual = {file.name for file in args.pdf_dir.glob("*.pdf")}
    if actual != set(checks):
        raise ValueError(f"PDF inventory mismatch: missing={set(checks) - actual}, unexpected={actual - set(checks)}")
    if args.preview:
        args.preview_dir.mkdir(parents=True, exist_ok=True)
    for filename, expected in checks.items():
        path = args.pdf_dir / filename
        check_pdf(path, expected)
        if args.preview:
            subprocess.run(["pdftoppm", "-r", "100", "-png", str(path), str(args.preview_dir / path.stem)], check=True)
    if args.preview:
        print(f"Review every page in {args.preview_dir}; automated bounds checks cannot prove that text does not overlap or clip.")


if __name__ == "__main__":
    main()
