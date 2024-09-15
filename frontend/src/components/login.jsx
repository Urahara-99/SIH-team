import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserAction } from './shared/store/actions/user.actions'; // Adjust the path as necessary
import './css/login.css';
import facebook from './images/facebook.svg';
import google from './images/google.svg';
import linkedin from './images/linkedin.svg';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [login, setLogin] = useState(true);
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: ""
    });

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signUp = (e) => {
        e.preventDefault();
        console.log('Sign Up:', signUpForm);
        setSignUpForm({
            name: "",
            email: "",
            password: ""
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        console.log('Sign In:', signInForm);
        dispatch(setUserAction({ username: signInForm.email }));
        navigate("/dashboard");
        setSignInForm({
            email: "",
            password: ""
        });
    };
    return (
        <div className="login">
            <div className={`login__colored-container ${login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
            <div className={`login__welcome-back ${login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                <div className="login__welcome-back__logo-container">
                    Instructify
                </div>
                <div className="login__welcome-back__main-container">
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Welcome Back!
                        </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            To keep sharing your Learning with us, please log in.
                        </span>
                    </div>
                    <div onClick={() => setLogin(!login)} className="login__welcome-back__main-container__button-container">
                        Sign In
                    </div>
                </div>
            </div>
            <div className={`login__create-container ${login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                Create Account
                <div className="login__create-container__social-container">
                    <img className="login__create-container__social-container--facebook-icon" src={facebook} alt="Facebook" />
                    <img className="login__create-container__social-container--google-icon" src={google} alt="Google" />
                    <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt="LinkedIn" />
                </div>
                <span className="login__create-container--info-text">or use email for your registration</span>
                <div className="login__create-container__form-container">
                    <form className="login__create-container__form-container__form" onSubmit={signUp}>
                        <input
                            className="login__create-container__form-container__form--name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={signUpForm.name}
                            onChange={handleSignUpChange}
                            required />
                        <input
                            className="login__create-container__form-container__form--email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signUpForm.email}
                            onChange={handleSignUpChange}
                            required />
                        <input
                            className="login__create-container__form-container__form--password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signUpForm.password}
                            onChange={handleSignUpChange}
                            required />
                        <button
                            className="login__create-container__form-container__form--submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className={`login__login-container ${!login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                <div className="login__login-container__logo-container">
                   Instructify
                </div>
                <div className="login__login-container__main-container">
                    <div className="login__login-container__main-container__social-container">
                        <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="Facebook" />
                        <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="Google" />
                        <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="LinkedIn" />
                    </div>
                    <span className="login__login-container__main-container--info-text">or use email for your login</span>
                    <div className="login__login-container__main-container__form-container">
                        <form className="login__login-container__main-container__form-container__form" onSubmit={signIn}>
                            <input
                                className="login__login-container__main-container__form-container__form--email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={signInForm.email}
                                onChange={handleSignInChange}
                                required />
                            <input
                                className="login__login-container__main-container__form-container__form--password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={signInForm.password}
                                onChange={handleSignInChange}
                                required />
                            <button
                                className="login__login-container__main-container__form-container__form--submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`login__hello-container ${!login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                <div className="login__welcome-back__main-container__text-container">
                    <span className="login__welcome-back__main-container__text-container--title">
                        Hello, NewOne!
                    </span>
                    <span className="login__welcome-back__main-container__text-container--secondary">
                        Enter your personal details and start your own Learning!
                    </span>
                </div>
                <div onClick={() => setLogin(!login)} className="login__welcome-back__main-container__button-container">
                    Sign Up
                </div>
            </div>
        </div>
    );
};

export default Login;
