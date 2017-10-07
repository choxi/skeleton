import React from 'react'
import Highlight from 'react-highlight'

const themes = {}
themes.github = `
/*
github.com style (c) Vasily Polovnyov <vast@whiteants.net>
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #333;
  background: #f8f8f8;
}

.hljs-comment,
.hljs-quote {
  color: #998;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: bold;
}

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr {
  color: #008080;
}

.hljs-string,
.hljs-doctag {
  color: #d14;
}

.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: #900;
  font-weight: bold;
}

.hljs-subst {
  font-weight: normal;
}

.hljs-type,
.hljs-class .hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-regexp,
.hljs-link {
  color: #009926;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
} 
`

themes.railscasts = `
/*

Railscasts-like style (c) Visoft, Inc. (Damien White)

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #232323;
  color: #e6e1dc;
}

.hljs-comment,
.hljs-quote {
  color: #bc9458;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag {
  color: #c26230;
}

.hljs-string,
.hljs-number,
.hljs-regexp,
.hljs-variable,
.hljs-template-variable {
  color: #a5c261;
}

.hljs-subst {
  color: #519f50;
}

.hljs-tag,
.hljs-name {
  color: #e8bf6a;
}

.hljs-type {
  color: #da4939;
}


.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-builtin-name,
.hljs-attr,
.hljs-link {
  color: #6d9cbe;
}

.hljs-params {
  color: #d0d0ff;
}

.hljs-attribute {
  color: #cda869;
}

.hljs-meta {
  color: #9b859d;
}

.hljs-title,
.hljs-section {
  color: #ffc66d;
}

.hljs-addition {
  background-color: #144212;
  color: #e6e1dc;
  display: inline-block;
  width: 100%;
}

.hljs-deletion {
  background-color: #600;
  color: #e6e1dc;
  display: inline-block;
  width: 100%;
}

.hljs-selector-class {
  color: #9b703f;
}

.hljs-selector-id {
  color: #8b98ab;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
`

themes["github-gists"] = `
/**
 * GitHub Gist Theme
 * Author : Louis Barranqueiro - https://github.com/LouisBarranqueiro
 */

.hljs {
  display: block;
  background: white;
  padding: 0.5em;
  color: #333333;
  overflow-x: auto;
}

.hljs-comment,
.hljs-meta {
  color: #969896;
}

.hljs-string,
.hljs-variable,
.hljs-template-variable,
.hljs-strong,
.hljs-emphasis,
.hljs-quote {
  color: #df5000;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-type {
  color: #a71d5d;
}

.hljs-literal,
.hljs-symbol,
.hljs-bullet,
.hljs-attribute {
  color: #0086b3;
}

.hljs-section,
.hljs-name {
  color: #63a35c;
}

.hljs-tag {
  color: #333333;
}

.hljs-title,
.hljs-attr,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #795da3;
}

.hljs-addition {
  color: #55a532;
  background-color: #eaffea;
}

.hljs-deletion {
  color: #bd2c00;
  background-color: #ffecec;
}

.hljs-link {
  text-decoration: underline;
}
`

/**
 * @name CodeSnippet
 * @prop {string} [lang] - Langage that code is written in (for syntax highlighting).
 *
 * @example
 * let code = 
 * `function foo() {
 *   console.log("foo")
 * }`;
 *
 * <CodeSnippet lang="javascript">{ code }</CodeSnippet>
 *
 */
export default class CodeSnippet extends React.Component {
  render() {
    return <div className="CodeSnippet">
      <style>
        { themes[this.props.theme] }
      </style>
      <Highlight className={ this.props.lang }>
        { this.props.children }
      </Highlight>
    </div>
  }
}

CodeSnippet.defaultProps = {
  theme: "github-gists"  
}

