import React from "react";


function MealIngredients (props) {
    return (
			<>
				{props.ingredients.map((ingredient) => (
					<li>{ingredient}</li>
				))}
			</>
		)
}

export default MealIngredients