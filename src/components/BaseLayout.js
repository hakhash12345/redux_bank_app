import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component{
  render(){
    return(
      <div>
        <div className="navigation_content">
      <NavLink activeClassName="selected" to='/users'>Users</NavLink>
      <NavLink activeClassName="selected" to='/'>Home</NavLink>
        </div>
      {this.props.children}
      </div>
    )
  }
}