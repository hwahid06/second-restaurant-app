export function getAllIngredients(data) {
	return data.reduce((prev, curr) => {

		const c = curr.meals[0];

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`;
			const value = c[keyName];
			if (value !== null && value !== "" && prev.indexOf(value) === -1) {
				prev.push(value);
			}
		}                            
		return prev;
	}, []);
}
export function getActiveRecipes (updatedActiveIngredients, recipeArr){
	return recipeArr.filter((recipe) => {
	let keepRecipe = true;
		recipe.ingredients.forEach((ingredient) =>{
			if (!updatedActiveIngredients.includes(ingredient)) {
				keepRecipe = false;
			}
		})
		console.log(keepRecipe)
		return keepRecipe
	})
}
	
export function getUpdatedActiveIngredients (prev, item){
	return prev.filter(el => {
		if (el === item) {
			return false;
		} else {
			return true;
		}
	})
}

export function getUpdatedDiscardedIngredients (activeIngredients, item){
	return [...activeIngredients, item]
}

export const removeIngredient = (arr, ingredient) => {
	return arr.filter((el) => {
		if (el === ingredient) {
			return false
		} else {
			return true
		}
	})
}

export const addIngredient = (arr, ingredient) => {

	return [...arr, ingredient]
}

export function checkForActiveMeals(activeIngredients, meals) {
	const activeMealArr = []
	Object.keys(meals).forEach((meal) => {
		let shouldAddMeal = true

		meals[meal].forEach((ingredient) => {
			if (!activeIngredients.includes(ingredient)) {
				shouldAddMeal = false
			}
		})

		if (shouldAddMeal) {
			activeMealArr.push(meal)
			console.log(activeMealArr)
			
			
		}
		
	})
	return activeMealArr
}

export function getAllMeals(data) {
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]
		const ingArr = []

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '') {
				ingArr.push(value)
			}
		}

		prev[c.strMeal] = ingArr
		return prev
	}, {})
}

export function sort(arr) {
	return arr.sort((a, b) => {
		if (a > b) {
			return 1;
		} else if (b > a) {
			return -1;
		} else {
			return 0;
		}
	})
}

export function getIngredientCount(data) {
	return data.reduce((prev, curr) => {
		const c = curr.meals[0]

		for (let i = 1; i <= 20; i++) {
			const keyName = `strIngredient${i}`
			const value = c[keyName]
			if (value !== null && value !== '') {
				if (prev.hasOwnProperty(value)) {
					prev[value] += 1;
				} else {
					prev[value] = 1;
				}
			}
		}

		return prev;
	}, {})
}