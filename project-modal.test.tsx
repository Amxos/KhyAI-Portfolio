import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProjectModal } from '@/components/project-modal'

// Mock project data
const mockProject = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project description',
  longDescription: 'A longer test project description for testing purposes',
  technologies: ['React', 'TypeScript', 'Next.js'],
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  problem: 'Test problem statement',
  solution: 'Test solution description',
  outcome: 'Test outcome description',
  role: 'Test Role',
  duration: '3 months'
};

// Mock function
const mockOnClose = jest.fn();

describe('ProjectModal', () => {
  it('renders the project title correctly', () => {
    render(
      <ProjectModal 
        project={mockProject} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    );
    
    expect(screen.getAllByText('Test Project')[0]).toBeInTheDocument();
  });

  it('renders the technologies correctly', () => {
    render(
      <ProjectModal 
        project={mockProject} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    );
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <ProjectModal 
        project={mockProject} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    );
    
    const closeButton = screen.getByLabelText('Close dialog');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders the project metadata correctly', () => {
    render(
      <ProjectModal 
        project={mockProject} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    );
    
    expect(screen.getByText('Test Role')).toBeInTheDocument();
    expect(screen.getByText('3 months')).toBeInTheDocument();
  });
});
