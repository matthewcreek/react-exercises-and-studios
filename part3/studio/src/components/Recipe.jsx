// import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://whatsgabycooking.com/about-2/";
   let authorPhoto = "https://whatsgabycooking.com/wp-content/uploads/2022/03/HeadShotXL.png";
   let authorName = "Gabby Dalkin";

   return (
      <div>
         <img src={authorPhoto} alt ={authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "6 tablespoons unsalted butter",
      "8 slices sourdough or french bread",
      "2 tablespoons mayonnaise",
      "3 tablespoons finely shredded Parmesan cheese",
      "½ cup shredded sharp white cheddar cheese",
      "½ cup shredded Monterey Jack cheese",
      "½ cup shredded Gruyere cheese",
      "4 ounces Brie cheese",
      "Ketchup for dipping"
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map((ingredient, index) => {
               return <li key={index}>{ingredient}</li>
            })}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   let recipeName = "Grilled Cheese"
   let recipeDescription = "Decadent melty cheese sandwiched between crispy slices of whole-grain bread."
   return (
      <div> 
         <div>
            <h1>{recipeName}</h1>
            <p>{recipeDescription}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   let recipePhoto = "https://whatsgabycooking.com/wp-content/uploads/2022/11/WGC-__-Grilled-Cheese-7.jpg"
   let recipeName = "Grilled Cheese"

   return (
      <img src={recipePhoto} alt={recipeName} className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
