# Engage Commercial Fitouts — Visual Audit

**Scope:** All 18 live routes, reviewed as rendered from the current production build (branch `develop`, commit `4dfab7b`) at 1440px desktop and 390px mobile, plus 15 interaction states. Screenshots referenced throughout are in `desktop/`, `mobile/` and `interaction/`.

This report records observations only. No changes were made.

---

## 1. Overall first impression

The site reads immediately as a premium commercial fit-out business. The black/gold system is disciplined and consistent, typography is confident, and the hero states the offer in one line. Weaknesses: every page shares the same dark tonality with no photographic relief, so extended browsing becomes visually monotonous, and the abstract placeholder graphics — while intentional — read as unfinished to a reviewer who does not know the imagery is pending.

## 2. Commercial credibility

Strong on structure (clear process, clear scope, defined delivery levels) and honest — no invented claims, statistics or testimonials anywhere. However, the complete absence of photography, named projects, team, or any third-party signal means credibility currently rests entirely on copy and presentation. A sceptical investor has nothing external to verify. This is the single largest commercial gap and is only resolvable with genuine project material.

## 3. Investor proposition clarity

Clear and well-positioned. The investor route appears in homepage section 2 (first card), gets a dedicated homepage section ("Built Around the Commercial Outcome"), a dedicated page with delivery levels and a 7-step process, and investor-context CTAs ("Discuss an Investment Property", "Arrange a Property Consultation"). The distinction between investor-led and occupier-led work is reinforced by comparison tables on three pages. No unsupportable outcome guarantees are made.

## 4. Business and occupier proposition clarity

Clear, though secondary in emphasis (consistent with the brief). The occupiers page covers who it serves, planning considerations and delivery scope. The "phased works where appropriate" and "reduce avoidable disruption" language is suitably careful.

## 5. Brand consistency

Consistent throughout: Engage Black backgrounds, Architectural Gold used only for accents/CTAs/numerals, Warm Ivory text, uppercase gold eyebrows, sharp 2–6px radii. No page deviates from the system. No trace of the previous moving-company design.

## 6. Logo presentation

The approved lock-up renders crisply in header (180–200px), mobile drawer and footer (236px), always above the 180px brand minimum, aspect ratio preserved, no clipping at any tested width. At extreme enlargement the transparent PNG shows slight JPEG-origin softness; invisible at usage sizes. A vector master would remove this ceiling if ever needed for print or large signage.

## 7. Homepage hierarchy

Good top-to-bottom logic: offer → two routes → capability → investor depth → process → reasons → capability types → CTA. Two observations: (a) the page is long (~6,000px desktop, ~8,800px mobile) with eight sections of similar visual weight — a first-time visitor gets no single "hero moment" beyond the opening screen; (b) sections 3 and 7 both present capability lists in near-identical numbered-tile grids, which dilutes their distinctiveness (see §12).

## 8. Navigation usability

Dropdowns open on hover and click, close on Escape and outside click, stay within the viewport, and expose correct `aria-expanded`/`aria-current` states. The mobile drawer locks scroll, expands groups, closes on Escape and returns focus correctly. No broken or misleading links found; legacy routes 404. Minor: the "Solutions Overview"/"Services Overview" first item in each dropdown duplicates the parent button's own destination — harmless, but two routes to the same place inside one menu.

## 9. Desktop presentation

Well-spaced and legible at 1440px and 1280px; the header correctly compresses at 1024px. Line lengths in prose sections stay within comfortable bounds. The hero's right-hand abstract graphic is noticeably weaker than the typography beside it — it reads as a chart rather than architecture at first glance (see §13).

## 10. Mobile presentation

Layouts collapse cleanly to a single column; no horizontal overflow at 430/390/360px (verified programmatically). CTAs are full-width and tappable. The main cost of mobile is length: the homepage is ~8,800px and the investors page ~8,300px tall, mostly stacked single-item cards — see §11.

## 11. Content density

Desktop density is comfortable. On mobile, the many 3–4 column grids collapse into long single columns of visually identical tiles (e.g. 16 fit-out work items, 13 technical services, 14 furniture categories become 13–16 consecutive full-width cards). Reviewers should assess whether some list sections would serve mobile better as two-column compact tiles or grouped lists; currently they create scroll fatigue even though each individual card is fine.

## 12. Repetitive page structures

The five service pages share one template rhythm: hero → numbered tile grid → second grid → (comparison) → CTA band. Within a single visit that consistency is professional; across several pages in a row it becomes predictable, and the numbered-tile grid is used on nearly every page. The comparison card pair and the process timeline are the only distinct section types. More variation will come naturally when real photography replaces placeholders; until then this is the site's main visual monotony risk.

## 13. Placeholder presentation

The architectural placeholder (three outlined "building" forms with a gold baseline and a small uppercase label such as "Commercial office concept") is consistent, clearly conceptual, and never claims to be completed work — correct on honesty grounds. Critically though: it is the weakest visual element on the site. It repeats identically on every hero, its bar-chart-like silhouette undersells a fit-out company, and on image-and-text sections it occupies half the row while carrying almost no information. It is fit for a pre-launch review build, not for launch.

## 14. Use of empty space

Generous spacing generally supports the premium tone. Two spots verge on empty: the centered "Our Purpose" band on the About page (a single sentence in a full-height section) and the FAQ hero, which is a large dark block for one heading and one line. Neither is broken; both are candidates for tightening.

## 15. Calls to action

Every page ends in a contextual CTA band and the header CTA is persistent. Labels are drawn from the approved set and routed correctly (investor CTAs retain investor context throughout). The site avoids identical-button walls — the process page now carries two CTA instances rather than three. Minor: on long pages the distance between the hero CTA and the closing CTA is large with no mid-page action; acceptable for a consultative funnel, worth watching in analytics after launch.

## 16. Contact form

Comprehensive and honest: clear grouping, visible required markers, correct labels, understandable validation messages attached to their fields, focus moves to the first error, file-upload limits stated (5 files, 10 MB), privacy consent enforced, clear success state. It is long (16 visible controls on mobile); a reviewer should decide whether "Preferred contact method", "Target completion date" or "Intended commercial outcome" could be deferred to the follow-up conversation to reduce entry friction. The form does not currently submit anywhere (endpoint intentionally unwired pre-launch) — the success state is simulated, which must be resolved before launch.

## 17. Trust and credibility gaps

No unsupported claims — verified by search: no "leading", "award-winning", "certified", ratings, badges, invented history or testimonials. The corollary gaps: no real projects, no team, no company registration details (pending), no social proof of any kind. The trust story is currently 100% presentation and process description. Filling this requires genuine material, not copywriting.

## 18. Projects/capabilities page

Correctly presents eight capability categories (starting point / likely scope / outcome / related services) rather than fake case studies, with an honest note that completed case studies will be published as delivered. The card structure is informative but text-dense and uniform — eight near-identical definition-list cards in a row. The underlying case-study data structure exists and is empty, ready for genuine projects; no fictional records anywhere.

## 19. Footer

Complete and accurate: approved logo, one-line description, CTA, all four link groups matching live routes, Dubai location line, dynamic year, legal links. Sparse on contact detail — only the city — which is correct while details are unconfirmed but will look thin to visitors until phone/email are added.

## 20. Legal pages

All three read as Engage Commercial Fitouts with no legacy references, no invented registration numbers, cookie claims matching the actual site (strictly-necessary only), and data-handling descriptions matching the actual form fields. All carry internal TODO(launch) markers requiring professional review — that review has not yet happened and remains mandatory before launch.

## 21. Highest-priority improvements

1. **Genuine imagery** — replace the repeated architectural placeholder with approved commercial-office photography (the `image` props are already in place). This is the largest single uplift available to both credibility and visual variety.
2. **First genuine case study** — even one real project transforms the Projects page and homepage.
3. **Wire the enquiry form** and confirm the destination mailbox; the current simulated success state must not go live.
4. **Confirmed contact details** in the footer and contact page — a fit-out company with no phone number will lose a segment of enquirers.
5. **Professional legal review** of the three legal pages.

## 22. Lower-priority refinements

- Vary the numbered-tile grid on at least the service pages (e.g. grouped lists or two-column compact rows) to reduce template repetition.
- Consider condensing long mobile list sections (§11).
- Tighten the About "Our Purpose" band and FAQ hero (§14).
- The FAQ accordion is single-open: opening one answer closes another. Acceptable pattern, but reviewers comparing answers may prefer multiple-open behaviour (one-prop change when changes are next permitted).
- Consider a shorter "fast enquiry" variant of the contact form or deferring optional fields.
- Source a vector master of the logo for future large-format use.
- The two "Overview" items inside each dropdown duplicate the parent link's destination; could be styled as a header rather than a menu item.
