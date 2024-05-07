import './styling.css'
import recipeData from './recipe.json'

function AuthorInfo() {
  let recipe = recipeData[0]
  let recipeAuthorImage = <img src={recipe.authorImage} alt={recipe.author} className='authorImage'/>
  let recipeAuthor = <div>{recipe.author}</div>
  let recipeWebsite = <a href={recipe.website}>Website</a>
   return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 