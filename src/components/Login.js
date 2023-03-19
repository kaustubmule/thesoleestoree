import React, { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import 'firebase/compat/auth'; //v9

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); // Stops the default refresh functionality of login button!!!
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((error) => alert(error));
    };

    const register = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://i.ibb.co/6bZ6dgs/thesolestore.png"
                    alt=""
                />
            </Link>
            <div className="login__container ">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit" className="login__signInButton" onClick={login}>
                        Sign-In
                    </button>
                </form>
                <p>
                    Don't have an account? Create New Account
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Account{" "}
                </button>
            </div>
        </div>
    );
}

export default Login;