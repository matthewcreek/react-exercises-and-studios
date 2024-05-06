import recipeData from './recipe.json'

function IngredientList() {
  let ingredients = recipeData[0].ingredients
  return (
    <div>
      <ul>
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
    </div>
  )

 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 