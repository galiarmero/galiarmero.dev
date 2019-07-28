---
title: "Getting Started with Gatsby, Fast and Slow"
datePublished: "2019-07-21 16:34:04 +0800  (Don't forget to edit before publishing!)"
teaser: "Get a website up and running quickly with Gatsby while understanding what makes it tick"
---

Over the past weeks, I've been ~~building my personal site to play with Gatsby~~ playing with Gatsby to build my personal site. It's been painless so far. But as with any personal project, one of the challenges is really taking the first step. Fortunately, for Gatsby, the first step can take a matter of seconds.

> If Gatsby is new to you, check out my previous post, [Why My Blog Is Built with Gatsby](../why-my-blog-is-built-with-gatsby), where I explain what Gatsby is, how it works and the thinking behind why I picked it to run my site.

# Up and running in seconds

Provided that you have Git and npm already installed, getting a site running with Gatsby is as fast as running the commands in this block:

```bash{1,2,4}
npm install -g gatsby-cli
gatsby new my-hello-world-site https://github.com/gatsbyjs/gatsby-starter-hello-world
cd my-hello-world-starter/
gatsby develop
```

First, we install `gatsby-cli` globally. This makes the `gatsby` command line tool available for use throughout the different steps in the development process. These include pulling boilerplate code, starting a development server, building the website, or deploying to a web host. 

Next, using the freshly installed `gatsby` command, we create a new Gatsby project in a directory called `my-hello-world-site`. The project will be cloned from a starter called `gatsby-starter-hello-world`.

"What's a starter?" you might ask. They are just Git projects created and maintained by the community to help people jump-start their development quickly. They already contain an initial working code for a website that you can further tweak to your liking. There are starters for all sorts of purposes, such as blogs, portfolios, docs and eCommerce. If you plan on making a specific website, chances are there are already starters for your use case in the [Starter Library](https://www.gatsbyjs.org/starters/?v=2).

In our case, we are using the official `gatsby-starter-hello-world`, which is the most bare-bones starter I can find. It just shows 'Hello world!' on a clean white page.

The last step is to just run `gatsby develop` inside the root directory of `my-hello-world-site` project we just created. This starts a 'development' version of the website, on [http://localhost:8000/](http://localhost:8000/) by default. You can then open this URL in the browser to see changes reflected whenever you tweak the code.

![Hello world!](hello-world.png)

With those easy steps, you are pretty much all set to start developing.


# Adding pages

The most straightforward way to add pages is to create React components inside `src/pages`. At build time, Gatsby core automatically renders them into pages with the path based on the filename. For example, a component in `src/pages/blog.js` turns into a page in `/blog`.

Here's a sample React component.

```jsx{5,6}
import React from "react"

export default () => (
    <div>
        <h1>Welcome to my blog!</h1>
        <p>The spectacle before us was indeed sublime.</p>
    </div>
)
```

If you are not familiar with the syntax, this is just JavaScript at its core. It uses an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) that returns a React element in [JSX](https://reactjs.org/docs/introducing-jsx.html) syntax.

Copy this to `src/pages/blog.js`. If you haven't yet, run `gatsby develop` and check out [http://localhost:8000/blog](http://localhost:8000/blog). You should see a page that looks exactly like the way we wanted it in the HTML-like portion of `blog.js`.

![/blog](welcome-to-my-blog.png)



# Creating pages out of a Markdown source

What if you wanted to write thousands of blog posts as Markdown files? You somehow need to read the contents and convert them to HTML so that they can be rendered as pages. In this case, the previous approach of creating React components in `src/pages` is no longer ideal.

When the contents of your pages need to be fetched from some source, you'll most likely need a _source plugin_. If you need to fetch from the Wordpress API, there's a Wordpress source plugin. If you need to pull data from a MongoDB collection, theres a MongoDB source plugin. You can search the [Gatsby Plugin Library](https://www.gatsbyjs.org/plugins/) for the plugin that will do the job. Just search _'gatsby-source-'_, as this is the convention for naming source plugins.

For our problem, `gatsby-source-filesystem` is the one. It just pulls data from the local filesystem. Let's play with it.

First step is to install it.

```shell
npm install gatsby-source-filesystem
```

Next, you have to declare your intent to use it by adding it as a plugin in `gatsby-config.js`. In the code below, we are also instructing the plugin to read files inside `content/blog` directory.

```js{3-9}
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
```

During bootstrapping, Gatsby loads plugins listed in `gatsby-config.js`. It will then use source plugins to pull data into a GraphQL schema.

GraphQL manages the data system for Gatsby. It normalizes data pulled from different sources so that we can query them in a standard expressive manner when we create our pages. Note that it only exists at build-time, not when the site is already live.

With that being said, run `gatsby develop` to initiate the bootstrapping sequence. Then, open [http://localhost:8000/___graphql](http://localhost:8000/___graphql). This is the link to GraphiQL, the in-browser GraphQL IDE.

![First look at GraphiQL](graphiql-first-look.png)

In the Explorer section on the right are the available _schemas_ that can be queried. Highlighted in green are the schemas that were created by `gatsby-source-filesystem`.

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
