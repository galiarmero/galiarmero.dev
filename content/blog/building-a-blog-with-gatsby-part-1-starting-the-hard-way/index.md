---
title: 'Building a Blog with Gatsby, Part 1: Why Gatsby?'
datePublished: '2019-07-03 21:04:00 +0800'
teaser: Creating blazing-fast sites with Gatsby is really easy, even if we're doing it the slightly harder way.
---

I decided to start this blog. It's the perfect medium to share and solidify my understanding of the things I learn. It's also an awesome way to learn [Gatsby](https://www.gatsbyjs.org/).


## What's Gatsby?

You might already know that Gatsby is a React-based static site generator. What this means is that instead of rendering web pages on the server or client side, they are _pre_-generated at deploy time.

Imagine queueing in a well-hyped [Tiger Sugar](https://tigersugar.com/) joint. The staff could start crafting your cup of boba as soon as you order it. The wait can range from seconds to a couple of minutes, depending on the influx of orders and the staff's level of motivation. You still get to enjoy your cup, regardless. 

_Or_, they could start making a shitload of milk tea cups minutes before they open. That way, by the time you order, a premade cup is ready to be served _sari-sari_ store style. Brilliant.

You would probably argue that your milk tea is already lukewarm and not-so-fresh when you get it. You're right because that was a bad analogy. Web pages are not milk tea, but you get the idea. 

Instead of waiting to generate pages when requested, Gatsby builds pages as static files, ready to be deployed. This is ideal for sites with content that doesn't change frequently (i.e. no real-time data) like business landing pages, eCommerce catalogs, documentation, blogs, [etc](https://www.gatsbyjs.org/showcase/). (Gatsby is working every release to improve its )


## How it works

This nice illustration from the [Gatsby](https://www.gatsbyjs.org/) homepage sums it up.

![How Gatsby Works](how-gatsby-works.png)

Your data that can come from pretty much any source: Markdown files, APIs, [headless CMS](https://headlesscms.org) (basically a frontend-less CMS), and even a combination of multiple sources. During build, Gatsby pulls them from those sources, transforms them into a usable form if you want to, and makes the data available for access via [GraphQL](https://graphql.org/).

Then, you define expressive GraphQL queries to get the data you need and use them to create pages the way you like it using HTML, CSS and [React](https://reactjs.org/). Gatsby generates static pages based on these and you can deploy them to your favorite static web host. They are awesome and they worry about maintenance, security and [content delivery](https://en.wikipedia.org/wiki/Content_delivery_network), making deployment a walk in the park.


## Why I chose Gatsby

The static site approach brings a lot of benefits to the table. Apart from the obvious performance advantages, potential intruders have small surface of attack since there is no running server or database. It is also more SEO-friendly since static pages are easily crawled by search engine bots. 

For this blog, going with a static site was a no-brainer. But there are [a lot](https://www.staticgen.com/) of static site generators to choose from. The decision all boiled down to personal preference.

### Tech stack

My interest and familiarity with the JavaScript ecosystem lead me to Gatsby. I wanted to create my pages with React because I was familiar with it and at the same time, I still have a lot to learn about it. GraphQL is also an enticing tech that I wanted to get more comfortable with.

Might I add that I also follow JavaScript stans on Twitter and the hype was infectious.



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