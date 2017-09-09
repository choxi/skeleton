import React from 'react'
import Highlight from 'react-highlight'

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
      <Highlight className={ this.props.lang }>
        { this.props.children }
      </Highlight>
    </div>
  }
}
