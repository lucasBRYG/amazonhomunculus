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
                        id = {1000000}
                        title = "Cracking the Coding Interview: 189 Programming Questions & Solutions"
                        price = {24.49}
                        img = "https://m.media-amazon.com/images/I/619M-4xNINL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = {1000001}
                        title = "Beginner's Step-by-Step Coding Course: Learn Computer Programming the Easy Way"
                        price = {17.79}
                        img = "https://m.media-amazon.com/images/I/81xRzWgTElL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                </div>

                <div className = "home__row">
                    <Product
                        id = {1000002}
                        title = "Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black"
                        price = {24.99}
                        img = "https://m.media-amazon.com/images/I/71RZiWPcj8L._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                    <Product
                        id = {1000003}
                        title = "NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Water-Resistant Mechanical Keyboard, Rainbow LED Backlit Keyboard"
                        price = {21.99}
                        img = "https://m.media-amazon.com/images/I/61w0BypBzrL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = {1000004}
                        title = "Donner Noise Killer Guitar Effect Pedal Noise Gate Pedal"
                        price = {39.99}
                        img = "https://m.media-amazon.com/images/I/61CfFFBD8HL._AC_UL480_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                </div>

                <div className = "home__row">
                    <Product
                        id = {1000005}
                        title = {`LG 29WN600-W 29" 21:9 UltraWide WFHD IPS HDR10 Monitor with FreeSync, Silver`}
                        price = {209.99}
                        img = "https://m.media-amazon.com/images/I/91WlgTJfawL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {3}
                    />
                </div>
                <div className = "home__row">
                    <Product 
                        id = {1000006}
                        title = "The Gutenberg Bible of 1454"
                        price = {116.09}
                        img = "https://m.media-amazon.com/images/I/71hinH6GW8S._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                    <Product 
                        id = {1000007}
                        title = "Trina Turk Women's High-Leg Maillot One Piece Swimsuit"
                        price = {153.20}
                        img = "https://m.media-amazon.com/images/I/81UmB4GQp8L._MCnd_AC_UL480_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = {1000008}
                        title = "Funko Pop! Vinyl Comic Cover: DC - Batman"
                        price = {15.99}
                        img = "https://m.media-amazon.com/images/I/71rP5DQopdS._AC_UL480_FMwebp_QL65_.jpg"
                        rating = {3}
                    />
                </div>
                <div className = "home__row">
                    <Product
                        id = {1000008}
                        title = "2021 Apple 11-inch iPad Pro (Wi‑Fi, 128GB) - Silver"
                        price = {749.00}
                        img = "https://m.media-amazon.com/images/I/81MF389-9gS._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = {1000009}
                        title = "Alienware m15 R4 RTX 3070 Gaming Laptop Full HD (FHD), 15.6 inch"
                        price = {2271.90}
                        img = "https://m.media-amazon.com/images/I/71Hx1SjCFIL._AC_UY327_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                </div>
                <div className = "home__row">
                    <Product
                        id = {1000010}
                        title = "PRS Guitars 6 String SE Hollowbody II Charcoal Burst with Case"
                        price = {1159.00}
                        img = "https://m.media-amazon.com/images/I/61hanTKe88L._AC_UL480_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = {1000011}
                        title = "VOX, 2 electric-guitar-amplifier-combos, Vintage (AC15C1)"
                        price = {699.99}
                        img = "https://m.media-amazon.com/images/I/81BkBR1Q8KL._AC_UL480_FMwebp_QL65_.jpg"
                        rating = {5}
                    />
                    <Product
                        id = {1000012}
                        title = "EarthQuaker Devices Plumes Small Signal Shredder Overdrive Guitar Effects Pedal"
                        price = {99.00}
                        img = "https://m.media-amazon.com/images/I/61tIGWxlS5L._AC_UL480_FMwebp_QL65_.jpg"
                        rating = {4}
                    />
                </div>
                <div className = "home__row">
                    <Product
                        id = {1000012}
                        title = 'Deco Gear 3-Pack 49" Curved Ultrawide E-LED Gaming Monitor, 32:9 Aspect Ratio, Immersive 3840x1080 Resolution, 144Hz Refresh Rate, 3000:1 Contrast Ratio'
                        price = {2734.05}
                        img = "https://m.media-amazon.com/images/I/71vWoilq6yL._AC_UY327_QL65_.jpg"
                        rating = {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home