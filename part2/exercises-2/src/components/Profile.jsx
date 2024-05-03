import './styles.css';
import Button from './Button';

import oceanData from './oceans.json'


function Profile()
{
   const listItem = oceanData.map(ocean => (
      <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
         <img src={ocean.image} alt={ocean.name} className='img'/>
         <h1>{ocean.name}</h1>
         <h2>Fun Facts</h2>
         <ul>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
         </ul>
         <Button />
      </div>
   ))
   return(
      <div>
         <ul>
            {listItem}
         </ul>
      </div>  
   );
}

export default Profile;