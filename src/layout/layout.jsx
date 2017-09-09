import React from 'react'
import Button from '../button/button.jsx'
import Table from '../table/table.jsx'
import Toggle from '../toggle/toggle.jsx'
import CodeSnippet from '../codesnippet/codesnippet.jsx'
import Input from '../input/input.jsx'
import Select from '../select/select.jsx'
import Spinner from '../spinner/spinner.jsx'

export default class Layout extends React.Component {
  render() {
    let tableProps = {
      name: "Tables",
      data: [
        ["Name", "Distance from Sun"],
        ["Mercury", "Pretty close"],
        ["Venus", "Still too close"],
        ["Earth", "Just right"],
        ["Mars", "A bit too far"],
        ["Jupiter", "Too far now, go back"]
      ]
    }
    
    return <div className="Layout">
      <h1 className="Layout__name">Layout</h1>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div>
        <a href="#">Link</a>
      </div>
      <div>
        <Input />
      </div>
      <div>
        <Button>Button</Button>
      </div>
      <div>
        <Select options={ [{ value: "A" }] } />
      </div>
      <div>
        <Toggle>Toggle</Toggle>
      </div>
      <div>
        <Spinner />
      </div>
      <div>
        <h2>Lists</h2>
        <ul>
          <li>Milk</li>
          <li>Orange Juice</li>
          <li>Tortillas</li>
        </ul>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
      </div>
      <Table { ...tableProps } />
      <h2>Code Snippets</h2>
      <CodeSnippet lang="js">
        {`function foo() {
  console.log("foo")
}`}
      </CodeSnippet>
    </div>
  }
}
