import React from 'react';

export default class CreateToDo extends React.Component {

  render() {
    return (
      <div>
      <input type="text" />
      <br/>
      <input type="button" value="Enter New Item" />
      </div>
    );
  }
}