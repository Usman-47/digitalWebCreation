import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Staking from "./pages/Skating";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { Web3Provider } from "@ethersproject/providers";
import Mellowmen from "./pages/Mellowmen";
import "semantic-ui-css/semantic.min.css";
import NewStaking from "./pages/NewStaking";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/staking",
    // element: <Staking />,
    element: <NewStaking />,
  },
  {
    path: "/sample",
    // element: <Staking />,
    element: <NewStaking />,
  },
]);
function getLibrary(provider) {
  return new Web3(provider);
}

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <RouterProvider router={router} />
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
