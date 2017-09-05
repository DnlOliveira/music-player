import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Tab.css'

class Tab extends Component {
  render() {
    return (
      <div className="Tab">

        <ul className="nav nav-tabs">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>

      </div>
    );
  }
}

export default Tab
