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