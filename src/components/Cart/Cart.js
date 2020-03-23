import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    // total
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    // Shipping
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15 ){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 11.99;
    }

    // tax
    const tax = (total / 10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>Tax + Vat: {tax}</p>
            <h4>Total Price: {grandTotal}</h4>
        </div>
    );
};

export default Cart;