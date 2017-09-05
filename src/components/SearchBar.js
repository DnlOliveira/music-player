import React, { Component } from 'react'
import './SearchBar.css'
import helpers from '../utils/helpers'

class SearchBar extends Component {
  handleSubmit(event) {
    event.preventDefault();
    
    helpers.youtubeQuery();

  }

  render() {
    return (
      <div className="Search-bar">

        <div id="search-wrap">
            <div id="search">
              <span id="search-icon" className="glyphicon glyphicon-search" aria-hidden="true"></span>
              <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search for things"></input>
              <button type="submit" value="Submit">GO</button>
              </form>
            </div>
        </div>

      </div>
    );
  }
}

export default SearchBar
