import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import TheGreaterArcana from "./components/TheGreaterArcana";
import TheLesserArcana from "./components/TheLesserArcana";

function App() {
	const [cards, setCards] = useState();
	const [allCategories, setAllCategories] = useState("all");

	useEffect(() => {
		fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
			.then((res) => res.json())
			.then((data) => {
				setCards(data.cards);
				console.log(data);
			});
	}, []);

	const filterComponents = () => {
		if (allCategories === "major") {
			return <TheGreaterArcana cards={cards} />;
		} else if (allCategories === "minor") {
			return <TheLesserArcana cards={cards}/>;
		} else {
			return (
				<>
					<TheGreaterArcana cards={cards} />
					<TheLesserArcana cards={cards}/>
				</>
			);
		}
	};


	const handleButtonClick = (newCategory) => {
		setAllCategories(newCategory);
	};


	return (
		<div className="App">
			<div className="header">
				<h1 className="title"> Tarot Meanings </h1>
				<Categories handleButtonClick={handleButtonClick} />
			</div>
			<div className='container'>
				{cards && filterComponents()}
			</div>
		</div>
	);
}

export default App;
