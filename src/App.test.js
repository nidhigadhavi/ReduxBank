import React from 'react';
import ReactDOM from 'react-dom';
import BankAppContainer from './BankAppContainer.js';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BankAppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
