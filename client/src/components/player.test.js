import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Player from './Player';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test('rtl renders without crashing', () => {
    render(<Player />);
})