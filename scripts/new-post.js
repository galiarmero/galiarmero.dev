const slugify = require('slugify')
const fs = require('fs')
const dateFns = require('date-fns')

const title = process.argv[2]

if (!title)
  throw "Missing title!"

// Possibly configurable variables
let parentDir = 'content/blog/'
let postExtension = 'md'

const slug = slugify(title, {
  replacement: '-',
  lower: true,
})
const postPath = `${parentDir}${slug}`
if (fs.existsSync(postPath)) throw "Post with the same name already exists"

const datePublished = dateFns.format(new Date(), 'YYYY-MM-DD HH:mm:ss ZZ')

  
fs.mkdirSync(postPath)
fs.writeFile(
  `${postPath}/index.${postExtension}`,
  `---
title: "${title}"
datePublished: "${datePublished} // Don't forget to edit before publishing!"
teaser: "Some post teaser"
sharingCar: ./sharing-card-${slug}.png
---

`,
  (err) => {
    if (err) throw `Error creating ${postPath}/index.${postExtension}`
    
    console.log(`Successfully created '${title}'\nSee ${postPath}/index.${postExtension}`)
  }
)
