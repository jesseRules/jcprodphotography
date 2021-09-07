import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainGallery from './MainGallery';

describe('<MainGallery />', () => {
  test('it should mount', () => {
    render(<MainGallery />);
    
    const mainGallery = screen.getByTestId('MainGallery');

    expect(mainGallery).toBeInTheDocument();
  });
});