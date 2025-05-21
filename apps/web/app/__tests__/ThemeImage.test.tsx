// filepath: apps/web/app/__tests__/ThemeImage.test.tsx
import { render, screen } from '@testing-library/react';
import { ThemeImage } from '../components/ThemeImage';

describe('ThemeImage component', () => {
  it('renders light and dark theme images', () => {
    render(
      <ThemeImage 
        srcLight="/test-light.svg" 
        srcDark="/test-dark.svg" 
        alt="Test image" 
        width={100} 
        height={100} 
      />
    );
    
    // Get all images with the alt text
    const images = screen.getAllByAltText('Test image');
    
    // Verify we have two images (light and dark)
    expect(images).toHaveLength(2);
    
    // The first image should be the light variant
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('test-light'));
    
    // The second image should be the dark variant
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('test-dark'));
  });
});
