import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
    this.filterChanged = this.filterChanged.bind(this);
    this.deletePressed = this.deletePressed.bind(this);
  }

  deletePressed(n) {
    this.props.onDeletePressed(n);
  }

  filterChanged(e) {
    this.setState({
      filter: e.target.value,
    });
    this.props.onFilterChanged(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="filter list" onChange={this.filterChanged} />
        <br/>
        <ol>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>(X)</th>
          </tr>
          {this.props.list.map(e => {
            return (<ListItem onDeletePressed={this.deletePressed} nr={e.nr} text={e.text} visible={e.vis} />)
          })}
          
        </ol>
        <input type="button" value="Clear the List" onClick={this.props.clearPressed} />
        <input type="button" value="Reset the List" onClick={this.props.resetPressed} />
      </div>
    );
  }
}