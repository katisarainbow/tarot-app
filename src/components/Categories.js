
const Categories = () => {
  const allCategories =  ['All', 'The Greater Arcana', 'The Lesser Arcana']; 
	return(
		<div>
		 {allCategories.map((category, index) => {
			return (
			<button className='btn-cat' key={index}>
			{category}		
			</button>
			)}
		 )}
		</div>
)
}

export default Categories;
