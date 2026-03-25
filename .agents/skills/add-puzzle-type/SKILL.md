---
name: add-puzzle-type
description: >-
  Add a new daily puzzle type to the puzzle scores viewer. Use when the user
  wants to add, create, or support a new puzzle, game, or word game on the
  puzzle-scores pages.
---

# Add a New Puzzle Type

The puzzle scores system displays daily puzzle results fetched from an external Nenoy API. Each puzzle type is identified by a **slug** (e.g. `"wordle"`, `"saltong"`). Scores are rendered as emoji grids via `PuzzleResult.astro`. Some puzzles also render a `LinkPreviewCard` — either on its own (e.g. `nytimes-mini-crossword`) or below the emoji result (e.g. `minute-cryptic`).

## Required Steps

### 1. Register the slug in `src/config/puzzles.js`

Add the slug to `PUZZLE_ORDER` (controls display order on the page) and add a config entry in the default export:

```js
// PUZZLE_ORDER — add at desired position
export const PUZZLE_ORDER = [
  "wordle",
  // ...existing slugs...
  "new-puzzle-slug",
]

// Default export — add config object
export default {
  // ...existing entries...
  "new-puzzle-slug": {
    label: "Display Name",
    isScoreDarkMode: true, // optional — set true if share text uses ⬛ for light squares
  },
}
```

**Config options:**

| Property | Type | Required | Purpose |
|----------|------|----------|---------|
| `label` | `string` | Yes | Shown in the `PairLabel` badge on the card |
| `isScoreDarkMode` | `boolean` | No | When `true`, `⬛` is replaced with `⬜` in result text |

### 2. Ensure the Nenoy API produces score records

Each record must have at minimum:

| Field | Type | Description |
|-------|------|-------------|
| `datePlayed` | `string` (YYYY-MM-DD) | Groups scores into date pages |
| `puzzle` | `string` | Must match the slug registered above |
| `resultText` | `string` | The emoji grid / share text to display |
| `dayNumber` | `string` (optional) | Shown in the green badge; falls back to formatted date |

The API fetcher is at `src/utils/nenoy-api-fetch.js`.

## Optional: Link Preview Card

If the puzzle's share text contains a URL and the user wants a link preview, add a `linkPreview` object during enrichment in `getStaticPaths` (inside the `for (const score of allScores)` loop):

```js
if (score.puzzle === "new-puzzle-slug") {
  enriched.linkPreview = {
    title: "Display Title",
    description: "Short description of the puzzle site",
    url: "https://example.com",
    domain: "www.example.com",
    image: "https://example.com/og-image.jpg", // optional — omit for a text-only card
    hideResultText: true, // optional — when true, only the card renders (no PuzzleResult above)
  }
}
```

**`linkPreview` options:**

| Property | Type | Required | Purpose |
|----------|------|----------|---------|
| `title` | `string` | Yes | Card title |
| `description` | `string` | Yes | Card description |
| `url` | `string` | Yes | Link target |
| `domain` | `string` | Yes | Displayed domain text |
| `image` | `string` | No | Card image URL; omit for a text-only card |
| `hideResultText` | `boolean` | No | When `true`, only the card renders without the `PuzzleResult` above it (e.g. `nytimes-mini-crossword`). When `false`/omitted, `PuzzleResult` renders above the card (e.g. `minute-cryptic`). |

No template changes are needed — the existing `linkPreview` branch handles both modes automatically. When `hideResultText` is `false` or omitted, increase `calculateSpan` to account for the extra link preview height (typically `+ 11` instead of `+ 5`):

```js
if (puzzle === "new-puzzle-slug") return text.split("\n").length + 11
```

## Optional: Other Custom Rendering

If the new puzzle needs rendering beyond a standard emoji grid or link preview, add a special case in `src/pages/puzzle-scores/[date].astro`:

### Enrichment (in `getStaticPaths`)

Add a block inside the `for (const score of allScores)` loop, after the existing enrichment blocks:

```js
if (score.puzzle === "new-puzzle-slug") {
  // Parse resultText or build custom props
  enriched.customProp = { /* ... */ }
}
```

### Rendering (in the template)

In the `.puzzle-masonry` map, branch on the custom prop:

```astro
{node.customProp ? (
  <CustomComponent {/* props */} />
) : node.linkPreview ? (
  <LinkPreviewCard {/* existing */} />
) : (
  <PuzzleResult resultText={overridePuzzleResult(node.puzzle, node.resultText)} />
)}
```

If adding a new component, create it in `src/components/` following the patterns of `LinkPreviewCard.astro` or `PuzzleResult.astro`.

### Card height

Update `calculateSpan` in `[date].astro` if the puzzle needs a fixed card height:

```js
function calculateSpan(puzzle, text) {
  if (puzzle === "new-puzzle-slug") return 17 // fixed height
  if (puzzle === "nytimes-mini-crossword") return 17
  return text.split("\n").length + 5
}
```

## Related Projects

After completing the changes in this project, the user also needs corresponding changes in two sibling projects. Remind the user to make these changes (they each have their own `add-puzzle-type` skill):

| Project | Path | What it does |
|---------|------|--------------|
| **nenoy-api** | `../nenoy-api` | Parses incoming share text, extracts day number / date played, stores scores. Needs a new entry in its `PUZZLES` array with `resultPattern`, day-number or date extraction config. |
| **nenoy-the-bot** | `../nenoy-the-bot` | Telegram bot that detects puzzle share messages and forwards them to the API. Needs a new entry in its `src/config/puzzles.js` with `displayName`, `emoji`, `link`, and `resultPattern`. |

Both projects live under the same parent directory (`../`). Share the puzzle name, example share text, and link with the user so they can pass them to the other projects' skills.

## File Reference

| File | Role |
|------|------|
| `src/config/puzzles.js` | Slug registry, display order, labels, dark-mode flag |
| `src/pages/puzzle-scores/[date].astro` | Page: fetches scores, enrichment logic, rendering, card sizing |
| `src/components/PuzzleResult.astro` | Default renderer: emoji grid with twemoji + linkify |
| `src/components/PairLabel.astro` | Badge showing puzzle label + day number |
| `src/components/LinkPreviewCard.astro` | Rich card with title/description/domain; image is optional |
| `src/utils/nenoy-api-fetch.js` | API fetcher with pagination and caching |
| `src/styles/puzzle-scores.css` | Shared puzzle page styles |
