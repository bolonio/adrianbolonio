---
title: Automating the accessibility tests of your source code with GitHub Actions
description: Automating your accessibility tests with libraries like axe, pa11y, lighthouse, or unit tests directly in your GitHub repository is really easy with GitHub Actions.
locale: en
image: intro.png
imageAlt: A decorative image with the quote "Automating the accessibility tests of your source code with GitHub Actions"
alternate: /blog/accesibilidad-github-actions
publishedAt: "2021-02-22"
tags:
  - Accessibility
  - Testing
---

## GitHub Actions

**[GitHub Actions](https://docs.github.com/en/actions)** allow you to automate, customize, and execute your software development workflows right in your repository with GitHub Actions.
With GitHub Actions you could execute a series of statements and commands after a specific event has occurred, simply put, it's your own _pipeline CI / CD_ directly in your repository.

### Workflows

Github defines a **[workflow](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)** as a configurable automated process made up of one or more jobs.
The workflow configuration to define events, tasks, and steps to be executed in GitHub Actions are defined using YAML files that must be located in the `.github/workflows` folder.

## Using GitHub Actions to automate accessibility tests

Since we have seen what GitHub Actions are, let's see how we can use them to test the accessibility of your source code hosted on GitHub.

I have created a sample application in React with a small image component and some accessibility bugs. You can see the code in the **[project repository](https://github.com/bolonio/a11y-github-actions)** in my Github profile.

The first thing is to define when we want the GitHub Action to run. We can configure it to run immediately after each _push_ to any of our branches (including the _main_ branch).

```yaml
name: example
on: [push]
jobs: ...
```

Or we can configure it to run on any _Pull Request_ to our main _main_ branch.\*\*\*\*

```yaml
name: example
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs: ...
```

In my example repository I have decided to configure all Github Actions to run on any _Pull Request_ to the _main_ branch.
Once we have decided when to execute the GitHub Action, we have to establish which events, tasks, and steps to execute.

### Unit tests

In my first GitHub Action I want to run my unit tests when I create or update a _Pull Request_.
Writing your own unit tests is the best way to find bugs and vulnerabilities in your code, and if you use [jest](https://jestjs.io/), you can create your own accessibility unit tests with **[jest-axe](https://github.com/nickcolley/jest-axe)**, a tool from the [axe](https://www.deque.com/axe/) family of tools.

```bash
$ npm install jest-axe --save-dev
```

```ts
import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

it("should not have any accessibility violations", async () => {
  const { container } = render(<App />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

Once the unit tests are created, I can now create my workflow in my GitHub Action.
Luckily, GitHub offers you a bunch of templates when creating a new GitHub Action, and I've used the [Node.js workflow template](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml), to which I have deleted some comments and reduced the use of Node.js version to only use _12.x_, which I will later use in all my GitHub Actions. This is what the final version of my workflow would look like:

```yaml
name: unit-tests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Now I just have to try it. After my _Pull Request_ is created, my GitHub Action will start executing and the result will appear directly at the end of my _Pull Request_.
You can see it in this [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![A screenshot of the GitHub Actions that are executed in a Pull Request on GitHub. It's shown how the GitHub Action for unit tests has failed due to accessibility vulnerabilities.](/images/blog/accessibility-github-actions/GitHubAction1.png)

We will be able to access the details of the GitHub Action and see the results of the unit tests, to be able to solve the accessibility vulnerabilities in the code.

![A screenshot of the details of a GitHub Action running on a Pull Request on GitHub](/images/blog/accessibility-github-actions/GitHubAction1.1.png)

### axe

**[axe](https://www.deque.com/axe/)** is a family of tools created by [Deque](https://www.deque.com/axe/), which includes a command line interface (CLI), [@axe-core/cli](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli), which runs the axe search engine for accessibility vulnerabilities, and that we can use from a terminal.
In my next GitHub Action I want to run that CLI on every _Pull Request_.

Keep in mind that @axe-core/cli is an informative tool, and that it only executes accessibility tests and displays the results on the screen.
To make the execution of these tests cause an error in the execution we must add the option `--exit` to the axe command.

This is what the final version of my workflow would look like:

```yaml
name: axe
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  axe:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run build --if-present
      - run: npm start & npx wait-on http://localhost:3000
      - name: Run axe
        run: |
          npm install -g @axe-core/cli
          axe http://localhost:3000 --exit
```

As we have seen in the previous GitHub Action, when I go to the _Pull Request_ that I had created and I have updated with a new _commit_, my two GitHub Actions will be executed again.
You can see it in this [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![A screenshot of the GitHub Actions that are executed in a Pull Request on GitHub. It's shown how the GitHub Action for axe has failed due to accessibility vulnerabilities.](/images/blog/accessibility-github-actions/GitHubAction2.png)

And we can always inspect the details of each GitHub Action to find out the accessibility vulnerabilities that caused the execution to fail.

![A screenshot of the details of a GitHub Action running on a Pull Request on GitHub](/images/blog/accessibility-github-actions/GitHubAction2.1.png)

### axe-linter

GitHub also offers a library of applications, which we can install directly in our code repository, and which allow us to execute various tasks and events similar to GitHub Actions.
One of them is **[axe-linter](https://axe-linter.deque.com/)** and you can find it directly on [GitHub marketplace](https://github.com/marketplace/axe-linter).
You simply have to install it in your repository for free, and it will be ready to be used. This app, like my GitHub Actions, will run on every _Pull Request_ and look for accessibility vulnerabilities.

The difference that I have seen compared to my own GitHub Action is the type of vulnerabilities it finds, as axe-linter can only find those vulnerabilities in HTML code written by you, and not in the HTML generated by my React application like what does @axe-core/cli. Anyway, I think it's a super useful app for determining if your code is accessible, so I'll keep it in my sample repository so you can see how it works.
As with the GitHub Actions, and once I update my _Pull Request_ (in this case I have added an explicit HTML error in my code), it will run alongside the other GitHub Actions.
You can see it in this [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![A screenshot of the axe-linter application on GitHub with an accessibility vulnerability. It's shown how the GitHub Action for axe-linter has failed due to accessibility vulnerabilities.](/images/blog/accessibility-github-actions/GitHubAction3.png)

As always, we can see the results of the tests, this time grouped by vulnerability.

![A screenshot of the details of the axe-linter application running in a Pull Request on GitHub](/images/blog/accessibility-github-actions/GitHubAction3.1.png)

### pa11y

Like axe, there are other tools and applications that are very similar and equally valid for web accessibility testing.
Another one is **[pa11y](https://github.com/pa11y/pa11y)**, a command line interface (CLI) tool that you can use from your terminal.
In this case, unlike with axe, it is not just an informational tool and will cause an error in execution if it finds vulnerabilities in your code.
Using my previous workflow as a base, this is what the final version would look like:

```yaml
name: pa11y
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  pa11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run build --if-present
      - run: npm start & npx wait-on http://localhost:3000
      - name: Run pa11y
        run: |
          npm install -g pa11y
          pa11y http://localhost:3000
```

As we've seen before, on every update to my _Pull Request_, all my GitHub Actions will be executed, including my axe-linter app as well.
You can see it in this [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![A screenshot of the GitHub Actions that are executed in a Pull Request on GitHub. It's shown how the GitHub Action for pa11y has failed due to accessibility vulnerabilities.](/images/blog/accessibility-github-actions/GitHubAction4.png)

And as in the previous ones, you can access the details of the test directly from the _Pull Request_.

![A screenshot of the details of a GitHub Action running on a Pull Request on GitHub](/images/blog/accessibility-github-actions/GitHubAction4.1.png)

## Blocking the _merge_ of a _Pull Request_ if it has accessibility vulnerabilities

After creating all my GitHub Actions, and on each creation or update of any _Pull Request_, my code will be tested for accessibility vulnerabilities, but all those tests are informative at the moment, and I still have the final option to _merge_ my _Pull Request_, which we don't want to happen.

To disable the button to _merge_ any _Pull Request_ that has accessibility vulnerabilities you will have to create a new branch protection rule in your repository.
Access the **Settings** menu on the upper tab of your repository and then access **Branches** in the left menu.
You should put an asterisk `*` in the field **_Branch name pattern_** and activate the checkbox **_Require status checks to pass before merging_**.
You only have to save the changes by pressing the _Save Changes_ button.

![A screenshot of the branch protection rules configuration on GitHub](/images/blog/accessibility-github-actions/BlockMerge.png)

If you go back to your _Pull Request_, you will see that the _Merge pull request_ button is disabled and _merge_ cannot be done until the accessibility vulnerabilities are resolved and all GitHub Actions have satisfactory results. This way your application will be protected from accepting any inaccessible code.

Additional note: If you are **the owner** of the repository, you can check that you can always _merge_ the _Pull Requests_. The protection will be effective for contributors.

## Using GitHub Actions to automate reports with Lighthouse

We've seen how to create GitHub Actions that cause errors if they find accessibility vulnerabilities in your code, but I'd like to show you a GitHub Action for generating reports.
**[Lighthouse](https://github.com/GoogleChrome/lighthouse-ci)** is a tool created by Google, and it's included in the Google Chrome browser development tools, but it can also be run from the terminal. This tool generates reports on performance, accessibility, progressive web apps, SEO and more.

Using the [lighthouse workflow template](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#configure-lighthouse-ci) I have created a new GitHub Action to generate reports on each _Pull Request_.

### Lighthouse

```yaml
name: Lighthouse
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  lhci:
    name: Lighthouse
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install, build
        run: |
          npm install
          npm run build
      - name: run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.7.x
          lhci autorun
```

Lighthouse generates HTML reports, and you need to host them on a server. If your repository is public, you can configure it to host it on a temporary public storage.
You will have to create a new file in the root of your project called `lighthouserc.js` with the following content.
If you want to host the reports privately, you can read how to do it in the [official Lighthouse documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md).

```js
module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
  },
}
```

Once my _Pull Request_ is updated, it will run alongside the other GitHub Actions.
You can see it in this [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

![A screenshot of the GitHub Actions that are executed in a Pull Request on GitHub. It's shown how the GitHub Action for lighthouse has not failed because it is an informational tool.](/images/blog/accessibility-github-actions/GitHubAction5.png)

You will see that Lighthouse has a green _tick_, and not a red cross, as it is an informational tool and will not crash if your code has errors.
If you inspect the execution details of the GitHub Action, and having configured the hosting of the reports publicly, a link to the generated report appears.

![A screenshot of the details of a GitHub Action running on a Pull Request on GitHub](/images/blog/accessibility-github-actions/GitHubAction5.1.png)

You simply need to access that report and use it to generate statistics, archive it to see the evolution of your website, or to obtain more information on possible vulnerabilities in accessibility, performance, progressive web apps, SEO and more.

![A screenshot of a report generated by the GitHub Action Lighthouse](/images/blog/accessibility-github-actions/GitHubAction5.2.png)

## Conclusion

After all these steps, my repository is configured, so my GitHub Actions are executed when I create or update any _Pull Request_ to my _main_ branch, including the axe-linter application.
If any of the GitHub Actions find an accessibility vulnerability, my _Pull Request_ would crash and disabled the _merge_ option, so I would have to go through my code to resolve those errors.
This way my application will be protected from accepting any non-accessible code.

You can see the code in the [project repository](https://github.com/bolonio/a11y-github-actions) in my Github profile, and the execution and details of the Github Actions in this [_Pull Request_](https://github.com/bolonio/a11y-github-actions/pull/1).

I recommend you to try creating your own GitHub Actions or use the ones I created if you find them useful.

If you want to continue learning about web accessibility, you can follow me on [my twitter account](https://twitter.com/bolonio), and do not hesitate to [contact me](/en/about) or tweet me if you have any questions or doubt.
