import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import './styles.scss'

var EventEmitter = require('events').EventEmitter;

window.ee = new EventEmitter();

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><NavLink to='/games'>Игры</NavLink></li>
          <li><NavLink to='/teams'>Команды</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
