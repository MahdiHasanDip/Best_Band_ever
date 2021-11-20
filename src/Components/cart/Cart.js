import React from 'react';
import "./Cart.css"


// Cart 

const cart = (props) => {
    
// Calculating Total Cost 
        const {cart} = props;
       
        let total = 0;
        for(const person of cart){
            total = total + person.Fee;
        }
       

    return (
        <div className="cart">
            <h3 className="text-2xl">CART</h3>
                <h4>Added: {props.cart.length}</h4>
                <h5 >Total Cost: {total} </h5>
        </div>
    );
};

export default cart;