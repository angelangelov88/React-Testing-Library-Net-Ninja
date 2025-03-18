import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

const MockedFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
)

describe('FollowersList', () => {
  it('Should render element 0', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });
 

  // it('should render Go Back link', async () => {
  //   render(<MockedFollowersList />);
  //   const goBackLink = await screen.findByText(/Go Back/i);
  //   expect(goBackLink).toBeInTheDocument();
  // });

});