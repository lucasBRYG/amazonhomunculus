import React from 'react'
import { useHistory } from "react-router-dom";

import { useStateValue } from "../StateProvider"
import { getBasketTotal } from "../reducer";

import CurrencyFormat from "react-currency-format";

import "./Subtotal.css"
function Subtotal() {

    const history = useHistory()
    const [{ basket, user }, dispatch] = useStateValue();

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

            <button onClick = {e => {user ? history.push("/payment") : history.push("/login")}}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
