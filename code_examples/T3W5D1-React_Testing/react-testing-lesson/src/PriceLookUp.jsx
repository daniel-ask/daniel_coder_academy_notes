import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";

export default function PriceLookUp() {
	const [data, setData] = useState([]);
	const [error, setError] = useState('')

  const retrieveGames = async (e, game) => {
		e.preventDefault();
    try {
      const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${game}&limit=60&exact=0`);
      // console.log(response);
			if(response.data.length === 0){
				setError('No Match Found')
			}else{
				setData(response.data)
			}
    } catch (error) {
      // console.error(error);
			setError('Error');
    }
  };

  return <div>
		<h1>Search for Game</h1>
		<SearchForm retrieveGames={retrieveGames} />
		{error && <h2>{error}</h2>}
		{data && (<ul>
		{data.map(game => {
			return (<li key={game.gameID}>{game.external} cheapest: ${game.cheapest}</li>)
		})}
		</ul>)}
	</div>;
}
