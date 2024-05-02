import styles from './Ingredients.module.css'

export default function RecipeIngredients() {

    let ingredients = [
        '6 tablespoons unsalted butter',
        '8 slices sourdough or french bread',
        '2 tablespoons mayonnaise',
        '3 tablespoons finely shredded Parmesan cheese',
        '½ cup shredded sharp white cheddar cheese',
        '½ cup shredded Monterey Jack cheese',
        '½ cup shredded Gruyere cheese',
        '4 ounces Brie cheese',
        'Ketchup for dipping'
    ]

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                {ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>
                })}
            </ul>
        </div>
    )
}