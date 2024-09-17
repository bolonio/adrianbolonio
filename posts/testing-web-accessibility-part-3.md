---
title: Testing Web Accessibility - Part 3
description: Only 20% to 50% of all accessibility issues can be detected with automated tests, so we need to consider those automated accessibility tests as one step of a larger testing process.
locale: en
image: intro.png
imageAlt: a summary with links of the testing tools to test accessibility during the development
alternate: /blog/testeando-accesibilidad-web
date: "2020-04-10"
tags:
  - Accessibility
  - Testing
---

## Testing Web Accessibility (a11y)

I've created a series of three blog posts to give to give you an introduction about the tools that I usually use to test accessibility during my development process:

[Testing Web Accessibility - Part 1 - Testing the code](/blog/testing-web-accessibility-part-1)

[Testing Web Accessibility - Part 2 - Testing the DOM](/blog/testing-web-accessibility-part-2)

Testing Web Accessibility - Part 3 - Testing in the browser

## Testing in the browser

As I said, we need to remember that only 20% to 50% of all accessibility issues can be detected with automated tests,
so we need to consider those automated accessibility tests as one step of a larger testing process.
Manual testing is as important as automated testing, so I will show you some of the manual testing tools that I often use.

### axe chrome extension

The company behind the development of the axe tools family, [Dequelabs](https://www.deque.com/axe/), has some browser extensions to test the accessibility of your website.
After installing the extension, you can find it under the development tools of your browser.
You can perform a full analysis, and as the previous axe tools I've talked about, they will show you all the violations found in the analyzed website.
Each violation includes the description of the issue, the HTML element in where the violation was found, and a full documentation source with detailed information about the issue, and the steps to solve it.
[You can find the axe extension here](https://www.deque.com/axe/axe-for-web/).

### ARC Toolkit

Another similar tool is ARC Toolkit, developed by [The Paciello Group](https://www.paciellogroup.com/).
ARC Toolkit is a professional-level accessibility testing tool that gives you the power to quickly and efficiently evaluate screens for accessibility and uncover issues related to the WCAG 2.1 Level A and AA guidelines.
This Chrome extension enables you to easily drill down into code level issues and gain in-depth insight into the accessibility of the screen.
[You can find the ARC Toolkit extension here](https://www.paciellogroup.com/toolkit/).

### Accessibility Insights

Accessibility Insights define this tools as an extension for Chrome and Microsoft Edge Insider that helps developers find and fix accessibility issues in web apps and sites.
One of the many features of this extension, and the one I use more, is the "tab stops" map. This tool will create a tab map while you navigate through the website using the tab key.
You can use this map to determine if the navigation using the tab key is relevant and consistent with the content of your website.
[You can find the Accessibility Insights extension here](https://accessibilityinsights.io/docs/en/web/overview).

### WAVE - Web Accessibility Evaluation Tool

WAVE is a suite of evaluation tools that help authors make their web content more accessible to individuals with disabilities.
WAVE can identify many accessibility and Web Content Accessibility Guideline (WCAG) errors, but also facilitates human evaluation of web content.
After installing the extension, you can find it under the extension bar in your browser.
In my opinion this is the most complete extension of all of the ones I've talked about in this article.
[You can find the Web Accessibility Evaluation Tool extension here](https://wave.webaim.org/extension/).

### NoCoffee - Vision Simulator

An interesting tool is [NoCoffee](https://accessgarage.wordpress.com/).
NoCoffee is an extension for Chrome, which can be helpful for understanding the problems faced by people with slight to extreme vision problems, such as: low acuity, low contrast sensitivity, or colorblindness.
This extension simulates how someone with these vision problems will see your website.
[You can find NoCoffee extension here](https://accessgarage.wordpress.com/).

### Funkify

Another usefull tool is [Funkify](https://www.funkify.org).
Funkify is an extension for Chrome that helps you experience the web and interfaces through the eyes of extreme users with different abilities and disabilities.
It's a cool extension that simulates several kinds of disabilities, like dyslexia, motoric problems and low vision.
[You can find Funkify extension here](https://www.funkify.org).

## Conclusions

Our role as frontend and web developers is to create clear interfaces to make people understand and care about data, independently of their disabilities or impairments,
but what we, developers, often forget is to ensure that the code we write follows the Web Content Accessibility Guidelines (WCAG), and the only way to achieve that is testing, either manual or automated.

> “The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”
>
> Tim Berners-Lee, W3C Director and inventor of the World Wide Web

We need to understand that the responsibility to create accessible apps doesn't belong to the developers or testers, but to the whole team, including Project Managers, and user experience (UX) and user interface (UI) designers.

I would love to leave you with a sentence that represents, in my opinion, what values for accessibility we, developers, should have.

> “It’s not just about disabled users being able to access your website, it’s about everyone being able to access your website.”
>
> Trenton Moss, Owner of Webcredible Consultancy Firm, UK

![A quote that says "accessibility is not a feature"](/images/blog/testing-web-accessibility-part-3/a11y-is-not-a-feature.jpeg)

You can read the rest of the series of three blog posts here:

[Testing Web Accessibility - Part 1 - Testing the code](/blog/testing-web-accessibility-part-1)

[Testing Web Accessibility - Part 2 - Testing the DOM](/blog/testing-web-accessibility-part-2)

Testing Web Accessibility - Part 3 - Testing in the browser
