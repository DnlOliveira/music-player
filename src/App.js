import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from './components/Main'


const App = () => (
  <Router>
    <Route path="/" component={ Main } />
  </Router>
)

export default App
