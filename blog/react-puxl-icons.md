---
title: Creating a React library based on the collection of accessible PUXL SVG icons
description: I decided to create a React library based on the collection of accessible PUXL icons library, an open source collection of more than 300 SVG icons custom tailored for PUXL framework, each with its own accessible title and description.
locale: en
image: intro.png
imageAlt: a decorative image with the PUXL logo and a screenshot with several icons
publishedAt: "2020-05-25"
alternate: /blog/react-puxl-iconos
tags:
  - Accessibility
  - React
---

## What is PUXL?

Some months ago, while following some accessibility experts on Twitter and attending some online conferences,
I found a new framework to develop more accessible website. This framework is called [PUXL Framework](https://puxl.io/).

> "PUXL framework is a free and open-source and eco-friendly library to create front-end Web interfaces. It helps you build accessible and responsive sites with lightweight HTML."
>
> Source: PUXL Framework website

I got to know the people behind the project, I joined their Slack discussions, and I finally decided to take a deeper look at the framework.
I started digging into the [accessible PUXL icons library](https://puxl.io/puxl-icons/),
an open source collection of more than 300 SVG icons custom tailored for PUXL framework, each with its own accessible title and description.

Since I develop in React, I wanted to be able to use those SVGs as React components,
so I decided to create a React icons library based on the collection of accessible PUXL icons library. Let me tell you about how I did it.

## What do I need to create and publish a React package to npm?

First of all I wanted to publish my React package to npm,
so everyone can install it directly in their React projects without downloading the whole SVGs library and creating a new folder with them in the project.

I published a React component as a package to npm in the past, [a simple and minimal React input range component](https://www.npmjs.com/package/react-component-range),
but that was a year ago, and React and npm changed a lot, so I needed to look for more information about what were the steps to do it nowadays,
and I found this great [guide to publish a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/),
where the author created a [template of a project ready to be published in npm](https://github.com/ovieokeh/npm-react-typescript-template) that reduced my developing setup a lot.
Of course, if you want to develop a React package, you need to be familiar with React, typescript and the npm registry. After the setup was done, how did I continue?

## How did I transform all SVGs into React components?

As I said before, I wanted to avoid downloading all SVG files and creating a new folder with them in the project.
I really wanted to be able to import every icon individually as I needed it as a React component.
On top of that, I wanted to be able to pass some props to the component, or at least three attributes that I think were relevant for an SVG icon component: width, height, and fill.
Thanks to this step, I could size the icon and color it.

The structure of one of the SVG icon looks like this. Each icon comes with its own accessible title and description.

```html
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!--
    Puxl icons 1.0 - https://puxl.io/puxl-icons
    Created by @MrKanuel, brought by The Puxl Clan with love from Basque Country
    Puxl icons is licensed under the GPL V3 - Copyright © 2019 PUXL
    https://github.com/puxl/puxl-icons/blob/master/LICENSE
  -->
  <g id="accessibility" aria-labelledby="t-accessibility d-accessibility">
    <title id="t-accessibility">Accessibility</title>
    <desc id="d-accessibility">
      A human, standing with arms extended, in a circle
    </desc>
    <path
      d="M16,19.1c0,0,0.4,0,0.7,1L19.1,27.4c0.2,0.5,0.801,0.8,1.301,0.6s0.812-0.8,0.604-1.3L18.6,19.6 C18.2,18.5,18,17.2,18,16v-2.7c0-0.368,0.078-1.394,1.189-1.524c2.474-0.292,4.854-0.766,5.006-0.795 c0.543-0.108,0.894-0.635,0.785-1.176c-0.107-0.542-0.646-0.893-1.176-0.785C23.755,9.029,18.865,10,16,10S8.245,9.029,8.196,9.02 C7.656,8.911,7.127,9.263,7.02,9.804c-0.108,0.542,0.243,1.068,0.784,1.176c0.144,0.029,2.533,0.503,5.007,0.795 C13.922,11.906,14,12.932,14,13.3V16c0,1.2-0.2,2.5-0.6,3.6L11,26.7c-0.2,0.5,0.1,1.1,0.6,1.3s1.1-0.1,1.3-0.6l2.4-7.301 C15.6,19.1,16,19.1,16,19.1z"
    />
    <circle cx="16" cy="7" r="2" />
    <path
      d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M16,31C7.8,31,1,24.3,1,16S7.8,1,16,1 s15,6.8,15,15S24.3,31,16,31z"
    />
  </g>
</svg>
```

It seemed obvious to me that I couldn't make more than 300 React components simply by copying the SVG code into the .tsx files, so I needed to find a better way to automatize the process.
My first idea was to create a script that could read the content of the SVG file and then insert it into the .tsx file,
so I started using the "fs" library in JavaScript to manipulate the file system. I quickly failed and I started searching on the Internet for a solution,
because I was sure I was not going to be the first one with this idea. While I was searching the Internet, I remembered that at work we do something very similar with our design system to generate our icons,
so I took a look at the project, and there was the solution: SVGR.

[SVGR](https://react-svgr.com/) is a library that transforms SVG into ready-to-use components. It was the perfect solution for my idea,
so I started reading the documentation and experimenting with the library. It was very easy to start using it:
I just needed to install the SVGR CLI on my machine and start using it from the terminal.

After some experiments, I ended up creating a new script option in my package.json file to generate all SVG icons from a folder. It looked something like this:

```json
{
  "scripts": {
    "generate:icons": "svgr -d ./src ./resources/icons"
  }
}
```

Now I could run the script in my terminal and all my icons would be converted to React components

```bash
$ npm run generate:icons
```

When I checked the generated javascript code I saw a couple of issues. The first issue was that the title and the description were not rendered.
The second issue was that all ids were, as well, not rendered. The last issue was that the React component was rendered in JavaScript and not in TypeScript.

```js
import * as React from "react"

function SvgIconAccessibility(props) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <g aria-labelledby="t-accessibility d-accessibility">
        <path d="M16 19.1s.4 0 .7 1l2.4 7.3c.2.5.801.8 1.301.6s.812-.8.604-1.3L18.6 19.6c-.4-1.1-.6-2.4-.6-3.6v-2.7c0-.368.078-1.394 1.189-1.524 2.474-.292 4.854-.766 5.006-.795a.998.998 0 00.785-1.176 1.005 1.005 0 00-1.176-.785c-.049.009-4.939.98-7.804.98s-7.755-.971-7.804-.98a.999.999 0 10-.392 1.96c.144.029 2.533.503 5.007.795C13.922 11.906 14 12.932 14 13.3V16c0 1.2-.2 2.5-.6 3.6L11 26.7c-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6l2.4-7.301c.3-.999.7-.999.7-.999z" />
        <circle cx={16} cy={7} r={2} />
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 31C7.8 31 1 24.3 1 16S7.8 1 16 1s15 6.8 15 15-6.7 15-15 15z" />
      </g>
    </svg>
  )
}

export default SvgIconAccessibility
```

So I went back to the SVGR documentation and I found the flags to fix some of the issues "out of the box", and some others that needed a bit more work.
I found out that what I needed was a [SVGO](https://github.com/svg/svgo) config with some options to include and exclude some things in my final component.
I wanted to keep the viewbox, the title, and the description, and wanted to keep the ids as well, but SVGR prefix them all with `prefix__` to make them unique.
This is a great feature, but since I know that all the icons have unique ids, I wanted to delete that prefix as well. My final SVGO config looks like this:

```json
{
  "plugins": [
    { "removeTitle": false },
    { "removeViewBox": false },
    { "removeDesc": false },
    { "cleanupIDs": false },
    { "prefixIds": false }
  ]
}
```

I changed the script to add the `--typescript` flag, the `--svgo-config` flag with the SVGO config,
the `--icon` flag to replace the "width" and "height" value by "1em" in order to make the SVG size inherits from the text size, and the final version looked like this:

```json
{
  "scripts": {
    "generate:icons": "svgr --icon --typescript --svgo-config ./scripts/svgoConfig.json -d ./src ./resources/icons"
  }
}
```

Now I could run the new script in my terminal again:

```bash
$ npm run generate:icons
```

The final version with title, description, all ids, width and height, viewbox, and rendered as a TypeScript React component was:

```ts
import * as React from "react"

function SvgIconAccessibility(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="accessibility" aria-labelledby="t-accessibility d-accessibility">
        <title id="t-accessibility">{"Accessibility"}</title>
        <desc id="d-accessibility">
          {"A human, standing with arms extended, in a circle"}
        </desc>
        <path d="M16 19.1s.4 0 .7 1l2.4 7.3c.2.5.801.8 1.301.6s.812-.8.604-1.3L18.6 19.6c-.4-1.1-.6-2.4-.6-3.6v-2.7c0-.368.078-1.394 1.189-1.524 2.474-.292 4.854-.766 5.006-.795a.998.998 0 00.785-1.176 1.005 1.005 0 00-1.176-.785c-.049.009-4.939.98-7.804.98s-7.755-.971-7.804-.98a.999.999 0 10-.392 1.96c.144.029 2.533.503 5.007.795C13.922 11.906 14 12.932 14 13.3V16c0 1.2-.2 2.5-.6 3.6L11 26.7c-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6l2.4-7.301c.3-.999.7-.999.7-.999z" />
        <circle cx={16} cy={7} r={2} />
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 31C7.8 31 1 24.3 1 16S7.8 1 16 1s15 6.8 15 15-6.7 15-15 15z" />
      </g>
    </svg>
  )
}

export default SvgIconAccessibility
```

The script could generate more than 300 React components into my ./src folder, together with an .index.tsx file with all of the exports.
Following the [guide to publish a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/),
after building my package, I linked the package to a new demo app, created with create-react-app, using `yarn link` to test it, so my package was ready to be published to npm.
I wrote a complete and meaningful documentation in the readme file and I published it.

## How can I use the PUXL icons library in my React application?

The package is published in the npm registry, so anyone can install it using npm or yarn

```bash
$ npm i --save react-puxl-icons
```

```bash
$ yarn add react-puxl-icons
```

Each icon can be individually imported into a React application, like:

```js
import React from "react"
import { IconAccessibility } from "react-puxl-icons"

export const App = () => (
  <div>
    <IconAccessibility />
  </div>
)
```

The icons accept any SVG attribute as prop, as it would use in a SVG element in HTML, like:

```js
import React from "react"
import { IconAccessibility } from "react-puxl-icons"

export const App = () => (
  <div>
    <IconAccessibility width="3em" height="3em" fill="red" />
    <IconAccessibility width="5em" height="5em" />
    <IconAccessibility width="40px" height="40px" fill="green" />
    <IconAccessibility fill="blue" />
  </div>
)
```

You can find the **react-puxl-icons** package in [npm](https://www.npmjs.com/package/react-puxl-icons) and you can find the source code in [GitHub](https://github.com/bolonio/react-puxl-icons).

This is an open source project, so if you have any suggestion on how this project could be improved, please read the [contributing guidelines](https://github.com/bolonio/react-puxl-icons/blob/master/CONTRIBUTING.md).
I'd love all and any contributions. You can submit issues and enhancement requests through the [issues page on GitHub](https://github.com/bolonio/react-puxl-icons/issues).
