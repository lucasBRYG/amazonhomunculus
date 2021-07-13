import React from 'react'

import { useStateValue } from '../StateProvider';

import "./Product.css"
function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    console.log("this is the basket >>> ", basket);

    const addToBaket = () => {
        // dispatch item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                titel: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product" key = {id}>

            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

            </div>

            <img src={image} alt="product view, white background" />

            <button className="product__button" onClick = {addToBaket}>Add to Basket</button>

        </div>
    )
}

export default Product
