import React from "react";
import ToggleMenuListItem from "./ToggleMenuListItem";

export default class ToggleMenuList extends React.Component {
  render() {
    const { services } = this.props;
    return (
      <ul className="sub_nav_list">
        <li>
          <ToggleMenuListItem>{this.props.children}</ToggleMenuListItem>
        </li>
      </ul>
    );
  }
}
