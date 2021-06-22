import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: '1', title: 'First post' },
        { id: '2', title: 'Second post' }
      ]
    });
    render(<Async />);
    const listItemsElement = await screen.findAllByRole('listitem');
    expect(listItemsElement).not.toHaveLength(0);
  });
});
