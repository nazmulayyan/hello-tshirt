import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt, handleAddToCart}) => {
    const {picture, name, price, gender} = tShirt;
    return (
        <div className='carts'>
            <img src={picture} alt="" />
            <h4>t-shirt name:{name}</h4>
            <p>price: ${price}</p>
            <p>gender: {gender}</p>
            <button onClick={()=>handleAddToCart (tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;