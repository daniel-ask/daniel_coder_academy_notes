// import { cleanup, render, screen } from '@testing-library/react';
// import App from './App';

// afterEach(cleanup);

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   // screen.debug();
// });
// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { createMemoryHistory } from 'history'
// import React from 'react'
// import { Router } from 'react-router-dom'
// import { MemoryRouter} from 'react-router';

// import '@testing-library/jest-dom/extend-expect'

// import { App, LocationDisplay } from './App'

// test('full app rendering/navigating', () => {
//   // const history = createMemoryHistory()
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   )
//   // verify page content for expected route
//   // often you'd use a data-testid or role query, but this is also possible
//   expect(screen.getByText(/you are home/i)).toBeInTheDocument()

//   const leftClick = { button: 0 }
//   userEvent.click(screen.getByText(/about/i), leftClick)

//   // check that the content changed to the new page
//   expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
// })

// test('landing on a bad page', () => {
//   // const history = createMemoryHistory()
//   // history.push('/some/bad/route')
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   )

//   expect(screen.getByText(/no match/i)).toBeInTheDocument()
// })

// test('rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory()
//   const route = '/some-route'
//   history.push(route)
//   render(
//     <Router history={history}>
//       <LocationDisplay />
//     </Router>
//   )

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import { MemoryRouter} from 'react-router';

import '@testing-library/jest-dom/extend-expect'

import App, { LocationDisplay } from './App'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Search for Games/i)).toBeInTheDocument()

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/Cat Facts/i), leftClick)

  // check that the content changed to the new page
  expect(screen.getByText(/Cat Fact/)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

// test('rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory()
//   const route = '/some-route'
//   history.push(route)
//   render(
//     <Router history={history}>
//       <LocationDisplay />
//     </Router>
//   )

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// })
