const Button = ({ cards }) => {
	const AllCategories = [
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Page",
		"Queen",
		"King",
	];
	return (
		<div>
			{AllCategories.map((category, index) => {
				return <button key={index}>{category}</button>;
			})}
		</div>
	);
};

export default Button;
