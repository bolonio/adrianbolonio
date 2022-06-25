---
title: Writing accessibility unit tests with playwright and axe
description: Our role as frontend and web developers is to create clear interfaces to make people understand and care about data, independently of their disabilities or impairments, so the only way to be sure that the websites we develop are fully accessible is to test our code.
locale: en
image: intro.png
imageAlt: una imagen decorativa con la frase "Automatizando los test de accesibilidad de tu código fuente con GitHub Actions"
alternate: /blog/accessibility-github-actions
publishedAt: "2022-07-01"
tags:
  - Accessibility
  - React
---

sadf

```bash
$ yarn add nm
```

sadfasdfas

```yaml
name: example
on: [push]
jobs: ...
```

asdfasdf

```ts
import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
// comment jere
expect.extend(toHaveNoViolations)

it("should not have any accessibility violations", async () => {
  const { container } = render(<App />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

sadfasdf

```js
import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
// comment jere
expect.extend(toHaveNoViolations)

it("should not have any accessibility violations", async () => {
  const { container } = render(<App />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

```html
<code class="hljs language-ts"
  ><span class="hljs-keyword">import</span>
  <span class="hljs-title class_">React</span>
  <span class="hljs-keyword">from</span>
  <span class="hljs-string">"react"</span>
  <span class="hljs-keyword">import</span>
  <span class="hljs-title class_">App</span>
  <span class="hljs-keyword">from</span>
  <span class="hljs-string">"./App"</span>
  <span class="hljs-keyword">import</span> { render }
  <span class="hljs-keyword">from</span>
  <span class="hljs-string">"@testing-library/react"</span>
  <span class="hljs-keyword">import</span> { axe, toHaveNoViolations }
  <span class="hljs-keyword">from</span>
  <span class="hljs-string">"jest-axe"</span>
  <span class="hljs-comment">// comment jere</span>
  expect.<span class="hljs-title function_">extend</span>(toHaveNoViolations)

  <span class="hljs-title function_">it</span>(<span class="hljs-string"
    >"should not have any accessibility violations"</span
  >, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> { container } =
  <span class="hljs-title function_">render</span>(<span class="xml"
    ><span class="hljs-tag"
      >&lt;<span class="hljs-name">App</span> /&gt;</span
    ></span
  >) <span class="hljs-keyword">const</span> results =
  <span class="hljs-keyword">await</span>
  <span class="hljs-title function_">axe</span>(container)
  <span class="hljs-title function_">expect</span>(results).<span
    class="hljs-title function_"
    >toHaveNoViolations</span
  >() })
</code>
```
