import classes from './HobbyLinks.module.css'

export default function HobbyLinks() {

    let hobbyLinks = [
        'https://www.sweetwater.com',
        'https://store.steampowered.com',
        'https://kruegerpottery.com'
    ]

    return (
        <>
        <div className={classes.hobbies}>
            <h1 className={classes.heading}>My Hobbies</h1>
            <div className={classes.links}>
                <a href={hobbyLinks[0]}>Sweetwater Music Supply</a>
                <a href={hobbyLinks[1]}>Steam Video Game Store</a>
                <a href={hobbyLinks[2]}>Krueger Pottery Supply</a>
            </div>
        </div>
        </>
    )
}