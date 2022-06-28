import { createGlobalStyle } from "styled-components"

export const HightlightStylesDark = createGlobalStyle`
  .highlight {
    position: relative;
    margin-top: 25px;
  }

  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
    margin: 0.5em 0;
    border-radius: 0.3em;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }

  :not(pre) code {
    background: #263238;
    color: #f8f8f2;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    padding: 2px 10px;
    border-radius: 0.3em;
  }

  code.hljs {
    padding: 3px 5px;
  }

  /*!
    Theme: a11y-dark
    Author: @ericwbailey
    Maintainer: @ericwbailey

    Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
  */
  
  .hljs {
    background: #263238;
    color: #f8f8f2;
  }

  .hljs-comment,
  .hljs-quote {
    color: #d4d0ab;
  }

  .hljs-deletion,
  .hljs-name,
  .hljs-regexp,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-tag,
  .hljs-template-variable,
  .hljs-variable {
    color: #ffa07a;
  }

  .hljs-built_in,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-type {
    color: #f5ab35;
  }

  .hljs-attribute {
    color: gold;
  }

  .hljs-addition,
  .hljs-bullet,
  .hljs-string,
  .hljs-symbol {
    color: #abe338;
  }

  .hljs-section,
  .hljs-title {
    color: #00e0e0;
  }

  .hljs-keyword,
  s.hljs-selector-tag {
    color: #dcc6e0;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: 700;
  }

  @media screen and (-ms-high-contrast:active) {
    .hljs-addition,
    .hljs-attribute,
    .hljs-built_in,
    .hljs-bullet,
    .hljs-comment,
    .hljs-link,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-params,
    .hljs-quote,
    .hljs-string,
    .hljs-symbol,
    .hljs-type {
      color: highlight;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      font-weight: 700;
    }
  }

  code.language-ts::before,
  code.language-tsx::before {
    background: url(/images/code/ts.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-js::before,
  code.language-jsx::before {
    background: url(/images/code/javascript.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-bash::before {
    background: url(/images/code/terminal.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-json::before {
    background: url(/images/code/json.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-yaml::before {
    background: url(/images/code/yaml.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-html::before {
    background: url(/images/code/html.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  pre code::before {
    background: #fff;
    border-radius: 4px;
    color: rgba(0, 0, 0, .7);
    content: attr(data-lang);
    font-size: 12px;
    padding: 2px 8px;
    position: absolute;
    top: -10px;
    right: 10px;
    text-transform: lowercase;
  }
`

export const HightlightStylesLight = createGlobalStyle`
  .highlight {
    position: relative;
    margin-top: 25px;
  }

  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em;
    margin: 0.5em 0;
    border-radius: 0.3em;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }

  :not(pre) code {
    background: #fefefe;
    color: #263238;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    padding: 2px 10px;
    border-radius: 0.3em;
  }

  code.hljs {
    padding: 3px 5px;
  }

  /*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey
  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
  */

  .hljs {
    background: #fefefe;
    color: #263238;
  }

  /* Comment */
  .hljs-comment,
  .hljs-quote {
    color: #696969;
  }

  /* Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #d91e18;
  }

  /* Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #aa5d00;
  }

  /* Yellow */
  .hljs-attribute {
    color: #aa5d00;
  }

  /* Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #008000;
  }

  /* Blue */
  .hljs-title,
  .hljs-section {
    color: #007faa;
  }

  /* Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #7928a1;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  @media screen and (-ms-high-contrast: active) {
    .hljs-addition,
    .hljs-attribute,
    .hljs-built_in,
    .hljs-bullet,
    .hljs-comment,
    .hljs-link,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-params,
    .hljs-string,
    .hljs-symbol,
    .hljs-type,
    .hljs-quote {
          color: highlight;
      }

      .hljs-keyword,
      .hljs-selector-tag {
          font-weight: bold;
      }
  }

  code.language-ts::before,
  code.language-tsx::before {
    background: url(/images/code/ts.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-js::before,
  code.language-jsx::before {
    background: url(/images/code/javascript.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-bash::before {
    background: url(/images/code/terminal.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-json::before {
    background: url(/images/code/json.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-yaml::before {
    background: url(/images/code/yaml.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  code.language-html::before {
    background: url(/images/code/html.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  pre code::before {
    background: #fff;
    border-radius: 4px;
    color: rgba(0, 0, 0, .7);
    content: attr(data-lang);
    font-size: 12px;
    padding: 2px 8px;
    position: absolute;
    top: -10px;
    right: 10px;
    text-transform: lowercase;
  }
`
