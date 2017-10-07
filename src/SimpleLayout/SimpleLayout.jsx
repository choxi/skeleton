import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom'

export default class SimpleLayout extends React.Component {
  render() {
    let sidebar = <SimpleLayoutSidebar { ...this.props } />
  
    if(this.props.nested)
      return <div className="SimpleLayout">
        { sidebar }
      </div>
    else {
      return <div className="SimpleLayout">
        <Router>{ sidebar }</Router>
      </div>
    }
  }
}

SimpleLayout.defaultProps = {
  links: []
}

class SimpleLayoutSidebar extends React.Component {
  constructor(props) {
    super(props)
    
    if(this.props.links.length > 0)
      this.props.history.push(this.props.links[0].to)
  }
  
  render() {
    let sidebarLinks = this.props.links.map((link) => {
      return <NavLink exact key={ link.label } to={ link.to }>
        <li key={ link.label }>{ link.label }</li>
      </NavLink>
    })
    
    let routes = this.props.links.map((link) => {
      return <Route 
        key={ link.label } 
        exact 
        path={ link.to } 
        component={ link.component } 
      />
    })
    
    let sidebar = <div className="SimpleLayout__container">
      <div className="SimpleLayout__sidebar">
        <ul>
          { sidebarLinks }
        </ul>
        <div className="SimpleLayout__sidebar__footer">
          { this.props.name }
        </div>
      </div>
      
      <div className="SimpleLayout__panel">
        { routes }
      </div>
    </div>
    
    return sidebar
  }
}

SimpleLayoutSidebar = withRouter(SimpleLayoutSidebar)
