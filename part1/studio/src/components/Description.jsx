import styles from './Description.module.css'
import React from 'react';

function RecipeAuthor() {

    const authorLink = 'https://dailydishrecipes.com/about-us/'
    const authorPhoto = 'https://dailydishrecipes.com/wp-content/uploads/2019/06/36358788_10204469121963976_8049450332603809792_n-300x300.jpg'
    const authorName = 'Nicole Cook'

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Nicole Cook headshot" className={styles.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog Name</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;