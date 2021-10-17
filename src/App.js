import { Header, Body } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <Header />
        </header>

        <Switch>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
