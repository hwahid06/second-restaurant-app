import React, { useState } from 'react';
import RecipeContainer from './RecipeContainer';
import recipeArr from './Data';
import IngredientList from './IngredientList';
import { getAllIngredients, getActiveRecipes } from './utils';



function StaticMeals(props) {
	
	const [activeIngredients, setActiveIngredients] = useState(getAllIngredients(recipeArr))
	const [discardedIngredients, setDiscardedIngredients] = useState([]);
	const [activeMeals, setActiveMeals] = useState(recipeArr)

	function removeIngredient(event) {
		const item = event.target.value;

		const updatedActiveMeals = getActiveRecipes (activeIngredients, recipeArr)
		console.log(updatedActiveMeals)

		setActiveIngredients((prev) => {
			return prev.filter(el => {
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
	
	function restoreIngredient (event) {
		const item = event.target.value;
		setDiscardedIngredients(prev => {
			return prev.filter (el => {
				if (el === item) {
					return false;
				} else {
					return true;
				}
			})
			
		})
		setActiveIngredients((prev) => {
			return [...prev, item]
		})
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