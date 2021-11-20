import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,} from '@fortawesome/free-solid-svg-icons'
import "./Person.css"

const Person = (props) => {
    
   const {Age,Name,Instument,Present_Band,Fee,img} = props.person;
   const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
      // making dynamic person card 
      <div className="person-container ">                
                 <img className='mx-auto' src={img} alt="" />
                  <h4 className="text-red-500"><b>Name: {Name}</b>  </h4>
                  <p>Age: {Age}</p>
                  <p>Instument: {Instument}</p>
                  <p>Present Band: {Present_Band}  </p>
                  <p> <small> <span className='text-red-500'>Fee: </span> {Fee}  $</small>  </p>
                  <button
                  onClick={()=>props.handleAddToCart(props.person)}
                  className="  addToCart-btn bg-red-500 hover:bg-red-700" >{element} Add</button>
            
      </div>
    );
};

export default Person;

