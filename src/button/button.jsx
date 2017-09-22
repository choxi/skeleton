import React from 'react'
import "./button.css"

/**
 * @name Button
 * @prop {Function} [onClick(event)] - Called when the button is clicked. 
 *
 * @example
 * <Button>Click</Button>
 */
export default class Button extends React.Component {
  render() {
    return <div className="Button" onClick={ this.props.onClick }>
      <span>{ this.props.children }</span>
    </div>
  }
}
