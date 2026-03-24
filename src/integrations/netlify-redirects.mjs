import { readdir, writeFile } from "node:fs/promises"
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
  const target = `/puzzle-scores/${latestDate}`
  const redirectRules = [
    `/puzzle-scores   ${target}  302!`,
    `/puzzle-scores/  ${target}  302!`,
  ].join("\n")

  const redirectsPath = path.join(outDir, "_redirects")
  await writeFile(redirectsPath, redirectRules + "\n")
  logger.info(`Generated redirect: /puzzle-scores -> ${target}`)
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
