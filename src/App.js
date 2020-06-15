import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./ReactRouter/About";
import Home from "./ReactRouter/Home";
import Profile from "./ReactRouter/Profile";

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
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>

        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about"]} component={About} exact={true} />
      <Route path={"/profile/:username"} component={Profile} exact={true} />
    </div>
  );
};

export default App;
