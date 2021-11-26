import { useState } from "react";

const TheGreaterArcana = ({ cards }) => {
	const [showCard, setShowCard] = useState(false);
	return (
		<div>
			<h1>The Greater Arcana</h1>
			{cards.map((item) => {
				const { name, desc, name_short, type, value, meaning_rev, meaning_up } =
					item;
				if (type === "major") {
					return (
						<div>
							<button className='pixel'
								onClick={() => setShowCard(showCard !== name ? name : false)}>
								<p>{name}</p>
							</button>
							{showCard === name && (
								<div id={name_short}>
									<h2>{name}</h2>
									<p>{desc}</p>
									<h3> Meaning rev:</h3>
									<p>{meaning_rev}</p>
									<h3> Meaning Up:</h3>
									<p>{meaning_up}</p>
								</div>
							)}
						</div>
					);
				}
			})}
		</div>
	);
};

export default TheGreaterArcana;
