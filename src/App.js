import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./ReactRouter/About";
import Home from "./ReactRouter/Home";
import HistorySample from "./ReactRouter/HisrotySample";
import Profiles from "./ReactRouter/Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>

        <li>
          <Link to="/about">소개</Link>
        </li>

        <li>
          <Link to="/profiles">프로필</Link>
        </li>

        <li>
          <Link to="/history">History예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about"]} component={About} exact={true} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
