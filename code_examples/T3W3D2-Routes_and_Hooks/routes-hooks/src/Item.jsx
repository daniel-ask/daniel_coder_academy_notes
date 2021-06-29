import React from 'react'

export default function Item({ match, history }) {
	console.log(match);
	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => history.push('/')}>Go to Home</button>
		</div>
	)
}
