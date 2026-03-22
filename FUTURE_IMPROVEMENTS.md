# Future Improvements

Post-migration improvements that were deferred to avoid visual changes during the Gatsby-to-Astro migration.

## Switch syntax highlighting from Prism to Shiki

Astro's default syntax highlighter is [Shiki](https://shiki.style/), which has several advantages over Prism:

- **Zero client-side JS** -- Shiki runs at build time and outputs pre-colored HTML. Prism requires a JS runtime or relies on CSS class-based highlighting.
- **VS Code-accurate themes** -- Shiki uses the same TextMate grammar engine as VS Code, so themes like Night Owl render with exact fidelity.
- **Built-in theme support** -- Shiki ships with a `night-owl` theme out of the box, eliminating the need for `src/styles/prismjs-night-owl.css`.
- **Line highlighting** -- Shiki natively supports line highlighting syntax (e.g., `{1,3-5}`) which currently causes "Language does not exist" warnings with Prism.

### Steps

1. In `astro.config.mjs`, remove `markdown.syntaxHighlight: "prism"` (Shiki is the default)
2. Configure the Night Owl theme:

   ```js
   export default defineConfig({
     markdown: {
       shikiConfig: {
         theme: "night-owl",
       },
     },
   })
   ```

3. Remove the Prism CSS import from `src/layouts/BaseLayout.astro`:
   - Delete `import "../styles/prismjs-night-owl.css"`
4. Remove `prismjs` from `package.json` dependencies
5. Optionally delete `src/styles/prismjs-night-owl.css`
6. Review blog posts for Prism-specific line number syntax (`bash{1,2,4}`, `js{3-9}`, etc.) and convert to Shiki's format if needed
7. Visually compare code blocks to ensure highlighting looks correct

## Use `astro-icon` for icons instead of inline SVGs

During the migration, `react-icons/fa` (Font Awesome) icons were replaced with inline SVGs extracted from the same icon set. This works and renders identically, but `astro-icon` is the community-recommended approach for icons in Astro. It integrates with [Iconify](https://iconify.design/), which includes the full Font Awesome set and many others.

Benefits:

- Cleaner component API: `<Icon name="fa-solid:arrow-left" />` instead of raw SVG markup
- Access to thousands of icon sets via Iconify
- Automatic SVG optimization

### Steps

1. Install: `npm install astro-icon @iconify-json/fa-solid`
2. Replace inline SVGs with `<Icon>` components, e.g.:
   - `<Icon name="fa-solid:arrow-left" />` (replaces `FaArrowLeft`)
   - `<Icon name="fa-solid:arrow-right" />` (replaces `FaArrowRight`)
3. Visually verify icons match the current appearance

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
