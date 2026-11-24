---
project: caringbeds.com
prd_version: 1
project_version: v0.A
status: planned
owner: Vijo
last_updated: 2026-11-23
---

# caringbeds.com — PRD

## 1. Problem

Families bringing a parent or partner home from the hospital need a hospital
bed fast, don't know durable medical equipment, and are anxious about cost and
Medicare. The answers they find are scattered across supplier sales pages.
(Source: AI_AGENTS.md § Summary, § ICP.)

## 2. Users

Non-technical, often older caregivers — adult children and spouses arranging
home care under time pressure. Primary customer: a 45–65-year-old who has just
learned a loved one is coming home and needs a bed quickly, searching on a
phone. (Source: AI_AGENTS.md § Audience, § ICP.)

## 3. Goals & non-goals

**Goals:**
- Short term: validate local demand and win paying rental customers in
  Salinas / Monterey with minimal upfront inventory.
- Long term: rank nationally for the rental, cost / buy and coverage clusters,
  monetized via owned rentals, lead-gen, listing fees and affiliate.
  (Source: AI_AGENTS.md § Goals.)

**Non-goals:**
- Off-topic "hospital bed" queries (celebrity, stock-photo, true-crime) — kept
  out to protect topical focus. (Source: AI_AGENTS.md § Content strategy.)
- Medical advice. Coverage and regulatory facts are cited and `[VERIFY]`-gated
  against CMS / state sources before publishing.

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | content cluster | the one-page site becomes a cluster of answer-first pages on cost, buying vs renting, bed types and coverage, plus city rental pages and the Salinas operator page — each indexed and earning impressions |

## 5. Phases

Keyword data for v1 (SE Ranking, US monthly searches, 2026-11-23, treg call
`89470dae…`; KD = difficulty 0–100). Easy terms first; contested head terms
("hospital bed for home" 27,100 / KD 68, "hospital bed rental" 12,100 / KD 42,
"rent a hospital bed" 5,400 / KD 42) are earned later through the cluster, not
targeted head-on.

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | planning / decisions lock | Lock the page list and URL structure from the keyword table above; page template (answer-first, cited, `[VERIFY]` gate, FAQ + schema); how city pages carry real local data (providers, price ranges) so they aren't thin; internal-link plan (every page ↔ hub ↔ Salinas page). | planned |
| **v1.B** | cost cluster | Rental cost guide for "hospital bed rental cost" (480 / KD 3) and "how much does it cost to rent a hospital bed" (480 / KD 4); purchase cost page for "hospital bed cost" (330 / KD 12). Price ranges only from cited supplier / CMS fee-schedule sources, dated; no invented figures. | planned |
| **v1.C** | buy vs rent + bed types | "buy hospital bed" (480 / KD 19), "used hospital beds for sale" (210 / KD 4), rent-vs-buy decision page, "semi electric vs full electric hospital bed" (140 / KD 4), bariatric beds ("bariatric hospital bed rental" 70 / KD 4). | planned |
| **v1.D** | accessories | "hospital bed sheets" (660 / KD 11), "hospital bed rails" (120 / KD 4), sizing ("hospital bed size" 1,500 / KD 45 — contested, cover inside the guide). Affiliate links per AI_AGENTS.md § Goals. | planned |
| **v1.E** | coverage | Medicare and Medicaid coverage for home hospital beds — smaller demand than the site docs assumed ("medicare hospital bed rental" 70 / KD 27, "does medicaid cover hospital beds" 50 / KD 18, "does medicare cover hospital beds" only 10). Every rule cited to CMS / state Medicaid and `[VERIFY]`-gated; funnels to the rental and quote CTAs. | planned |
| **v1.F** | city rental pages | Start with the largest cities found in keyword data — Houston (110 / KD 8), Chicago (70 / KD 5), Los Angeles (70 / KD 7), San Jose (30 / KD 7) — plus the Salinas / Monterey operator page (no search data; it exists for local customers). Each with real local providers and price ranges; expand in batches only after the first batch is indexed (cottagefoodmap pattern). | planned |

## 6. Open questions

- *(append-only log; mark answered with date but never delete)*
- 2026-11-23 — Why is "does medicare cover hospital beds" so small (10/mo)? Check other phrasings ("is a hospital bed covered by medicare", "medicare hospital bed requirements") in v1.A before sizing v1.E.
