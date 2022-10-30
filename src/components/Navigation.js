import React from "react";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Main from "../pages/Main";

const Navigation = () => {
  return <Route path='/' component={<Main />} />;
};

export default Navigation;
