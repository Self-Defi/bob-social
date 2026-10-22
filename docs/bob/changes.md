# B.O.B branding changes

Baseline: `c06abc3d786b8f719ced5716ccc70dd8a7251a05`

- B.O.B wordmark and icon in login and sidebar components.
- Public logo SVG replacements and matching favicon.
- Teal primary-action color; upstream typography retained.
- Login panel introduces Lesson 01 and credits Postiz; upstream customer testimonials are not repurposed as B.O.B claims.
- Existing page metadata titles use B.O.B Social.
- Original README retained as README.upstream.md.
- Build override selects a locally built branded image.
- Lesson guide makes this project one module in the wider B.O.B series.

No backend code, database schema, platform adapter, authentication logic, dependency version, license, or original notice is changed.

Validation: whitespace/diff checks and SVG parsing performed. Full application build, visual app QA, and real publishing remain pending. This environment has Node 24; upstream requires Node 22.12–22.x. Docker build is the documented path to the correct runtime.
