import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Started from "./components/started";
import Mission from "./components/mission";
import Advantantage from "./components/advantantage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Started />
    <Mission />
    <Advantantage />
  </>
);
