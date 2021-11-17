const Cards = ({ cards }) => {
	return (
		<div>
			{cards.map((item) => {
				const { name, desc, name_short, type, value } = item;
				return (
					<div>
						<div id={name_short}>
							<h2>{name}</h2>
							<p>{desc}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
