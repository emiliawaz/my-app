import React from 'react'
import 'App.scss'
import Article from 'components/Article/Article'
import Home from 'components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/article/:id" component={ Article }/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
