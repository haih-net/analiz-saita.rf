# Main page

The home route composes five child components: Hero, RequestEvidence, TechnologyMap, Roadmap and ExperimentOutcomes. Each block owns its images in its own directory and imports them through Vite, which emits hashed asset URLs. Shared page styles are scoped under `.main-page`; the surrounding Header and Footer belong to the shared Layout.

Artwork comes from `project/tasks/001/03/assets`. The original generation prompts and review notes remain there. These are conceptual illustrations: the hero connections are decorative, the request-flow image has an inaccurate generation subtitle (corrected in its HTML caption), traffic curves are illustrative and roadmap branches are proposals. The diagrams have not been promoted to authoritative engineering documentation.

Headings, calls to action and explanatory captions remain HTML. The hero loads eagerly; lower images use native lazy loading and explicit dimensions. Original PNGs are retained, approximately 6.7 MB in total; responsive image compression remains a follow-up. Embedded diagram text shrinks on narrow screens, so captions and alternative text summarize the content.

Verified: TypeScript, production build, focused ESLint, desktop and 360px browser layouts, all eight image loads, roadmap anchor, architecture navigation and browser back. No horizontal overflow was observed at 360px. No production deployment was performed.
