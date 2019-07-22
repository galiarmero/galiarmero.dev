---
title: "Getting Started with Gatsby, Fast and Slow"
datePublished: "2019-07-21 16:34:04 +0800  (Don't forget to edit before publishing!)"
teaser: "Get a website up and running quickly with Gatsby while understanding what makes it tick"
---

Over the past weeks, I've been ~~building my personal site to play with Gatsby~~ playing with Gatsby to build my personal site. It's been painless so far. But as with any personal project, one of the challenges is really taking the first step. For Gatsby, the first step can take a matter of seconds (provided that you have npm/Yarn and Git).

> If Gatsby is new to you, check out my previous post, [Why My Blog Is Built with Gatsby](../why-my-blog-is-built-with-gatsby), where I explain what Gatsby is, how it works and the thinking behind why I picked it to run my site.

# Up and running in seconds

Getting a site running with Gatsby is as fast as running the commands in this block:

```bash{1,2,4}
npm install -g gatsby-cli
gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
cd my-hello-world-starter/
gatsby develop
```

First, you need to install `gatsby-cli`, the tool for basically anything you need, from getting up and running, to starting a dev server, to deployment.

<!--
    Setting up `gatsby-source-filesystem` allows you to query file nodes through GraphQL. It adds these fields:
        - allFile
        - directory
        - file
-->
<!--
    Doing a GraphQL query in a page
-->
<!--
Source plugins pull data from a data source into the Gatsby data system.
Transformer plugins transform this raw data into something more usable
-->
<!--
-->
