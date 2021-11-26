import { allMinorCategories } from "./data";

const Button = ({filterCard}) => {
	return (
		<div>
			{allMinorCategories.map((category, index) => {
				const categoryLower = category.toLowerCase();
				return <button onClick={()=> filterCard(categoryLower)} key={index}>{category}</button>;
			})}
		</div>
	);
};

export default Button;
