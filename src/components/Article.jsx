import React from "react";
import classNames from "classname";
import ToggleMenuList from "../toggle/ToggleMenuList";
const styleBlock = { display: "block" };
import { Collapse } from "reactstrap";
import logo from "../img/logo.png";

export default class Article extends React.Component {
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
      isOpen: !this.state.isOpen
    });
  };

  toggleOpen = () => {
    this.setState({
      isOpenService: !this.state.isOpenService,
      collapseServices: !this.state.collapseServices
    });
  };
  state = { isOpen: false, collapse: false };

  render() {
    const { articles, services } = this.props;
    const { isOpen } = this.state;
    const { isOpenService } = this.state;

    return (
      <header>
        <div className="header">
          <div className="header_logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className="nav_list">
            <li>
              <a>{articles.home}</a>
            </li>
            <li>
              <a>{articles.about}</a>
            </li>
            <li
              className={classNames("linkOpen", {
                isOpenService: !isOpenService
              })}
            >
              <a onClick={this.toggleOpen}>Services</a>
              <ToggleMenuList>
                <Collapse isOpen={this.state.collapseServices}>
                  {services.map(e => <a style={styleBlock}>{e}</a>)}
                </Collapse>
              </ToggleMenuList>
            </li>
            <li className={classNames("linkOpen", { isOpen: !isOpen })}>
              <a onClick={this.toggle}>Blog</a>
              <ToggleMenuList>
                <Collapse isOpen={this.state.collapse}>
                  {services.map(e => <a style={styleBlock}>{e}</a>)}
                </Collapse>
              </ToggleMenuList>
            </li>
            <li>
              <a>{articles.contact}</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
