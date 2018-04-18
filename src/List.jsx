import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="filter list" />
        <br/>
        <input type="button" value="Clear the List" />
        <ol>
          <ListItem item="blabla" />
        </ol>
        <input type="button" value="Reset the List" />
      </div>
    );
  }
}