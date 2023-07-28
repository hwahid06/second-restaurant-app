import React, { useState } from 'react';
import RecipeContainer from './RecipeContainer';
import recipeArr from './Data';
import IngredientList from './IngredientList';
import {
	getAllIngredients,
	getActiveRecipes,
	getUpdatedActiveIngredients,
	getUpdatedDiscardedIngredients,
} from './utils'



function StaticMeals(props) {
	
	const [activeIngredients, setActiveIngredients] = useState(getAllIngredients(recipeArr))
	const [discardedIngredients, setDiscardedIngredients] = useState([]);
	const [activeMeals, setActiveMeals] = useState(recipeArr)

	function removeIngredient(event) {
		const item = event.target.value;

		const updatedActiveIngredients = getUpdatedActiveIngredients(activeIngredients,item)

		const updatedActiveMeals = getActiveRecipes (updatedActiveIngredients, recipeArr)
		
		setActiveIngredients(updatedActiveIngredients)
		
		

		setActiveMeals(updatedActiveMeals)
	}
	
	function restoreIngredient (event) {
		const item = event.target.value;
		const updatedDiscardedIngredients = getUpdatedDiscardedIngredients(activeIngredients, item)

		const updatedActiveMeals = getActiveRecipes(updatedDiscardedIngredients,recipeArr)
		

		setDiscardedIngredients(prev => {
			return prev.filter (el => {
				if (el === item) {
					return false;
				} else {
					return true;
				}
			})
		})

		setDiscardedIngredients((previous) => {
			return [...previous, item]
		})
		setActiveMeals(updatedActiveMeals)
	}

	return (
		<div>
			<IngredientList 
			activeIngredients={activeIngredients}
			removeIngredient={removeIngredient}
			discardedIngredients={discardedIngredients}
			restoreIngredient={restoreIngredient} />

			<RecipeContainer 
			recipes={activeMeals} />
		</div>
	)
}

export default StaticMeals