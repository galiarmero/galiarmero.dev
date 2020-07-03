/*
  Generate new blog posts' card images for social media sharing

  Usage:
    npm run generate-sharing-cards
    node generate-sharing-cards.js
 */

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
    args: ['--no-sandbox', '--enable-font-antialiasing', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: width + 20, height: height + 20 });
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
        1200,
        628,
        cardPath
      )
      console.log(`Created ${cardPath}`)
    }
  }
}

main()