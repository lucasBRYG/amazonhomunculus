import React from 'react';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider"
import { auth } from "../firebase";
//importing icons from material-ui
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import "./Header.css";
function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAutentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className = "header">
            <Link to = "/">
                <img src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt = "amazon logo" className = "header__logo"/>
            </Link>
            
            <div className = "header__search">
                <input className = "header__searchInput" type = "text"/>
                <SearchIcon className = "header__searchIcon"/>
            </div>
            <div className = "header__nav">
                
                <Link to = {!user && "/login"}>
                    <div className = "header__option" onClick = {handleAutentication}>
                        <span className = "header__optionLineOne">
                            {!user ? "Hello Guest" : `Hello ${user.email}`}
                        </span>
                        <span className = "header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                
                <div className = "header__option">
                    <span className = "header__optionLineOne">
                        Returns
                    </span>
                    <span className = "header__optionLineTwo">
                        Orders
                    </span>
                </div>
                <div className = "header__option">
                    <span className = "header__optionLineOne">
                        Your
                    </span>
                    <span className = "header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to = "/checkout">
                    <div className = "header__optionBasket">
                        <ShoppingCartIcon/>
                        <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
