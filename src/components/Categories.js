const Categories = ({ handleButtonClick }) => {
	return (
		<div>
			<button onClick={() => handleButtonClick("all")} className="btn-category">
				<p>All</p>
			</button>
			<button onClick={() => handleButtonClick("major")} className="btn-category">
				<p> The Greater Arcana </p>
			</button>
			<button onClick={() => handleButtonClick("minor")} className="btn-category">
				<p> The Lesser Arcana </p>
			</button>
		</div>
	);
};

export default Categories;
