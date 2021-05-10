import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "common/Nav";
import { routesMap, IRoutesMap } from "common/routes";

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
            {Object.keys(routesMap).map((routeKey) => {
              const { path, Component: PageComponent } = routesMap[
                routeKey as keyof IRoutesMap
              ];

              if (!PageComponent) {
                return null;
              }
              return (
                <Route key={path} path={path}>
                  <PageComponent />
                </Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
