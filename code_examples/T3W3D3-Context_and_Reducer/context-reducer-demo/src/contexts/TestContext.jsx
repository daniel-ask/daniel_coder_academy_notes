import React, { useState, useReducer, useContext } from "react";

export const ThemeContext = React.createContext({});

export const MyContext = React.createContext([]);

export const ThemeUpdateContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "change-name":
			console.log(action.value)
      return { name: action.value};
    default:
      return state;
  }
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [state, dispatch] = useReducer(reducer, { name: "Daniel" });

  function toggleTheme() {
    setTheme((prevTheme) => {
      console.log(prevTheme);
      return prevTheme === "dark" ? "light" : "dark";
    });
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <MyContext.Provider value={[state, dispatch]}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
          {children}
        </ThemeUpdateContext.Provider>
      </MyContext.Provider>
    </ThemeContext.Provider>
  );
};
