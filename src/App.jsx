import React, { Component } from "react";
import { render } from "react-dom";
import "./your.css";
import { articles, services, portfolio } from "./article/fixtures";
import Article from "./components/Article";

export default class App extends React.Component {
  render() {
    return (
      <Article portfolio={portfolio} articles={articles} services={services} />
    );
  }
}
