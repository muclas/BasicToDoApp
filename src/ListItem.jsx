import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return(
      <li>{this.props.item}<input type="button" value="X" /></li>
    );
  }
}
