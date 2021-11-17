import React, { useState, useEffect } from "react";
import Cards from "./components/cards";
import Categories from "./components/categories";
import TheGreaterArcana from "./components/tga";
import TheLesserArcana from "./components/tla";

function App() {
	const [cards, setCards] = useState();

	useEffect(() => {
		fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
			.then((res) => res.json())
			.then((data) => {
				setCards(data.cards);
				console.log(data);
			});
	}, []);

	return (
		<div className="App">
			<div>
				<img src="" />
				<Categories />
			</div>
		{cards && <Cards cards={cards}/>}
		</div>
	);
}

export default App;
