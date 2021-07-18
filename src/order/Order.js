import React from 'react';
import moment from "moment";
import CurrencyFormat from 'react-currency-format';

import CheckoutProduct from '../product/CheckoutProduct';

import "./Order.css";
function Order({ order }) {
    return (
        <div className = "order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMM Do YYY, h:mma")}</p>
            <p className = "order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    img = {item.img}
                    price = {item.price}
                    rating = {item.rating}
                />
            ))}
            <CurrencyFormat
                renderText = {(value) => (
                        <h3 className = "order__total">Order Total: {value}</h3>
                )}
                    
                decimalScale = {2}
                value = {order.data.amount / 100}
                displayType = {"text"}
                thousandSeperator = {true}
                prefix = {"$"}
            />
        </div>
    )
}

export default Order
