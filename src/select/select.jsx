import React from 'react'

export default class Select extends React.Component {
  render() {
    let options = this.props.options.map((option) => {
      return <option>{ option.value }</option>
    })

    return <div className="Select">
      <select>{ options }</select>
    </div>
  }
}
