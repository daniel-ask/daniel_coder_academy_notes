# useContext

Makes components less reusable adds dependency


```js
const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  )
}

```

```js
class GrandChildComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => {
          return (
            <>
              <div>The theme is {theme}</div>
              <button onClick={() => setTheme('light')}>
                Change To Light Theme
              </button>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

```


# useReducer



# Styling

## Sass

` yarn add node-sass `

### ERROR: Node Sass version 6.0.0 is incompatible with ^4.0.0 || ^5.0.0

```json

  "devDependencies": {
    "node-sass": "^6.0.0",
    "sass-loader": "^12.0.0"
  }

	```
Add to package.json
remove yarn.lock
remove modules
`yarn install`

## Bootstrap

` npm install react-bootstrap bootstrap@4.6.0 `
