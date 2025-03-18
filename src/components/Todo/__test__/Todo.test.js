import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

const MockedTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
)

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  }
  )
}

describe('Todo', () => {
  it('Should render input element', () => {
    render(<MockedTodo />);
    addTask(['Go Grocery Shopping']);
    // const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // const buttonElement = screen.getByRole('button', { name: /Add/i });
    // fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } });
    // fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('Should render multiple elements', () => {
    render(<MockedTodo />);
    addTask(['Go Grocery Shopping', 'Go to the gym', 'Cook dinner']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('Should not have completed class when initially rendered', () => {
    render(<MockedTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toHaveClass('todo-item');
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('Should have completed class when clicked', () => {
    render(<MockedTodo />);
    addTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });

});