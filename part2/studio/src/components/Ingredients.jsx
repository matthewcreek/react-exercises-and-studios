import recipeData from './recipe.json'

import recipeData from './recipe.json'

function IngredientList() {
  let ingredients = recipeData[0].ingredients
  return (
    <div>
      <h3>Ingredient List</h3>
        <ul>
          {ingredients.map((ingredient, id) => {
            return <li key={id}>{ingredient}</li>
          })}
        </ul>
    </div>
  );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 