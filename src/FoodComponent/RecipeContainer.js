import React from 'react'
import MealIngredients from './MealIngredients';
import CardList from './CardList';



function RecipeContainer(props) {
	console.log(props.recipes)
	return (
		<div>
			{props.recipes.map(item => {
				return <CardList
					recipes = {item.foodItem}
					ingredients = {item.ingredients}
					key = {`recipe-card-${item.recipes}`}
					/>
			})}
		</div>
	)
}
export default RecipeContainer;
