

export default function Categories({activeCategory, categories, handleCategorySelect}){


    return (
			<>
				<h3>Select Food Category</h3>
				<h4>Active Category: {activeCategory} </h4>
				{categories.map((Category) => {
					return (
						<button
							key={Category}
							onClick={handleCategorySelect}
							value={Category}>
							{Category}
						</button>
					)
				})}
			</>
		)

}
