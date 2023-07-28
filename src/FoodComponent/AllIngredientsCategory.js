export default function AllIngredientsCategory ({ingredients, handleAddIngredient,ingredientCount}) {

function getStyle(ing) {
    const maxCount = Math.max(...Object.values(ingredientCount));
    const count = ingredientCount[ing];
    const ratio = count / maxCount

    return {
        backgroundColor: 'green',
        'filter': `brightness(${1 + ratio})`
    }
}

    return (
        <>
            <h4>All Ingredients:</h4>
            {ingredients.map((ing, i) => {
                return (
                    <>
                        <div key={`${ing}-${i}`} style={getStyle(ing)}>{ing}</div>
                        <button onClick={handleAddIngredient} key={ing} value={ing}>
                            +
                        </button>
                    </>
                )
            })}
        </>
    )
}