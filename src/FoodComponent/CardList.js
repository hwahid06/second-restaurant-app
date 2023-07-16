import React from 'react'

import RecipeContainer from './RecipeContainer'
import MealIngredients from './MealIngredients'
// recipe = {item.recipe}
// 					ingredients = {item.ingredients}
// 					key = {`recipe-card-${item.recipe}`}

function CardList (props) {
	console.log(props)
	return( 
	

		<div>
			<h1>{props.recipes}</h1>
			
			<ul>
				{props.ingredients.map((item, index) => {
					return <li key={index}>{item}</li>
				})}
			</ul>
			
		</div>
		

	)
}

export default CardList
