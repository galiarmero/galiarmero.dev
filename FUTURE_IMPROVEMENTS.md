# Future Improvements

Post-migration improvements that were deferred to avoid visual changes during the Gatsby-to-Astro migration.

## Use `astro-icon` for icons instead of inline SVGs

During the migration, `react-icons/fa` (Font Awesome) icons were replaced with inline SVGs extracted from the same icon set. This works and renders identically, but `astro-icon` is the community-recommended approach for icons in Astro. It integrates with [Iconify](https://iconify.design/), which includes the full Font Awesome set and many others.

Benefits:

- Cleaner component API: `<Icon name="fa-solid:arrow-left" />` instead of raw SVG markup
- Access to thousands of icon sets via Iconify
- Automatic SVG optimization

### Inline SVGs to update

- `src/components/PostDetails.astro` -- eyeglasses icon (from `static/icons/circular-eyeglasses.svg`)
- `src/components/PostPreview.astro` -- right arrow icon (from `static/icons/right-arrow.svg`)
- `src/components/SuggestedPost.astro` -- left/right arrow icons (Font Awesome)
- `src/components/homepage/Logo.jsx` -- site logo (from `static/icons/logo.svg`)
- `src/components/PuzzleScoresNav.astro` -- left/right chevron icons (Font Awesome `FaChevronLeft`/`FaChevronRight`)
- `src/components/homepage/PostPreview.jsx` -- eyeglasses + right arrow icons (same as blog versions)

### Steps

1. Install: `npm install astro-icon @iconify-json/fa-solid`
2. Replace inline SVGs with `<Icon>` components, e.g.:
   - `<Icon name="fa-solid:arrow-left" />` (replaces `FaArrowLeft`)
   - `<Icon name="fa-solid:arrow-right" />` (replaces `FaArrowRight`)
3. For the site logo, use a local SVG source with `astro-icon` or a dedicated `<Logo />` component that references `static/icons/logo.svg`
4. Visually verify icons match the current appearance

## Replace `react-share` to remove SSR workaround

The `Engage` component uses `react-share` for social share buttons. This library has a CJS/ESM compatibility issue that requires a `ssr: { noExternal: ["react-share"] }` workaround in `astro.config.mjs`. Replacing it would simplify the config and reduce the client-side JS bundle.

Options:

- **Plain share URLs** -- Twitter, Facebook, and LinkedIn all support share URLs (e.g., `https://twitter.com/intent/tweet?url=...&text=...`). This removes the React dependency entirely, allowing `Engage` to become a static Astro component with zero client-side JS.
- **A lighter/ESM-compatible library** -- if a component-based API is preferred.

## Add standard meta description tag to BaseLayout

`BaseLayout.astro` accepts a `description` prop and uses it for Twitter (`twitter:description`) and Open Graph (`og:description`) tags, but it doesn't emit a standard `<meta name="description" content="...">` tag. Many crawlers and SEO tools rely on this tag, so it should be included when `description` is provided.

## Bug fixes

### Fix CSS selector typo in puzzle scores nav

In `src/styles/DailyPuzzleStyles.js` (and its migrated counterpart `src/styles/daily-puzzle.css`), the selector `.puzzle-scores-nav .date-label.date.nav > a` should be `.puzzle-scores-nav .date-label.date-nav > a`. The current selector matches an element with classes `date-label`, `date`, and `nav` instead of `date-label` and `date-nav`.

---

## Use configurable breakpoints instead of hardcoded media queries

The Gatsby project defined breakpoints in JS (`src/styles/theme.js`) and used them via Emotion. After the Astro migration, media queries are hardcoded directly in CSS (e.g., `@media (min-width: 480px)`). This works but means breakpoint values are scattered across many files.

Options to make them configurable:

- **PostCSS with `postcss-custom-media`** -- define `@custom-media --media4 (min-width: 480px)` once and use `@media (--media4)` everywhere. Astro supports PostCSS natively.
- **Sass** -- variables can be used inside `@media` rules.

Current breakpoint mapping for reference:

- `media4` = `@media (min-width: 480px)`
- `media7` = `@media (min-width: 768px)`
- `media9` = `@media (min-width: 992px)`
- `media12` = `@media (min-width: 1200px)`
