import React from "react";
import classNames from "classname";
import ToggleMenuList from "../toggle/ToggleMenuList";
const styleBlock = { display: "block" };
import { Collapse } from "reactstrap";
import logo from "./logo.svg";

export default class Article extends React.Component {
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
      isOpen: !this.state.isOpen
    });
  };
  state = { isOpen: false, collapse: false };

  render() {
    const { articles, services } = this.props;
    const { isOpen } = this.state;

    return (
      <header>
        <ul className="nav_list">
          <li>
            <a>{articles.home}</a>
          </li>
          <li>
            <a>{articles.about}</a>
          </li>
          <li>
            <a onClick={this.toggle}>
              Open
              <Collapse isOpen={this.state.collapse}>
                <div>asojdosad</div>
              </Collapse>
            </a>
          </li>
          <li className={classNames("linkOpen", { isOpen: !isOpen })}>
            <a onClick={this.toggle}>Open</a>
            <ToggleMenuList>
              <Collapse isOpen={this.state.collapse}>
                {services.map(e => <a style={styleBlock}>{e}</a>)}
              </Collapse>
            </ToggleMenuList>
          </li>
          <li>
            <a>{articles.blog}</a>
          </li>
        </ul>
      </header>
    );
  }
}
