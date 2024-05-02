import styles from './Description.module.css'
import React from 'react'

function RecipeAuthor() {

    let authorLink = 'https://whatsgabycooking.com/about-2/'
    let authorPhoto = 'https://whatsgabycooking.com/wp-content/uploads/2022/03/HeadShotXL.png'
    let authorName = 'Gabby Dalkin'

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Author Photo" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>What&apos;s Gabby Cooking</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
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