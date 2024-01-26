import "./Login.scss";
import {useState, useRef} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import { Link, Navigate } from "react-router-dom";
import background from "../assets/beechmore-books-0S2rRstB_9M-unsplash.jpg"
import {ReactSVG} from "react-svg";
import Vinkje from "../assets/vinkje.svg";

export default function Login() {
    const { token, setUser, setToken} = useStateContext()
    if (token) {
        return  <Navigate to="/profile" />
    }

    const emailRef = useRef();
    const pwdRef = useRef();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) =>{
        ev.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: pwdRef.current.value,
        }
        setErrors(null)
        axiosClient.post('/login', payload)
            .then(({data})=>{
                setUser(data.user);
                setToken(data.token);
            })
            .catch(err =>{
                const response = err.response;
                if(response && response.status === 422){
                    if (response.data.errors){
                        setErrors(response.data.errors)
                    }else{
                        setErrors({
                            email: [response.data.message]
                        })
                    }
                }
            })
    }

    return (
        <div className="login">
            <div className="leftLoginPane" style={{backgroundImage: `url(${background})`}}>
                <div className="textWrapper">
                        <div className="textWrapper__div">
                        <h2 className="textWrapper__div__h2">RecipeKeeper</h2>
                        <h1 className="textWrapper__div__h1">Altijd en overal jouw projecten inzichtelijk.</h1>
                    </div>
                </div>
            </div>
            <div className="login__rightpane">
                <div className="loginform">
                    <h2 className="loginform__h2">Inloggen</h2>
                    {errors && <div className="loginform__errors">
                        {Object.keys(errors).map(key => (
                            <p className="loginform__error" key={key}>{errors[key][0]}</p>
                        ))}
                    </div>}
                    <div className="loginform__form">
                        <div className="loginform__form__inputWrapper">
                            <label className="loginform__form__inputWrapper__label" htmlFor="username">Gebruikersnaam</label>
                            <input ref={emailRef} className="loginform__form__inputWrapper__input" type="text" name="username" id="username" placeholder="Uw gebruikersnaam"/>
                        </div>
                        <div className="loginform__form__inputWrapper">
                            <label className="loginform__form__inputWrapper__label" htmlFor="password">Wachtwoord</label>
                            <input ref={pwdRef} className="loginform__form__inputWrapper__input" type="password" name="password" id="password" placeholder="Uw wachtwoord"/>
                        </div>
                        <div className="loginform__form__loginOptionsWrapper">
                                <input className="loginOptionsWrapper__inputWrapper__input loginOptionsWrapper__inputWrapper__input--staysignedin" type="checkbox" name="staysignedin" id="staysignedin"/>
                                <label className="loginOptionsWrapper__inputWrapper__label loginOptionsWrapper__inputWrapper__label--staysignedin" htmlFor="staysignedin">
                                    Ingelogd blijven
                                
                                    <span className="loginOptionsWrapper__inputWrapper__span">
                                        <ReactSVG src={Vinkje} alt="vinkje"  className="loginOptionsWrapper__inputWrapper__span--icon"/>
                                    </span>
                                    
                                </label>
                                <Link to={"/signup"} className="loginOptionsWrapper__forgotpwd">Heeft u nog geen account?</Link>
                        </div>
                        <button className="loginform__form__loginButton btn" onClick={onSubmit}>Inloggen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
