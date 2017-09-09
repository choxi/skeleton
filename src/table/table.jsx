import React from 'react'

/**
 * @name Table 
 * @prop {Array}  data    - A 2D Array of rows x column data.
 * @prop {string} [name]  - The name to display above the table.
 *
 * @example
 *
 * let data = [
 *   ["Name", "Year", "Revenue"], 
 *   ["Star Wars", "1997", "$10B"],
 *   ["Jurassic Park", "1999", "$15B"],
 *   ["The Matrix", "1999", "$22B"]
 * ];
 *
 * <Table data={ data } />
 *
 */
export default class Table extends React.Component {
  render() {
    let headers = this.props.data[0]
    let rows    = this.props.data.slice(1)
    
    headers = headers.map((header) => {
      return <th key={ header }>{ header }</th>
    })
    
    rows = rows.map((row, index) => {
      let datum = row.map((d) => {
        return <td key={ d }>{ d }</td>
      })
      
      return <tr key={ index }>{ datum }</tr>
    })
    
    let tableName
    if(this.props.name)
      tableName = <div className="Table__name">{ this.props.name }</div>
    
    return <div className="Table">
      { tableName }
      <table>
        <tbody>
          <tr>{ headers }</tr>
          { rows }
        </tbody>
      </table>
    </div>
  }
}

Table.defaultProps = {
  data: []
}
