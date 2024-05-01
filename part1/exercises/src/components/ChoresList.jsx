import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <>
         <h1 className={classes.choresHeading}>Chore List</h1>
         <ul className={classes.choresText}>
            <li>Wash the sink</li>
            <li>Clean the garbage</li>
            <li>Deliver aid to the suffering</li>
         </ul>
      </>
   );
}