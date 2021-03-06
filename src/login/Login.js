import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

import { auth } from "../firebase";

import "./Login.css"
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //firebase login logic
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push("/")
        }).catch(error => alert(error.message))
    }

    //firebase register logic
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push("/");
            }
        }).catch((error) => alert(error.message));
    }

    return (
        <div className = "login">
            <Link to = "/">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = "amazon logo(black text)" className = "login__logo"/>
            </Link>

            <div className = "login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type = "text"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type = "password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                    />
                    <button className = "login__signInButton" type = "submit" onClick = {signIn}>Sign In</button>
                </form>

                <p>
                    By signing in you agree to the AMAZON FAKE HOMUNCULUS conditions of Use & Sale. Please see our Privacy Notice, Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button className = "login__registerButton" onClick = {register}>Create an Account</button> 
            </div>
        </div>
    )
}

export default Login
