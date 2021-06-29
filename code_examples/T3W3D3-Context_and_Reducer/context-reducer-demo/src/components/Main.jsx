import React, { useContext, useState } from "react";
import { ThemeContext, MyContext } from "../contexts/TestContext";

export default function Main() {
  const [theme] = useContext(ThemeContext);
	const [state, dispatch] = useContext(MyContext);

	const [input, setInput] = useState('')

  return (
    <div>
      <h1>This is the new context</h1>
			<h3>Theme: {theme}</h3>
			<h2>Welcome {state.name}</h2>
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<button onClick={() => dispatch( { type: 'change-name', value: input } )} > ok </button>
    </div>
  );
}
