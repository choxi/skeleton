import React from 'react'
import ReactSpinner from 'react-spin'

/**
 * @name Spinner 
 * @prop {Object} [config] - See http://spin.js.org/ for options.
 *
 * @example
 * <Spinner />
 */
export default class Spinner extends React.Component {
  render() {
    return <div className="Spinner">
      <ReactSpinner config={ this.props.options } />
    </div>
  }
}

Spinner.defaultProps = {
  options: {
    length: 8,
    color: "#000"
  }
}
