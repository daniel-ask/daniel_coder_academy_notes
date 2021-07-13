// src/App.test.js
import React from "react";
import { render } from "@testing-library/react";
import MockFetchExample from "./MockFetchExample";
// import fetchMock from 'jest-fetch-mock';

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ fact: 'A cat will tremble or shiver when it is extreme pain.'  }),
//   })
// );


beforeEach(() => {
	// fetch.mockClear();
  fetch.resetMocks();
})

test("renders learn react link", async () => {
  // fetch.mockImplementationOnce(JSON.stringify({ fact: 'A cat will tremble or shiver when it is extreme pain.' }));
  fetch.mockResponseOnce(JSON.stringify({fact: 'A cat will tremble or shiver when it is extreme pain.'}))
  const { findByText } = render(<MockFetchExample />);
  const element = await findByText(/A cat will tremble or shiver when it is extreme pain./i);
  expect(element).toBeInTheDocument();
});

// src/utils/currency.test.js
it("returns null when exception", async () => {
  fetch.mockReject(() => Promise.reject("API is down"));


  const { findByText } = render(<MockFetchExample />);
  const element = await findByText(/NO FACT FOUND/i);
  expect(element).toBeInTheDocument();

  expect(fetch).toHaveBeenCalledWith(
    "https://catfact.ninja/fact"
  );
});