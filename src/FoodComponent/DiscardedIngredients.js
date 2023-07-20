import React from 'react'

function DiscardedIngredients(props) {
	return (
		<div>
			<h3>Discarded Ingredients</h3>
			{props.discardedIngredients.map((item) => {
				return (
					<div key={item}>
						{item}
						<button value={item} onClick={props.restoreIngredient}>+</button>
					</div>
				)
			})}
		</div>
	)
}

export default DiscardedIngredients
