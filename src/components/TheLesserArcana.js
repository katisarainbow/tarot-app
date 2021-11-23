import { useState } from "react";
import Button from "./Button";

const TheLesserArcana = ({ cards }) => {
	return (
		<div>
			<h1>The Lesser Arcana</h1>
			<Button />
			{cards.map((item) => {
				const { name, value, type, desc, meaning_up, meaning_rev } = item;
				if (type === "minor") {
					return (
						<div>
							<button>{name}</button>
							<h2>{name}</h2>
							<p>{desc}</p>
							<h3> Meaning rev: </h3>
							<p>{meaning_rev}</p>
							<h3> Meaning up: </h3>
							<p>{meaning_up}</p>
						</div>
					);
				}
			})}
		</div>
	);
};

export default TheLesserArcana;
