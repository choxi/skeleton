import React from 'react'

/* @name Typography
 * @example
 *  <h1>Header 1</h1>
 *  <h2>Header 2</h2>
 *  <h3>Header 3</h3>
 *  <h4>Header 4</h4>
 *  <h5>Header 5</h5>
 *  <p>The including up, uninspired, if samples large an convince and to in ocean. Were to has but a family presented seven been contact again right, in the not, of tower, he temple the explain its measures the of the was kind by literature in and to presented. Being both expected.</p>
 *  <ul>
 *    <li>Daft Punk</li>
 *    <li>Kanye</li>
 *    <li>Black Keys</li>
 *  </ul>
 *  <ol>
 *    <li>Chicago Bears</li>
 *    <li>Green Bay Packers</li>
 *    <li>Detroit Lions</li>
 *  ol>
 */
export default class Typography extends React.Component {
  render() {
    return <div className="Typography">
      { this.props.children }
    </div>
  }
}
