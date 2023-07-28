
export default function MealsCategories ({meals, activeMeals}) {

    function isMealActive(meal){
        return activeMeals.includes(meal)
    }
    
    return (
        <>
            <h4>Meal Options:</h4>
                <ul>
                    {Object.keys(meals).map((meal, i) => {
                        return <li 
                        key={`${meals}-${i}`}
                        className={isMealActive(meal) ? "active-meal" : "non-active-meal"}
                        >{meal}</li>
                    })}
                </ul>
        </>
	)
    
}

// const specialStyle = {
//     backgroundColor: 'red'
// }