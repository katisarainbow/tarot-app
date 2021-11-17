
const Categories = () => {
  const Allcat =  ['All', 'The Greater Arcana', 'The Lesser Arcana']; 
	return(
		<div>
		 {Allcat.map((category, index) => {
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
