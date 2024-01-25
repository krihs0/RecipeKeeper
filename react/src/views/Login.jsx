import "./Login.scss";
import {useState, useEffect, useRef} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import { Link, Navigate } from "react-router-dom";
export default function Login() {
    const { token, setUser, setToken} = useStateContext()
    if (token) {
        return  <Navigate to="/" />
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
        <div className="centerlogin">
        <section className="loginform">
        <h2 className="loginform__h2">Log In</h2>
        {errors && <div className="loginform__errors">
            {Object.keys(errors).map(key => (
                <p className="loginform__error" key={key}>{errors[key][0]}</p>
            ))
            }
        </div>}
        <form className="loginform__form" onSubmit={onSubmit} >
            <div className="loginform__form__inputwrapper">
                <label className="loginform__form__inputwrapper__label" htmlFor="username">Username</label>
                <input ref={emailRef} className="loginform__form__inputwrapper__input input" type="text" name="username" id="username" placeholder="Uw gebruikersnaam"/>
            </div>
            <div className="loginform__form__inputwrapper">
                <label className="loginform__form__inputwrapper__label" htmlFor="password">Password</label>
                <input ref={pwdRef} className="loginform__form__inputwrapper__input input" type="password" name="password" id="password" placeholder="Uw wachtwoord"/>
            </div>
            {/* <div className="loginform__form__loginOptionsWrapper">
                <div className="loginOptionsWrapper__inputWrapper">
                    <input className="loginOptionsWrapper__inputWrapper__input" type="checkbox" name="staysignedin" id="staysignedin"/>
                    <label className="loginOptionsWrapper__inputWrapper__label" htmlFor="staysignedin">Ingelogd blijven</label>
                </div>
            </div> */}
            <Link to={"/signup"} className="loginform__form__noaccountyet">Don't have an account yet?</Link>
            <button className="loginform__form__loginbutton" onClick={onSubmit}>Inloggen</button>
        </form>
        </section>
        </div>
    )
}
