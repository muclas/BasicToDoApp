import React from 'react';
import CreateToDo from './CreateToDo';
import List from './List';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  background: 'green',
};

export default class ToDos extends React.Component {
  constructor(props) {
    super(props);
    this.addItemToList = this.addItemToList.bind(this);
    this.clearPressed = this.clearPressed.bind(this);
    this.resetPressed = this.resetPressed.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
    this.deletePressed = this.deletePressed.bind(this);
    this.state = {
      todos: [
        { nr: 1, text: "Finish Redux Tutorials", vis: true },
        { nr: 2, text: "Learn more about Relay", vis: true },
        { nr: 3, text: "Build 5 more React apps", vis: true },
        { nr: 4, text: "Review React Component Lifecycle", vis: true },
        { nr: 5, text: "Obtain Data Visualization Certificate", vis: true },
        { nr: 6, text: "Review Algorithms", vis: true },
        { nr: 7, text: "Tweet Progress", vis: true },
        { nr: 8, text: "Get a coffee!", vis: true },
        { nr: 9, text: "Browse Google Fonts", vis: true },
        { nr: 10, text: "Learn more about React Native", vis: true },
      ],
    };  
  }

  deletePressed(n) {
    let newList = this.state.todos.slice(0);
    newList[n].vis = false;
    this.setState({
      todos: newList,
    })
  }

  filterChanged(e) {
    let filtered = this.state.todos.map(f => {
      return { nr: f.nr, text: f.text, vis: f.text.indexOf(e) > -1 }
    });
    this.setState({
      todos: filtered,
    });
  }

  addItemToList(e) {
    let l = this.state.todos.length;
    let newList = this.state.todos.slice(0);
    newList.push({ nr: l + 1, text: e, vis: true });
    this.setState({
      todos: newList,
    });
  }

  clearPressed() {
    this.setState({
      todos: this.state.todos.map(t => { return { nr: t.nr, text: t.text, vis: false } })
    })
  }

  resetPressed() {
    this.setState({
      todos: this.state.todos.map(t => { return { nr: t.nr, text: t.text, vis: true } })
    })
  }

  render() {
    return (
      <div style={styles}>
      <CreateToDo addItemCb={this.addItemToList} />
      <List list={this.state.todos} onDeletePressed={this.deletePressed} onFilterChanged={this.filterChanged} clearPressed={this.clearPressed} resetPressed={this.resetPressed} />
      </div>
    );
  }
}