import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Definitions from "pages/Definitions";
import UseNormalComponents from "pages/PageNormalComponents";
import UseMemoComponents from "pages/PageMemoComponents";
import UseCallbackFunction from "pages/PageCallbackFunction";
import Problem from "pages/Problem";
import ProblemFixed from "pages/ProblemFixed";
import ContaceMe from "pages/ContactMe";
import ProblemFixing from "pages/ProblemFixing";
import Home from "pages/Home";
import Nav from "common/Nav";

export default function App() {
  console.log("[render] App ");
  return (
    <Router>
      <div className="app">
        <div className="left-side">
          <Nav />
        </div>
        <div className="right-side">
          <Switch>
            <Route path="/problem">
              <Problem />
            </Route>
            <Route path="/problem-fixed">
              <ProblemFixed />
            </Route>
            <Route path="/problem-fixing">
              <ProblemFixing />
            </Route>
            <Route path="/contact-me">
              <ContaceMe />
            </Route>

            <Route path="/definitions">
              <Definitions />
            </Route>
            <Route path="/page1">
              <UseNormalComponents />
            </Route>
            <Route path="/page2">
              <UseMemoComponents />
            </Route>
            <Route path="/page3">
              <UseCallbackFunction />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
