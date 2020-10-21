import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './Articles';

describe('Articles component', () => {
    afterEach(() => cleanup());
    it('renders Articles', () => {
      const { asFragment } = render(<Articles
      articles={[{
          title:'Test Article',
          author:'Ryan Diff',
          description:'Super descriptive'
      }]}
      />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
