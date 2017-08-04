import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './Tab.css'

class Tab extends Component {
  render() {
    return (
      <div className="Tab">
        <h1>Tab</h1>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/saved">Saved Videos</Link></li>
        </ol>
      </div>
    );
  }
}

export default Tab
