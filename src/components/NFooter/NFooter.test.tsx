import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NFooter from './NFooter';

describe('<NFooter />', () => {
  test('it should mount', () => {
    render(<NFooter />);
    
    const nFooter = screen.getByTestId('NFooter');

    expect(nFooter).toBeInTheDocument();
  });
});