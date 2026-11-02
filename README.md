# Resume

Build and publish three React PDF resumes: software engineering (`dev`),
developer relations (`devrel`), and hardware community (`hw`).

## Setup

Use Node 24 (`nvm use` with `.nvmrc`) and the pnpm version pinned in
`package.json`. Enable it with `corepack enable`, or install that pnpm version
with your preferred package manager. Install Python 3 and Poppler:

```sh
# macOS
brew install python poppler
# Ubuntu / Debian
sudo apt-get install python3 poppler-utils

pnpm run setup
```

Setup checks the runtime/tools and installs root and site dependencies with
frozen lockfiles. No Python packages are required. The renderer uses bundled
fonts and images; the public page uses system fonts and locally generated CSS.

## Edit, render, review

```sh
pnpm render                           # all variants → output/pdf/
pnpm render --variant dev             # one variant
pnpm render --variant devrel --out-dir /tmp/application
pnpm dev                              # re-render on source changes
pnpm check                            # complete validation and public build
pnpm preview                          # check PDFs and render PNGs for every page
```

The default PDF destination is anchored to the repository, independent of the
working directory. An explicit relative `--out-dir` is relative to your working
directory. Repeat `--variant` to select several variants; `--public` restricts
selection to the publication allowlist. `pnpm start` is an alias for rendering.

Career facts and named contributions live in `src/data/career.ts`;
`src/data/work-experience.ts` selects contributions per variant. Layouts choose
jobs by stable IDs. Education is shared in `src/data/education.ts`.
This modernization preserves historical main-branch wording; it does not verify
or update career claims. Review current status, dates, metrics, and credentials
before using a CV for a new application.

`pnpm check` runs TypeScript, XO, Node integration tests, PDF generation,
PDF checks, and the static public-site build. Poppler checks the exact PDF
inventory, expected page counts, portrait A4 dimensions, required text,
text bounds, and embedded link syntax/targets. Expected local PDF inventory
and text are maintained in `config/pdf-checks.json`. These checks do not make
network requests to verify destination availability.

After content or layout edits, inspect **every affected page** in
`output/preview/`. Automated checks cannot prove absence of clipping, overlap,
or poor reading order. Generated output is ignored by Git.

## Codex workflow

`AGENTS.md` gives repository guidance. The checked-in local environment at
`.codex/environments/environment.toml` installs locked dependencies in new
worktrees and provides Check, Render, Preview, and Site actions. Node, pnpm,
Python, and Poppler must already be available on the host.

Use `$tailor-cv` for vacancy-specific work. The repository skill maps requirements
to supported career evidence, preserves uncertainties, and requires PDF review.
Keep application-specific variants private by leaving them out of
`publicVersions` in `src/variants.ts`.

## Public site and CI

```sh
pnpm build:site                        # fresh public staging directory
pnpm serve                             # http://127.0.0.1:4173
```

Only explicitly allowlisted variants are rendered into
`output/site/downloads/`. The build starts with an empty staging directory and
never copies arbitrary local PDFs. The download list is generated from that
allowlist. No Jekyll build is needed. Adding a renderer does not publish it.

Pull requests run validation and upload PDFs/page previews for review. Those
artifacts may be accessible to repository viewers; "private variant" means
excluded from the public website, not confidential GitHub artifact storage.
Main-branch builds deploy only `output/site/` to GitHub Pages after checks pass.
Set Pages to **GitHub Actions** in repository settings if it is not already.
No deployment is performed by local commands.

To add a variant: add its version, renderer, manifest entry, and local PDF
expectations; update the public allowlist only when publication is intended.
The separate `cern` branch is not included in this workflow change. Its variants
can be adapted to this interface later.

## Background

Builds multiple versions of my resume in PDF format.

### Why?

Over-engineered? Probably... but I've rewritten my resume using several different applications over the years. Word processors were too restrictive in layout, always pushing towards sequential document flow. Drawing apps provided the required flexibility, but proved to be very hard to maintain (lots of manual customizations for every change).

Multiply all of that over wanting multiple versions targeting different types of roles and I found myself spending hours making small tweaks and then porting those tweaks to all versions of my resume.

Laying in bed one night, wishing my resume worked more like code, providing composition and the history of source control, I had an idea... why not just write it in code and use react-pdf to render it to pdf?

### The stack
- Node.js 24 with TypeScript compilation for TSX/React components.
- Typescript to facilitate refactoring when I need to make those pesky tweaks.
- [react-pdf](https://react-pdf.org/) because at the end of the day, I want a pdf.
- react because this is all about the view and I want the flexibility of components.
- [react-pdf-tailwind](https://github.com/aanckar/react-pdf-tailwind) because "css" (or similar in the case of react-pdf) is hard. Atomic css classes provides the right level of abstraction and control.
- [xo.js](https://github.com/xojs/xo) because it's super strict and plug-n-play

### The result
I now have a resume written entirely in code and composed of react components.

I can make changes to the layout, fonts, bullets, etc and those changes are instantly propagated to all versions. I also have the flexibility that each version has differences not only content, but also in layout and styling. As with any good abstraction, I can peel back the layers and make customizations when needed.

Finally, my engineering brain loves that my resume is written in code, giving me ultimate flexibility and consistency. No more having to set a custom hanging indent on multiple lines 🤯.

Let's see how this evolves.
