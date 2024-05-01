import styles from './Ingredients.module.css'

export default function RecipeIngredients() {
    const ingredients = [
        '8 slices bread',
        '8 slices part skim mozzarella cheese',
        '4 teaspoons Parmesan Cheese',
        '4 dashes garlic salt',
        '24 slices pepperoni',
        'butter',
        'pizza sauce'
    ]
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                {ingredients.map((ingredient, index) => {
                    return (
                        <li key={index}>{ingredient}</li>
                    )
                })}
            </ul>
        </div>
    )
}