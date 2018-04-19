import React from 'react';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.deletePressed = this.deletePressed.bind(this);
  }

  deletePressed() {
    this.props.onDeletePressed(this.props.nr-1);
  }
  
  render() {
    return(
      this.props.visible ?
      (<tr>
        <td>Task {this.props.nr}</td>
        <td>{this.props.text}</td>
        <td><input type="button" value="X" onClick={this.deletePressed} /></td>
      </tr>)
      : null
    );
  }
}
