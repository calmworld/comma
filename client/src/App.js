import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //compiled css
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import AddClient from './components/AddClient';
import ClientsList from './components/ClientsList';
import Totals from './components/Totals'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Comma
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/clients"} className="nav-link">
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new"} className="nav-link">
              Add Client
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/totals"} className="nav-link">
              Totals
            </Link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Switch>
          <Route exact path='/clients' component={ClientsList} />
          <Route exact path='/new' component={AddClient} />
          <Route exact path='/totals' component={Totals} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
