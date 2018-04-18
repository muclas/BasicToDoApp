import React from 'react';
import CreateToDo from './CreateToDo';
import List from './List';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  background: 'green',
};

export default class ToDos extends React.Component {

  render() {
    return (
      <div style={styles}>
      <CreateToDo />
      <List />
      </div>
    );
  }
}