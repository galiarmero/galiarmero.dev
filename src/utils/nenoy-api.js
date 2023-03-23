const axios = require(`axios`)
const axiosRetry = require(`axios-retry`)

const {
  NENOY_API_BASE_URL,
  NENOY_API_USER,
  NENOY_API_PASS,
  NENOY_API_TIMEOUT,
  NENOY_API_RETRY_MAX,
  NENOY_API_RETRY_DELAY,
} = process.env

const nenoyApi = axios.create({
  baseURL: NENOY_API_BASE_URL,
  auth: {
    username: NENOY_API_USER,
    password: NENOY_API_PASS,
  },
  timeout: NENOY_API_TIMEOUT,
})

axiosRetry(nenoyApi, {
  retries: NENOY_API_RETRY_MAX,
  retryDelay: () => NENOY_API_RETRY_DELAY,
  shouldResetTimeout: true,
  retryCondition: (error) => {
    console.log(`[DEBUG] Error found: ${error}`)
    console.log(`[DEBUG] Error code found: ${error.code}`)
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.code === "ECONNABORTED"
    )
  },
  onRetry: (retryCount, error, requestConfig) => {
    console.log(`Attempting retry number ${retryCount} after error: ${error}`)
    return
  },
})

const getPuzzleScores = async (limit, startAt = null) => {
  let url =
    `/puzzle-scores?limit=${limit}` + (startAt ? `&startAt=${startAt}` : "")
  try {
    return nenoyApi.get(url)
  } catch (e) {
    console.error(e)
    throw e
  }
}

module.exports = {
  getPuzzleScores,
}
