import React from 'react';

export default class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.textChanged = this.textChanged.bind(this);
    this.clicked = this.clicked.bind(this);
    this.state = {
      text: '',
    }
  }

  textChanged(e) {
    this.setState({
      text: e.target.value,
    });    
  }

  clicked() {
    this.props.addItemCb(this.state.text);
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.textChanged} />
      <br/>
      <input type="button" value="Enter New Item" onClick={this.clicked} />
      </div>
    );
  }
}