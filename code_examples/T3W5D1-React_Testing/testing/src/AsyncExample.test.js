import React from 'react';
import axios from 'axios';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import AsyncExample from './AsyncExample';
 
jest.mock('axios');
 
describe('AsyncExample', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];
 
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );
 
    render(<AsyncExample />);
		await act(async () => {
    	await userEvent.click(screen.getByRole('button'));
		})
 
    const items = await screen.findAllByRole('listitem');
 
    expect(items).toHaveLength(2);
  });

	test('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    );
 
    render(<AsyncExample />);
		await act(async () => {
			await userEvent.click(screen.getByRole('button'));
		})
 
    const message = await screen.findByText(/Something went wrong/);
 
    expect(message).toBeInTheDocument();
  });

});
