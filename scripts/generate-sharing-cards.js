const path = require('path')
const fs = require('fs')
const glob = require('glob')
const puppeteer = require('puppeteer')

const CARD_PREFIX = `sharing-card`
const CARD_URL = `http://localhost:8000/cards`

const getBlogPosts = () => {
  return glob.sync(path.join(process.cwd(), 'content', 'blog', '*'))
}

const getSharingCardPath = (dir, slug) => path.join(dir, `${CARD_PREFIX}-${slug}.png`)

const takeScreenshot = async (url, width, height, destination) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: 'networkidle2',
  })
  await page.screenshot({
    path: destination,
    clip: {
      x: 0,
      y: 0,
      width,
      height,
    },
  })

  await browser.close()
}

const main = async () => {
  const blogPosts = getBlogPosts()

  for (const dir of blogPosts) {
    const slug = path.basename(dir)
    const cardPath = getSharingCardPath(dir, slug)

    if (!fs.existsSync(cardPath)) {
      await takeScreenshot(
        `${CARD_URL}/${slug}`,
        800,
        400,
        cardPath
      )
      console.log(`Created ${cardPath}`)
    }
  }
}

main()