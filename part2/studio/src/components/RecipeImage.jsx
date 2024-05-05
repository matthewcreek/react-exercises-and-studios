import recipeData from './recipe.json'

function RecipeImage() {
  let recipe = recipeData[0]
  return (
    <div>
      <img src={recipe.recipeImage} alt={recipe.name} className='recipeImage'/>
    </div>
  )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 