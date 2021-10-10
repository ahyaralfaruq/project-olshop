import { Header } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
          <header className="header">
            <Header />
          </header>
      </Router>
    </div>
  )
}

export default App
