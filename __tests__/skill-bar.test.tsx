import React from 'react'
import { render, screen } from '@testing-library/react'
import { SkillBar } from '@/components/skill-bar'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.elements = new Set();
  }

  observe(element) {
    this.elements.add(element);
    this.callback([{ isIntersecting: true, target: element }], this);
  }

  unobserve(element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }
};

describe('SkillBar', () => {
  it('renders the skill name correctly', () => {
    render(<SkillBar skill="React" level={90} color="from-blue-500 to-blue-400" />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders the skill level correctly', () => {
    render(<SkillBar skill="React" level={90} color="from-blue-500 to-blue-400" />);
    
    expect(screen.getByText('90%')).toBeInTheDocument();
  });

  it('has the correct ARIA attributes', () => {
    render(<SkillBar skill="React" level={90} color="from-blue-500 to-blue-400" />);
    
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '90');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });
});
