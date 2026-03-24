import { readdir, readFile, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

async function generatePuzzleScoresRedirect(outDir, logger) {
  const puzzleScoresDir = path.join(outDir, "puzzle-scores")

  let entries
  try {
    entries = await readdir(puzzleScoresDir, { withFileTypes: true })
  } catch {
    logger.warn(
      "No puzzle-scores directory found, skipping redirect generation"
    )
    return
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/
  const dates = entries
    .filter((e) => e.isDirectory() && datePattern.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => b.localeCompare(a))

  if (dates.length === 0) {
    logger.warn(
      "No puzzle score date pages found, skipping redirect generation"
    )
    return
  }

  const latestDate = dates[0]
  const redirectRule = `/puzzle-scores  /puzzle-scores/${latestDate}  302!`

  const redirectsPath = path.join(outDir, "_redirects")
  let existing = ""
  if (existsSync(redirectsPath)) {
    existing = (await readFile(redirectsPath, "utf-8")).trimEnd() + "\n"
  }

  await writeFile(redirectsPath, existing + redirectRule + "\n")
  logger.info(
    `Generated redirect: /puzzle-scores -> /puzzle-scores/${latestDate}`
  )
}

export default function netlifyRedirects() {
  return {
    name: "netlify-redirects",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir)
        await generatePuzzleScoresRedirect(outDir, logger)
      },
    },
  }
}
