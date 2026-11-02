# CERN applications — local variants

Branch: `cern-new`. Vacancy pages read on 2 November 2026:

- [Software Engineer, IT-CA-CET-2026-210-LD](https://careers.cern/jobs/software-engineer/): deadline 11 November 2026, 23:59 Geneva time.
- [Control Software Engineer, TE-MPE-CB-2026-213-LD](https://careers.cern/jobs/te-mpe-cb-2026-213-ld-2/): deadline 29 November 2026, 23:59 Geneva time.

## Evidence and implementation

The applicant's detailed career clarifications supplied in this task are the
primary factual source. Useful confirmed career copy was adapted from the earlier
`cern` branch (commit `0085668`); its layout and positional contribution selections
were not reused. No private customer documents were copied into this repository.
Local supporting customer/project repositories were not needed for these drafts;
their contents have not been independently reverified in this task.

`src/data/career.ts` holds shared employment facts and named contributions;
`src/data/work-experience.ts` selects stable contribution IDs.
`src/data/education.ts` holds the degree titles and named award.
`src/data/cern.ts` defines profiles, skills and page composition.
Both applications are registered by `src/CvCern.tsx` and use the shared
`src/CvLayout.tsx`, preserving the blue header, charcoal
sidebar, portrait and chevron bullets of the existing engineering CV. The original
font roles are retained: Fira Sans for the name, Roboto for the headline, Lato
for body/job text, and bold Fira Code with terminal icons for section headings.
The shared `SectionHeader` accepts an optional font size so CERN headings can
fit the narrower column without changing the three existing layouts. Page two
uses a muted grey running header, `Cody Zuschlag · 2 / 2`, without repeating
the vacancy reference.
The smaller sidebar and removal of QR codes allow 10.5pt main text. The CERN
variants use the applicant's recent white-background portrait with its green Xen
circle, copied unchanged from `~/Pictures/profile pic xen [white 1000p].png`.

- `cern-it`: PostgreSQL application work, enterprise C#/.NET integration,
  Kubernetes application deployment, production support, CI, performance testing
  and observability. Orion, ghSMART and TELUS provide named project evidence.
- `cern-control`: earlier firmware/drivers, C# interop, Java/OSGi, requirements
  and validation, Python performance testing, operational support and mentoring.
  The recent Xen Raspberry Pi integration has a distinct contribution.

Xen is one community-management role with technical projects. Nearform appears
as one employer with role progression and a 2024 technical lead assignment.
The three public variants now share that layout and portrait too. All five
include current Xen employment and a single Nearform employer entry with its
role progression, alongside the shared date, title, teaching, education and
project corrections. Public variants retain distinct selections: engineering
delivery, developer relations, and hardware/open-source community work. See
`docs/cv-refresh.md` for the subsequent carry-over changes.

## Boundaries and unresolved details

The applicant confirmed Java/C++ need a refresher after substantial earlier use.
The CV dates and skill descriptions distinguish this from recent web work;
they do not assert current Java/C++ fluency. C#/.NET is identified as earlier
substantial integration work, and Python is represented by concrete uses.

No Microsoft 365, Exchange, Entra/AD administration, accelerator protection,
interlocks or safety certification is claimed. Cluster/server administration is
not claimed. Auth0 handles authentication and OpenFGA authorization; ghSMART was
still in development at handover. Audit contributions end with recommendations.

Exact ghSMART assignment months, the Xen demo's conference title, sensor bus and
domain topology, current OpenJS council membership, and Latin graduation honors
remain unverified and are omitted or expressed without implying current status.
Conference audience counts describe event attendance. Teaching uses approximately
125-130 students across subjects, with no attributed placement outcome.

## Rendering and validation

```sh
pnpm render --variant cern-it --variant cern-control
pnpm check
pnpm preview
```

Outputs:

- `output/pdf/cv-cody-zuschlag-it-ca-cet-2026-210-ld.pdf`
- `output/pdf/cv-cody-zuschlag-te-mpe-cb-2026-213-ld.pdf`

The CERN keys are registered locally but absent from `publicVersions`.
Local site staging includes only the three original public variants; nothing
was pushed, published, submitted or sent.

Validation: Node 24.16.0 and pnpm 9.15.4; `pnpm check` passed TypeScript,
XO, all five integration tests, all five two-page A4 renders, PDF checks and
local public-site staging. `pnpm preview` passed. All ten pages were visually
reviewed; all four CERN pages were reviewed again after final layout/photo and original-typography refinements.
No clipping, overlap or stranded headings were observed. Poppler extraction
retains the career text and order within each section; the two-column first
page can interleave sidebar and summary text in automatic extraction. Bullet
rendering was adjusted so markers and opening words stay together in plain
text. Both CERN PDFs contain working-form email, telephone, portfolio, GitHub
and LinkedIn targets (syntax/embedded targets checked; no live contact action).

## Public CI boundary

The user confirmed that CI should render and upload all five PDFs and page
previews as downloadable `cv-review` artifacts. Only the three general CVs are
allowlisted for the public website; CERN PDFs are excluded from site staging
and deployment. Source and review artifacts are accessible to repository viewers.
The existing all-variant CI workflow is retained. The user subsequently
authorized committing, merging into main and pushing main, including the
normal website deployment of the three general CVs.
