import React from "react";
import ToggleMenuListItem from "./ToggleMenuListItem";
import clickOutSide from "react-click-outside";

class ToggleMenuList extends React.Component {
  handleClickOutside() {
    this.props.closeMenu();
  }

  render() {
    const { article, services, portfolio } = this.props;
    return (
      <div>
        <ul className="sub_nav_list">
          <li>
            <ToggleMenuListItem>{this.props.children}</ToggleMenuListItem>
          </li>
        </ul>
      </div>
    );
  }
}

export default clickOutSide(ToggleMenuList);
