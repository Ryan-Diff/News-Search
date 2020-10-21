import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
    afterEach(() => cleanup());
    const testFunc = function() {};

    it('renders Search', () => {
      const { asFragment } = render(<Search
        search='Test'
        onSubmit={testFunc}
        onChange={testFunc}
      />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
