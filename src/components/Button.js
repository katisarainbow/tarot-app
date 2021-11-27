import { allMinorCategories } from "./data";

const Button = ({filterCard}) => {
	return (
		<div>
			{allMinorCategories.map((category, index) => {
				const categoryLower = category.toLowerCase();
				return <button onClick={()=> filterCard(categoryLower)} key={index} className="btn-minor">{category}</button>;
			})}
		</div>
	);
};

export default Button;
