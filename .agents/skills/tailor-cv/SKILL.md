---
name: tailor-cv
description: Tailor this repository’s CV variants to a supplied vacancy using evidenced career facts, then render and review the resulting PDFs. Use for application-specific resume work.
---

Read the supplied vacancy and the relevant career, summary, skills, and layout
files. If a live vacancy URL is supplied, fetch it and note the reference and
verification date; if unavailable, request or use supplied vacancy text and state
that limitation.

Map the role’s requirements to existing evidence before changing copy. Treat the
repository’s historical wording as a starting point, not proof of current status
or independently verified metrics. Ask only for material missing facts; preserve
uncertainties. Do not convert adjacent experience into claimed proficiency or
invent dates, achievements, degrees, certifications, or outcomes.

Choose the closest variant and emphasize relevant named contributions in
`src/data/work-experience.ts`. Add shared facts to `src/data/career.ts` only when
supported by the user or identified evidence. Keep education facts in
`src/data/education.ts`. Use stable job and contribution IDs. A new application
variant stays private unless the user explicitly requests publication; register
its renderer without adding it to `publicVersions` in `src/variants.ts`.

Keep a brief application note under `docs/applications/` when creating a tailored
variant: vacancy reference/source and date, evidence used, editorial choices,
unsupported requirements, and validation results. Do not copy private supporting
documents into the repository.

Run `pnpm check` and update explicit PDF expectations in `config/pdf-checks.json`
if the intended local inventory changes. Run `pnpm preview` and inspect every
affected page for clipping, overlaps, legibility, and page breaks. Confirm PDF
links and extracted reading order. A successful render or fixed page count alone
does not establish layout quality.

Deliver the tailored output paths with a concise account of changes, unresolved
factual gaps, and checks performed. Publish or send an application only when that
action is within the user’s explicit request.
