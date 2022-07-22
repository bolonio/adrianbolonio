---
title: Testing Web Accessibility - Part 1
description: Our role as frontend and web developers is to create clear interfaces to make people understand and care about data, independently of their disabilities or impairments, so the only way to be sure that the websites we develop are fully accessible is to test our code.
locale: en
image: intro.png
imageAlt: a summary with links of the testing tools to test accessibility during the development
alternate: /blog/testeando-accesibilidad-web
publishedAt: "2020-04-10"
tags:
  - Accessibility
  - Testing
---

## What is Accessibility (a11y)?

> “Accessibility is about providing access to information for everyone, regardless of age or ability, so that each individual can realize their full potential.“
>
> Source: [The International Association of Accessibility Professionals (IAAP)](https://www.accessibilityassociation.org/content.asp?contentid=1)

Why is it so obvious in real world that the three situations below are completely wrong?.

![three wrongly built accessible ramps](/images/blog/testing-web-accessibility-part-1/wrong-a11y.jpeg)

Probably because those three ramps were built by non-disabled people, or maybe because they didn't put themselves in their shoes?
We can even think that these situations were not properly tested from the end user perspective, nor during the design phase, nor the building phase.
But it's very clear to me that someone using a wheelchair will always have problems using these three "accessible" ramps.

## What is Web Accessibility (a11y)?

When we develop a new web application, we often put a lot of work on the design, on making it beautiful and usable.
In other words, we want our web app to be effective, efficient, and satisfying for the user.
But a lot of times we don’t think about the user experience for everyone, people with or without disabilities, including people with age-related impairments.

> Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
> More specifically, people can: perceive, understand, navigate, interact with the Web, and contribute to the Web
>
> Source: [The World Wide Web Consortium (W3C)](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

Let's see how we can translate this reality to the online world, because for some of us, not visually impaired people, it's not so obvious to identify a non-accessible website.
Let me show you an example. If you are in an e-commerce, an online shop for example, and you call the support team because you may want to find your latest purchases,
but you don't know how to find them, a typical answer from them could be "you need to click on the button in the top right corner".
Or maybe you want to change your password, or your email address, so they could say "you need to click on the button with the engine icon".
The problem here is that for visually impaired people such as blind people, there's no such thing as top right corner or button with the engine icon.
So we need to have these situations in mind when we develop a new website.

Based on the numbers from the [World Health Organization (WHO)](https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment), it is estimated that globally, at least 2.2 billion people have a vision impairment or blindness, of whom at least 1 billion have a vision impairment that could have been prevented or has yet to be addressed.
This 1 billion people includes those with moderate or severe distance vision impairment or blindness due to unaddressed refractive error, as well as near vision impairment caused by unaddressed presbyopia.

## Testing Web Accessibility (a11y)

Automated accessibility tests can free up your quality assurance (QA) team from manual testing every part of your application, but they can’t automatically make your site accessible.
We cannot forget that only 20% to 50% of all accessibility issues can be detected with automated tests, so we need to consider those automated accessibility tests just as one step of a larger testing process.

I've created a series of three blog posts to give to give you an introduction about the tools that I usually use to test accessibility during my development process:

Testing Web Accessibility - Part 1 - Testing the code

[Testing Web Accessibility - Part 2 - Testing the DOM](/testing-web-accessibility-part-2)

[Testing Web Accessibility - Part 3 - Testing in the browser](/testing-web-accessibility-part-3)

## Testing the code

I've created a React application with three small components: a button, a fake button (a link with the role button), and an image.
In the main application I've introduced a bunch of accessibility errors, so let's see how can I find them using some testing tools.

You can find the code of the application this [GitHub repository](https://github.com/bolonio/testing-web-a11y)

### Testing your application from the browser console log

The first tool I would like to show you is [react-axe](https://github.com/dequelabs/react-axe). This tools is part of a bigger family of tools developed by a company called [Dequelabs](https://www.deque.com/axe/).

To start using this tool, you need to install it as a dev dependency in your React project.

```bash
$ npm install --save-dev react-axe
```

Then you need to call the exported function passing in the React and ReactDOM objects as well as a timing delay in milliseconds that will be observed between each component change and the time the analysis starts.
You need to be sure that this is only done in a development environment and not in production.

```js
if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe")
  axe(React, ReactDOM, 1000)
}
```

This tool will run accessibility tests over your React application using the axe-core testing library, and you will be able to see the results in the developer tools console of your browser.
A severity level is also assigned for each violation. The possible levels are: Minor, Moderate, Serious, Critical.

![A slide of a presentation on how to use the tool react-axe](/images/blog/testing-web-accessibility-part-1/react-axe.jpeg)

Each violation includes the description of the issue, the HTML element in where the violation was found, and a link to the [dequeuniversity](https://dequeuniversity.com/), a full documentation source with detailed information about the issue, and the steps to solve it.
Several occurrences of the same violation are grouped.

### Using a Linter, a tool that analyzes source code to flag potential errors, bugs, and vulnerabilities

If you're using eslinter in your application, you can include the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) with the accessibility rules.
You just need to add jsx-a11y to the plugins section of your .eslintrc configuration file. You can omit the "eslint-plugin-" prefix. Then configure the rules you want to use under the rules section.

```json
{
    "plugins": ["jsx-a11y"],
    "extends": ["plugin:jsx-a11y/recommended"],
    "rules": {
        ...
    }
}
```

It would be enough including `"extends": ["plugin:jsx-a11y/recommended"]`, but you can configure the rules you want to use under the rules section in the .eslintrc.json file

The linter will analyze your source code to find potential accessibility errors, bugs, and vulnerabilities displaying them directly in the code editor and in the terminal.

![A slide of a presentation on how to use the tool eslint-plugin-jsx-a11y](/images/blog/testing-web-accessibility-part-1/eslint-plugin-jsx-a11y.jpeg)

### Writing your own unit test with jest

We tend to forget that writing unit tests is part of the development process, and not a post process.
Writing your own automated unit tests is the best way to find errors, bugs, and vulnerabilities in your code.
If you're using [jest](https://jestjs.io/), a JavaScript Testing Framework, you can create your own accessibility unit tests with another tool from the axe tools family, [jest-axe](https://github.com/nickcolley/jest-axe).

To start using it, you need to install it as a dev dependency in your React project.

```bash
$ npm install --save-dev jest-axe
```

You can now write automated accessibility unit tests using jest and ReactDOMServer to render the html of your application to check for errors, bugs, and vulnerabilities.
Here it is an example of a very simple one:

```js
import { axe, toHaveNoViolations } from "jest-axe"
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "./App"

expect.extend(toHaveNoViolations)

it("should demonstrate this matcher`s usage with react", async () => {
  const html = ReactDOMServer.renderToString(<App />)
  const results = await axe(html)
  expect(results).toHaveNoViolations()
})
```

The results will be displayed in the terminal when running the test.

![A slide of a presentation on how to use the tool jest-axe](/images/blog/testing-web-accessibility-part-1/jest-axe.jpeg)

You can include these kind of automated accessibility unit tests in your build pipeline, so any code with accessibility issues won't be released to production.
As well you can use the results of these automated tests to build reports for your accessibility and product team.

In the next post I will show you some tools to test the whole DOM structure of your application.

You can read the rest of the series of three blog posts here:

Testing Web Accessibility - Part 1 - Testing the code

[Testing Web Accessibility - Part 2 - Testing the DOM](/blog/testing-web-accessibility-part-2)

[Testing Web Accessibility - Part 3 - Testing in the browser](/blog/testing-web-accessibility-part-3)
