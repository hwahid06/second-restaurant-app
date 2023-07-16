import React from 'react'
import RecipeContainer from './RecipeContainer'
import recipeArr from './Data'
import IngredientList from './IngredientList'


function StaticMeals() {
	console.log(recipeArr)
	return (
		<div>
			<IngredientList allIngredients={getAllIngredients(recipeArr)} />
			<RecipeContainer recipes={recipeArr} />
		</div>
	)
}



function getAllIngredients(recipeArr){
	return recipeArr.reduce((prev,curr) => {
		curr.ingredients.forEach(item => {
			if (!prev.includes(item)) {
				prev.push(item);
			}
		})
		return prev;
	}, [])
}

export default StaticMeals