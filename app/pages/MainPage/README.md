# Main page

The home route composes five child components: Hero, RequestEvidence, TechnologyMap, Roadmap and ExperimentOutcomes. Each block owns its images in its own directory and imports them through Vite, which emits hashed asset URLs. Page styles are extracted from the rendered `MainPageStyled` Linaria wrapper in `styles.ts`; the surrounding Header and Footer belong to the shared Layout.

Artwork comes from `project/tasks/001/03/assets`. The original generation prompts and review notes remain there. These are conceptual illustrations: the hero connections are decorative, the request-flow image has an inaccurate generation subtitle (corrected in its HTML caption), traffic curves are illustrative and roadmap branches are proposals. The diagrams have not been promoted to authoritative engineering documentation.

Headings, calls to action and explanatory captions remain HTML. The hero loads eagerly; lower images use native lazy loading and explicit dimensions. Original PNGs are retained, approximately 6.7 MB in total; responsive image compression remains a follow-up. Embedded diagram text shrinks on narrow screens, so captions and alternative text summarize the content.

Historical checks before the page-folder and Linaria refactor: TypeScript, production build, focused ESLint, desktop and 360px browser layouts, all eight image loads, roadmap anchor, architecture navigation and browser back. No horizontal overflow was observed at 360px. No production deployment was performed.

After the refactor, type checking, linting, production extraction and generated HTML stylesheet links were checked. Browser layout and HMR were not rechecked.

## Image delivery — 30 September 2026

Measured at localhost:3000: the hero occupies about 616 CSS pixels, evidence panels 532 pixels, full-width figures 1088 pixels, and outcome icons 88 pixels. Optimized with the globally installed Sharp (`node scripts/optimize-images.mjs` from the repository root): WebP quality 82, effort 6, no enlargement. Hero: 1200 × 800; evidence panels: 1080 × 720; full-width figures and blog illustrations: 1440 × 960; outcome icons: 176 × 176. Large illustrations also have a 600 × 400 variant selected through `srcSet` and layout-specific `sizes`. PNG sources remain alongside their derivatives, but are not imported by the application or included in the asset build.

Across 14 illustrations, previously imported images totalled approximately 14.66 MB. All new WebP variants together total 0.875 MB (94.0% less); the browser chooses a variant rather than downloading every size. This is an asset-size comparison, not a page-speed measurement. Historical figures in the first two field notes describe their fixed project snapshots and remain unchanged.
