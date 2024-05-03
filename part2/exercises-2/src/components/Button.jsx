import './styles.css';

function Button() {

   const onLearnMore = () => (
      alert('Splish splash')
   )
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;