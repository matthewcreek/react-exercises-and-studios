import recipeData from './recipe.json'
import './styling.css'
let recipe = recipeData[0]

function RecipeImage() {
   return (
    <div>
      <img src={recipe.recipeImage} alt={recipe.name} className='recipeImage' />;
    </div>
   )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 