import React from 'react'
import CardList from './CardList';



function RecipeContainer(props) {
	return (
		<div className='d-flex flex-wrap'>
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
