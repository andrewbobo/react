import React from "react";
const styleBlock = { display: "block" };

export default class ToggleMenuListItem extends React.Component {
  render() {
    return <div className="nav_list_item_link">{this.props.children}</div>;
  }
}
