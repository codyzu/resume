# Working on the CVs

- Use Node 24 (`.nvmrc`) and the pnpm version pinned in `package.json`.
  `pnpm run setup` installs both locked dependency sets and checks Python/Poppler.
- Run `pnpm check` before handing off code changes. It type-checks, lints,
  runs integration tests, renders all CVs, checks PDFs, and builds the public site.
- Career facts and named contributions belong in `src/data/career.ts`;
  `src/data/work-experience.ts` selects them per variant. Education belongs in
  `src/data/education.ts`. Layouts are the three `src/Cv*.tsx` files.
- Select jobs and contributions by stable IDs, never array offsets. Share facts
  across variants; keep differences in emphasis explicit.
- Preserve supplied facts. Do not invent dates, metrics, proficiency, credentials,
  or achievements. Existing copy is historical, not independently verified;
  flag unsupported or stale claims when tailoring rather than silently strengthening them.
- After copy or layout changes, run `pnpm preview` and inspect every affected page
  in `output/preview/`. Two pages and passing bounds checks do not prove that a PDF
  has no clipping or overlapping text. Inspect links and reading order as needed.
- `pnpm render --variant dev --out-dir PATH` renders selected local CVs.
  Generated files belong in ignored `output/`; do not edit `lib/` or generated CSS.
- Public variants are explicitly allowlisted in `src/variants.ts`.
  `pnpm build:site` stages only those variants in `output/site/`.
  Adding a private/application variant must not expand that allowlist implicitly.
- For job-specific tailoring, use `.agents/skills/tailor-cv/SKILL.md`.
- Keep unrelated user changes intact.
