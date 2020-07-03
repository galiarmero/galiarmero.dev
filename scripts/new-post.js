/*
  Create directory and template markdown for a new post

  Usage:
    npm run new-post "Post title"
    node new-post.js "Post title"
 */

const slugify = require('slugify')
const fs = require('fs')
const dateFns = require('date-fns')

const title = process.argv[2]

if (!title)
  throw "Missing title!"

// Possibly configurable variables
const PARENT_DIR = 'content/blog/'
const POST_EXTENSION = 'md'

const slug = slugify(title, {
  replacement: '-',
  lower: true,
})
const postPath = `${PARENT_DIR}${slug}`
if (fs.existsSync(postPath)) throw "Post with the same name already exists"

const datePublished = dateFns.format(new Date(), 'YYYY-MM-DD HH:mm:ss ZZ')

  
fs.mkdirSync(postPath)
fs.writeFile(
  `${postPath}/index.${POST_EXTENSION}`,
  `---
title: "${title}"
datePublished: "${datePublished} // Don't forget to edit before publishing!"
teaser: "Some post teaser"
sharingCard: ./sharing-card-${slug}.png
---

`,
  (err) => {
    if (err) throw `Error creating ${postPath}/index.${POST_EXTENSION}`
    
    console.log(`Successfully created '${title}'\nSee ${postPath}/index.${POST_EXTENSION}`)
  }
)
