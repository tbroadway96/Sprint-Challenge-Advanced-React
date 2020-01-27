import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test('rtl renders without crashing', () => {
    render(<NavBar />);
})