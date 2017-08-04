import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import SavedResults from './components/SavedResults'
import Tab from './components/Tab'

const App = () => (
  <Router>
    <div>
      <Route path="/" component={ SearchBar } />
      <Route path="/" component={ Header } />
      {/*SearchResults defaults to trending items*/}
      <Tab />
      <Route exact path="/" component={ SearchResults } />
      <Route path="/saved" component={ SavedResults } />
    </div>
  </Router>
)

export default App
