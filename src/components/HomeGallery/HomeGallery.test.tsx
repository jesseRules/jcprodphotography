import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeGallery from './HomeGallery';

describe('<HomeGallery />', () => {
  test('it should mount', () => {
    render(<HomeGallery />);
    
    const homeGallery = screen.getByTestId('HomeGallery');

    expect(homeGallery).toBeInTheDocument();
  });
});