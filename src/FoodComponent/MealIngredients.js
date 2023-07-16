import React from "react";
import IngredientList from "./IngredientList";


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