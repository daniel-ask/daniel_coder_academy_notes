import React, { useContext } from 'react'
import { ThemeContext, ThemeUpdateContext } from '../contexts/TestContext'

export default function Nav() {
	const [theme] = useContext(ThemeContext);
	const toggleTheme = useContext(ThemeUpdateContext);

	return (
		<div>
			<h4>Home</h4>
			<h4>About</h4>
			<h4>Theme: {theme}</h4>
			<button onClick={toggleTheme}>Switch Theme</button>
		</div>
	)
}
