import React from "react";

export default class ToggleMenuListItem extends React.Component {
  render() {
    return <div className="nav_list_item_link">{this.props.children}</div>;
  }
}
