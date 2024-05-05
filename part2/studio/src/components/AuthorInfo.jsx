import recipeData from './recipe.json'
import './styling.css'

function AuthorInfo() {
   return (
    <div>
      {recipeData.map(recipe => {
        return (
          <div key={recipe.name}>
            <h3>{recipe.author}</h3>
            <img src={recipe.authorImage} alt={recipe.author} className='authorImage' />
            <a href={recipe.website}>What's Gabby Cooking?</a>
          </div>
        )
      })}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 