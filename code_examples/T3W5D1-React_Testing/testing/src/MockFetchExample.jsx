import React, {useEffect, useState} from 'react'

export default function MockFetchExample() {
	const [fact, setFact] = useState('')

	const getCatFact = async () => {
		try{
		const res = await fetch("https://catfact.ninja/fact");
		const data = await res.json();
		setFact(data.fact)
		}catch(error){
			console.log(error);
			setFact('NO FACT FOUND')
		}
	}

	useEffect(() => {
		getCatFact()
	},[])

	return (
		<div>
			<h1>Cat Fact: </h1>
			<h1>{fact}</h1>	
		</div>
	)
}
