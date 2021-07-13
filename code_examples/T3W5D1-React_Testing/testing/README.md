# Testing

` screen.debug()` allows you to see the html being rendered.

LabelText: getByLabelText: <label for="search" />
PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
AltText: getByAltText: <img alt="profile" />
DisplayValue: getByDisplayValue: <input value="JavaScript" />
And there is the last resort search type TestId with getByTestId where one needs to assign data-testid attributes in the source code's HTML. After all, getByText and getByRole should be your go-to search types to select elements from your rendered React components with React Testing Library.

getByText
getByRole

getByLabelText
getByPlaceholderText
getByAltText
getByDisplayValue
Again, these were all the different search types available in RTL.

queryByText
queryByRole
queryByLabelText
queryByPlaceholderText
queryByAltText
queryByDisplayValue
And findBy with all its search types:

findByText
findByRole
findByLabelText
findByPlaceholderText
findByAltText
findByDisplayValue

**getBy vs queryBy vs findBy**

getBy most of the time but will throw an error if it can't find anything

use queryBy when checking if something isn't there

use findBy for asynchronous things such as element that are only rendered after an successful api call e.g.

## RTL Assertions functions

toBeDisabled
toBeEnabled
toBeEmpty
toBeEmptyDOMElement
toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
toBeVisible
toContainElement
toContainHTML
toHaveAttribute
toHaveClass
toHaveFocus
toHaveFormValues
toHaveStyle
toHaveTextContent
toHaveValue
toHaveDisplayValue
toBeChecked
toBePartiallyChecked
toHaveDescription



# Lesson

Arrange -> Act -> Assert

## Basic Jest

toBe vs toEqual

use toBe for primatives types such as number, booleans and strings

for arrays or objects use toEqual

example:

```js
const b= {
	one: 1
}

const c = {
	one: 1
}

expect(b).toBe(c) //fails

expect(b).toEqual(c) // passes

```


## React Testing


To mock a functions

`onChange = jest.fn()`

```js
render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
const link = screen.getByRole('link', { name: /how it works/i });
```
### Snapshot testing

To use snapshot testing you need to add `react-test-render`

To then use it you have to import into your test files

```js
import renderer from 'react-test-rendered'
```

Test can then be like this

```js
it('should match last snapshot', () => {
	const tree = renderer.create(<Button label='save' />).toJSON();
	expect(tree).toMatchSnapshot();
})
```