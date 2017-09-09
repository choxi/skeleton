import React from 'react'
import Button from '../button/button'
import Layout from '../layout/layout'

export default class Homepage extends React.Component {
  render() {
    return <div className="Homepage Layout">
      <h1>Comet UI Kit</h1>
      <h3>Comet is a UI kit of useful React components for building new applications.</h3>
      <p><Button>Check out the documentation.</Button></p>
    </div>
  }
}
