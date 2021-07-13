import React from 'react'

import { useStateValue } from "../StateProvider"
import { getBasketTotal } from "../reducer";

import CurrencyFormat from "react-currency-format";

import "./Subtotal.css"
function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();
    let subtotal = 0;
    basket.forEach(item => {
        subtotal += item.price;
    });

    return (
        <div className = "subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className = "subtotal__gift">
                            <input type = "checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeperator = {true}
                prefix = {"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
