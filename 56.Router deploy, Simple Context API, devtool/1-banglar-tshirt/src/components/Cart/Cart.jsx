import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart)
    let message;
    if(cart.length === 0){
        message = <p>Please Add Some Products</p>
    }
    else{
        message = <div>
            <h2>Wow! Thanks for add products</h2>
        </div>
    }
    return (
        <div className='cart-container'>
            <h1 className={cart.length >= 1 ? 'black' : 'red'}>Order Summary: {cart.length}</h1>
            <p className={`bold red ${cart.length === 7 ? 'green': 'red'}`}>something</p>
            {/* 1 */}
            {message}
            {/* 2 */}
            {cart.length >= 2 ? <span className='purple'>Bah 2 ta already kineso</span>: <span>Koi kino na ken</span>}


            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p> )
            }

            {/* 3 */}
            {
                cart.length === 2 && <p>Double Dhamaka</p>
            }
            {/* 4 */}
            {
                cart.length === 3 || <p>3 ta to hoilo na vai</p>
            }

        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for ture' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
*/

/**
 * CONDITIONAL CSS CLASS
 * 5. Use ternary 
 * 6. ternary inside template string
*/





