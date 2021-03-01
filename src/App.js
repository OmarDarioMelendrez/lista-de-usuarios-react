import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'

function App() {
  return (
    <Router >
      <Link to="/" className="container">Usuarios</Link>
      <Switch>
        <Route path="/" component={Usuarios} exact/>
        <Route path="/usuario/:id" component={Usuario} exact/>
      </Switch>
    </Router>
  );
}

export default App;
