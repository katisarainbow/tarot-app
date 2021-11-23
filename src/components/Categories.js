const Categories = ({ handleButtonClick }) => {
	return (
		<div>
			<button onClick={() => handleButtonClick("all")}>All</button>
			<button onClick={() => handleButtonClick("major")}>
				The Greater Arcana
			</button>
			<button onClick={() => handleButtonClick("minor")}>
				The Lesser Arcana
			</button>
		</div>
	);
};

export default Categories;
