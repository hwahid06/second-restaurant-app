import { useEffect, useState, React } from 'react'
import {getMealCategories, getMealByCategory, getMealDetails} from './api'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	addIngredient,
	checkForActiveMeals,
	removeIngredient,
	getAllIngredients,
	getAllMeals,
	getIngredientCount,
	sort,
} from '../FoodComponent/utils'
import Categories from '../FoodComponent/Categories';
import MealsCategories from '../FoodComponent/MealsCategories';
import IngredientCategory from '../FoodComponent/IngredientCategory';
import AllIngredientsCategory from '../FoodComponent/AllIngredientsCategory';
import IngredientScale from '../FoodComponent/IngredientScale';



function Index () {

    const [categories, setCategories] = useState ([]);
    const [activeCategory, setActiveCategory] = useState ('');
    const [meals, setMeals] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [activeIngredients, setActiveIngredients] = useState([]);
	const [activeMeals, setActiveMeals] = useState([]);
	const [ingredientCount, setIngredientCount] = useState({});
	
	useEffect(() => {
		getMealCategories().then((data) => {
			const categoryArr = data.categories.map(obj => {
				return obj.strCategory
			})
			setCategories(categoryArr)
		})
	}, [])

	
    useEffect(() => {
        if(activeCategory !=='')
        getMealByCategory(activeCategory)
            .then(data =>{
                
			const promiseArr = data.meals.map(obj => {
				return getMealDetails (obj.idMeal)
			});

		Promise.all(promiseArr).then(data => {

			const ingredientArr = getAllIngredients(data)
			const mealObj = getAllMeals(data)
			const ingredientCountObj = getIngredientCount(data);
			
			setMeals(mealObj)
			setIngredients(sort(ingredientArr))
			setIngredientCount(ingredientCountObj)

			console.log(ingredientCountObj)
			});
			
		});
    },[activeCategory]);

	function handleCategorySelect(e) {
		const newActiveCategory = e.target.value;
		setActiveCategory(newActiveCategory)
		// console.log(newActiveCategory)
		setActiveIngredients ([])
	}

        function handleAddIngredient(e) {
			// removeEventListener()
			const newActiveIngredient = e.target.value
			const updatedIngredients = removeIngredient(ingredients,newActiveIngredient)
			setIngredients(updatedIngredients)
			
			// addEventListener()
			const updatedActiveIngredients = addIngredient(activeIngredients,newActiveIngredient)
			
			// filter()
			const updatedActiveMeals = checkForActiveMeals(updatedActiveIngredients, meals)
			console.log(updatedActiveMeals)
			setActiveMeals(updatedActiveMeals)
			setActiveIngredients(updatedActiveIngredients)
		}

		function handleRemoveIng(event) {
			const removeActiveIng = event.target.value
			
			const updateRemovedIng = removeIngredient(activeIngredients,removeActiveIng)
			setActiveIngredients(updateRemovedIng)

			const updateAllIngredients = addIngredient(ingredients, removeActiveIng)
			setIngredients(updateAllIngredients)
		}

	return (
		<>
			<Categories
				activeCategory={activeCategory}
				categories={categories}
				handleCategorySelect={handleCategorySelect}
			/>
			<Row>
				<IngredientScale ingredientCount={ingredientCount} />
			</Row>

			<Row>
				<Col>
					<MealsCategories meals={meals} activeMeals={activeMeals} />
				</Col>
				<Col>
					<IngredientCategory
						activeIngredients={activeIngredients}
						handleRemoveIng={handleRemoveIng}
					/>
				</Col>
				<Col>
					<AllIngredientsCategory
						handleAddIngredient={handleAddIngredient}
						ingredients={ingredients}
						ingredientCount={ingredientCount}
					/>
				</Col>
			</Row>
		</>
	)
}
export default Index
