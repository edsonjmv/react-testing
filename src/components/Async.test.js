import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async />);
    const listItemsElement = await screen.findAllByRole('listitem');
    expect(listItemsElement).not.toHaveLength(0);
  });
});
