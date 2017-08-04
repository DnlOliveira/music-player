import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import SavedResults from './components/SavedResults'

const App = () => (
  <Router>
    <div>
      <Route path="/" component={ SearchBar } />
      <Route path="/" component={ Header } />
      {/*SearchResults defaults to trending items*/}
      <Route path="/search" component={ SearchResults } />
      <Route exact path="/saved" component={ SavedResults } />
    </div>
  </Router>
)

export default App
