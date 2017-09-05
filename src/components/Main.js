import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import SavedResults from './SavedResults'
import Tab from './Tab'

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      SearchResults: []
    };

  }

  render() {
    return (
      <div>
          <SearchBar SearchResults={this.state.searchResults} />
          <Header />
          {/*SearchResults defaults to trending items*/}
          <Tab />
          <Route exact path="/" component={ SearchResults } />
          <Route exact path="/saved" component={ SavedResults } />
      </div>
    );
  }
}

export default Main
