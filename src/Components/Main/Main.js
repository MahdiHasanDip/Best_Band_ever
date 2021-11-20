import React, { useState, useEffect} from 'react';
import Person from '../Person/Person';
import Cart from '../cart/Cart';
import "./Main.css"

const Main = () => {

//    Stats  
const [persons, setPersons]= useState([]);
const [cart, setCart]= useState([]);



// Calling api 
useEffect(() =>{
    fetch('./musician.JSON')
    .then(res => res.json())
    .then(data => setPersons(data));
}  ,[])

// btn handel 

const handleAddToCart = (person) =>{

 const newCart =[...cart, person];
 setCart(newCart);
}


    return (
       <div className="main-container">
            <div className="">
                  
             
                <div className="grid grid-cols-3 mt-5 Person-containr">
                {
                    persons.map(person=> <Person
                        
                        key={person.id} 
                        person={person}
                        handleAddToCart={handleAddToCart}
                    >

                    </Person>)   
               }
                </div>
                
            </div>
            <div className="m-5">
               <Cart cart={cart}></Cart>
        
            </div>
        </div>
    );
};

export default Main;
