import { useState } from "react";
import { allMinorCategories } from "./data";
import Button from "./Button";

const TheLesserArcana = ({ cards }) => {
	const [showCard, setShowCard] = useState(false);

	const [showFilterCard, setShowFilterCard] = useState("all");
	const filterCard = (newCategory) => {
		setShowFilterCard(newCategory);
	};

	return (
		<div>
			<h1>The Lesser Arcana</h1>
			<Button filterCard={filterCard} />
			{cards.map((item) => {
				const { name, value, type, desc, meaning_up, meaning_rev } = item;
				if (type === "minor") {
					return (
						showFilterCard === value && (
							<div>
								<button className='pixel'
									onClick={() => setShowCard(showCard !== name ? name : false)}
								>
								<p>{name}</p>
								</button>
								{showCard === name && (
									<div>
										<h2>{name}</h2>
										<p>{desc}</p>
										<h3> Meaning rev: </h3>
										<p>{meaning_rev}</p>
										<h3> Meaning up: </h3>
										<p>{meaning_up}</p>
									</div>
								)}
							</div>
						)
					);
				}
			})}
		</div>
	);
};

export default TheLesserArcana;
