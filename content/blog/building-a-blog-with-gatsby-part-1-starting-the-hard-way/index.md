---
title: 'Building a Blog with Gatsby, Part 1: Starting from Scratch'
datePublished: '2019-07-03 21:04:00 +0800'
teaser: Creating blazing-fast sites with Gatsby is really easy, even if we're doing it the slightly harder way.
---

I decided to start this blog. It's the perfect medium to share and solidify my understanding of the things I learn. It's also an awesome way to learn [Gatsby](https://www.gatsbyjs.org/).

## What's Gatsby?

You might already know that Gatsby is a React-based static site generator. What this means is that instead of rendering web pages on the server or client side, they are _pre_-generated at deploy time.

Imagine queueing in a well-hyped [Tiger Sugar](https://tigersugar.com/) joint. The staff could start crafting your cup of boba as soon as you order it. The wait can range from seconds to a couple of minutes, depending on the influx of orders and the staff's level of motivation. You still get to enjoy your cup, regardless. _Or_, they could start preparing a shitload of milk tea cups minutes before they open. That way, by the time you order, your cup is ready to be served _sari-sari_ store style. Brilliant.

You would probably argue that your milk tea is already lukewarm and not-so-fresh when you get it. You're right because that was a bad analogy. Web pages are not milk tea, but you get the idea. Instead of waiting to generate pages when requested, Gatsby builds pages as static files, ready to be deployed. This is ideal for sites with content that doesn't change frequently (i.e. no real-time data) like business landing pages, online documentation, blogs, [etc](https://www.gatsbyjs.org/showcase/).




## Why I chose Gatsby

The static site approach brings a lot of benefits to the table. Apart from the speed, potential intruders have little surface of attack since there is no running server or database. It is also more SEO-friendly since static pages are easily crawled by search engine bots.


<!--
    Static site generator architecture
-->

<!--
    Role of GraphQL in the build process
-->

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