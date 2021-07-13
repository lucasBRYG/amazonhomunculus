import React from 'react'

import Product from '../product/Product';

import "./Home.css";
function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img className = "home__image" src = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTI3NjBmZWUt/MTI3NjBmZWUt-ZjFiN2U0Zjgt-w3000._CB665339528_.jpg" alt = "home banner/alexa ad"/>
            
                <div className = "home__row">
                    <Product 
                        id = {10000}
                        title = "Cracking the Coding Interview: 189 Programming Questions & Solutions"
                        price = {24.49}
                        image = "https://m.media-amazon.com/images/I/619M-4xNINL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = {10001}
                        title = "Beginner's Step-by-Step Coding Course: Learn Computer Programming the Easy Way"
                        price = {17.79}
                        image = "https://m.media-amazon.com/images/I/81xRzWgTElL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                </div>

                <div className = "home__row">
                    <Product
                        id = {10002}
                        title = "Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
                        price = {24.99}
                        image = "https://m.media-amazon.com/images/I/71RZiWPcj8L._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = {10003}
                        title = "NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Water-Resistant Mechanical Keyboard, Rainbow LED Backlit Keyboard"
                        price = {21.99}
                        image = "https://m.media-amazon.com/images/I/61w0BypBzrL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = {10004}
                        title = "Donner Noise Killer Guitar Effect Pedal Noise Gate Pedal"
                        price = {39.99}
                        image = "https://m.media-amazon.com/images/I/61CfFFBD8HL._AC_UL480_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                </div>

                <div className = "home__row">
                    <Product
                        id = {10005}
                        title = {`LG 29WN600-W 29" 21:9 UltraWide WFHD IPS HDR10 Monitor with FreeSync, Silver`}
                        price = {209.99}
                        image = "https://m.media-amazon.com/images/I/91WlgTJfawL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {3}
                    />
                </div>
            
            </div>
        </div>
    )
}

export default Home