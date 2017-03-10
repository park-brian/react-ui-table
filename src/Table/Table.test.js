import React from 'react';
import ReactDOM from 'react-dom';
import Table from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
});
