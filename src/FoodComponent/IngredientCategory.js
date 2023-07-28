import { removeIngredient } from "./utils"

export default function IngredientCategory({activeIngredients}) {
	return (
		<>
			<h4>Active Ingredients:</h4>
			<div>
				{activeIngredients.map((aIng, i) => {
					return (
							<>
								<li key={`${aIng}-${i}`}>{aIng}</li>
								<button onClick={removeIngredient} value={aIng}>
									-
								</button>
							</>
					)
				})}
			</div>
		</>
	)
}