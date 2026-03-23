const {
  NENOY_API_BASE_URL,
  NENOY_API_USER,
  NENOY_API_PASS,
  NENOY_API_TIMEOUT,
  NENOY_API_RETRY_MAX,
  NENOY_API_RETRY_DELAY,
  PUZZLE_SCORES_PER_PAGE,
} = import.meta.env

const AUTH_HEADER =
  "Basic " +
  Buffer.from(`${NENOY_API_USER}:${NENOY_API_PASS}`).toString("base64")

const timeout = Number(NENOY_API_TIMEOUT) || 10000
const retryMax = Number(NENOY_API_RETRY_MAX) || 3
const retryDelay = Number(NENOY_API_RETRY_DELAY) || 1000
const perPage = Number(PUZZLE_SCORES_PER_PAGE) || 50

async function fetchWithRetry(url, opts, retriesLeft = retryMax) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  try {
    const res = await fetch(url, { ...opts, signal: controller.signal })
    clearTimeout(timer)
    return res
  } catch (err) {
    clearTimeout(timer)
    if (retriesLeft > 0) {
      console.log(
        `Retrying (${retryMax - retriesLeft + 1}/${retryMax}) after error: ${err.message}`
      )
      await new Promise((r) => setTimeout(r, retryDelay))
      return fetchWithRetry(url, opts, retriesLeft - 1)
    }
    throw err
  }
}

let cachedScores = null

export async function getAllPuzzleScores() {
  if (cachedScores) return cachedScores

  const scores = []
  let startAt = null

  console.log(`Fetching puzzle scores from Nenoy API, ${perPage} at a time`)

  while (true) {
    const url =
      `${NENOY_API_BASE_URL}/puzzle-scores?limit=${perPage}` +
      (startAt ? `&startAt=${startAt}` : "")

    const start = performance.now()
    const res = await fetchWithRetry(url, {
      headers: { Authorization: AUTH_HEADER },
    })

    if (!res.ok) {
      throw new Error(`Nenoy API error: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
    const elapsed = (performance.now() - start).toFixed(3)
    console.log(
      `Got ${data.puzzleScores.length} records with startAt=${startAt} in ${elapsed}ms`
    )

    scores.push(...data.puzzleScores)

    startAt = res.headers.get("x-next-page-start-id")
    if (!startAt || startAt === "null") {
      console.log("No more records left")
      break
    }
  }

  cachedScores = scores
  return scores
}
