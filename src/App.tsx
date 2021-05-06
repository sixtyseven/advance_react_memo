import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Definitions from 'pages/Definitions';

export default function App() {
  console.log("[render] App ");
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/definitions">Definitions</Link>
            </li>
            <li>
              <Link to="/page1">Page1: React without memo (Using Normal Components)</Link>
            </li>
            <li>
              <Link to="/page2">Page2: React memo (Using PureComponents)</Link>
            </li>
            <li>
              <Link to="/page3">Page3: React Update view States</Link>
            </li>
            <li>
              <Link to="/page4">Page4: React Container Component</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/introduction">
            <Definitions />
          </Route>
          <Route path="/page1">
            <About />
          </Route>
          <Route path="/page2">
            <Users />
          </Route>
          <Route path="/page3">
            <Users />
          </Route>
          <Route path="/page4">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2></h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}