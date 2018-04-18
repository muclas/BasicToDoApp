import React from 'react';
import { render } from 'react-dom';
import ToDos from './ToDos';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  background: 'yellow',
};

const App = () => (
  <div>
    <div style={styles}>
      <h1>React To-Do App</h1>
      <h3>Enhance Your Productivity</h3>
    </div>
    <ToDos />
  </div>
);

render(<App />, document.getElementById('root'));
