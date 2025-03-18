import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElement = screen.getByText(/test header/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElement = screen.getByRole("heading", {name: "test header"});
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElement = screen.getByTitle("header");
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });
  
  it('should render same text passed into title prop', async () => {
    render(<Header title="test header" />);
    const headingElement = await screen.findByText(/test header/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  // QueryBy
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElement = screen.queryByText("header");
    expect(headingElement).not.toBeInTheDocument();
  });
  
  it('should render same text passed into title prop', () => {
    render(<Header title="test header" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(1);
  });
});