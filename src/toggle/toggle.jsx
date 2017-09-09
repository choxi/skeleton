import React from 'react'

export default class Toggle extends React.Component {
  constructor() {
    super()
    this.state = { toggled: false }
  }
  
  toggle() {
    this.setState({ toggled: !this.state.toggled }, () => {
      if(this.props.onToggle)
        this.props.onToggle(this.state.toggled)
    })
  }
  
  render() {
    let toggleClass = this.state.toggled ? "on" : "off"
    
    return <div 
      className={ "Toggle Toggle-" + toggleClass }
      onClick={ () => this.toggle() }
    >
      <span>{ this.props.children }</span>
    </div>
  }
}
