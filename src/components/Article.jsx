import React from "react";
import classNames from "classname";
import ToggleMenuList from "./toggle/ToggleMenuList";
import { Collapse } from "reactstrap";
import logo from "../img/logo.png";
import Slider from "./Slider";

export default class Article extends React.Component {
  toggleOpen = () => {
    this.setState({
      isOpenService: !this.state.isOpenService,
      collapseServices: !this.state.collapseServices
    });
  };

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
      isOpen: !this.state.isOpen
    });
  };

  closeMenuBlog = () => {
    this.setState({
      collapse: false,
      isOpen: false,
      collapseServices: false,
      isOpenService: false
    });
  };

  state = () => {
    this.setState({});
  };

  render() {
    const { articles, services, portfolio } = this.props;
    const { isOpen } = this.state;
    const { collapse } = this.state;
    const { isOpenService } = this.state;
    const { collapseServices } = this.state;

    return (
      <div>
        <header>
          <div className="header">
            <div className="header_logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <ul className="nav_list">
              <li className="nav_list_item">
                <a>{articles.home}</a>
              </li>
              <li className="nav_list_item">
                <a>{articles.about}</a>
              </li>
              <li
                className={classNames("linkOpen nav_list_item", {
                  isOpenService: !isOpenService
                })}
              >
                <a onClick={this.toggleOpen}>{articles.services}</a>
                <ToggleMenuList closeMenu={this.closeMenuBlog}>
                  <Collapse isOpen={this.state.collapseServices}>
                    {portfolio.map(e => <a className="style_block">{e}</a>)}
                  </Collapse>
                </ToggleMenuList>
              </li>
              <li
                className={classNames("linkOpen nav_list_item", {
                  isOpen: !isOpen
                })}
              >
                <a onClick={this.toggle}>{articles.blog}</a>
                <ToggleMenuList closeMenu={this.closeMenuBlog}>
                  <Collapse isOpen={this.state.collapse}>
                    {services.map(e => <a className="style_block">{e}</a>)}
                  </Collapse>
                </ToggleMenuList>
              </li>
              <li className="nav_list_item">
                <a>{articles.contact}</a>
              </li>
            </ul>
          </div>
          <div className="container_slider" />
        </header>
        <main>
          <Slider />
        </main>
      </div>
    );
  }
}
