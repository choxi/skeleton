import React from 'react'

export default class Input extends React.Component {
  constructor() {
    super()
    
    this.state = { value: "" }    
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  
  render() {
    return <div className="Input">
      <textarea 
        onChange={ this.handleChange }
        defaultValue={ this.props.defaultValue }
      />
    </div>
  }
}