import React from "react";

function ActiveIngredients (props) {
    return (
			<div>
				<h3>Active Ingredients</h3>

				{props.activeIngredients.map((item) => {
					return (
						<div key={item}>
							{item}
							<button value={item} onClick={props.removeIngredient}>-</button>
						</div>
					)
				})}
			</div>
		)
}

export default ActiveIngredients