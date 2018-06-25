import React, { Component } from "react";
import { render } from "react-dom";
import "./your.css";
import { articles, services } from "./article/fixtures";
import Article from "./components/Article";

export default class App extends React.Component {
  render() {
    return <Article articles={articles} services={services} />;
  }
}
