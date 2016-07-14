import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

var EventEmitter = require('events').EventEmitter;

window.ee = new EventEmitter();

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink onlyActiveOnIndex={true} to='/teams'>Команды</NavLink></li>
          <li><NavLink to='/games'>Игры</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
