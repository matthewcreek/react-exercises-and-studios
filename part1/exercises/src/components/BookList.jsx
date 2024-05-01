import classes from './BookList.module.css'

export default function BookList() {
   let pageTitle = "Books I Have Read";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/WoT01_TheEyeOfTheWorld.jpg/250px-WoT01_TheEyeOfTheWorld.jpg";
   let book2 = "https://m.media-amazon.com/images/I/814GSImJmJL._AC_UF1000,1000_QL80_DpWeblab_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81jOrr8Z2nL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Eye of the World" className={classes.bookImg}/>
         <img src={book2} alt="The Great Hunt" className={classes.bookImg}/>
         <img src={book3} alt="The Dragon Reborn" className={classes.bookImg}/>
      </div>      
   );
}