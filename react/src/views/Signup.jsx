import {Link, Navigate} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import "./Signup.scss";

export default function Signup() {
    const {token} = useStateContext()
    if (token) {
        return  <Navigate to="/homepage" />
    }

  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className="centerlogin">
        <section className="signupform">
        <h2 className="signupform__h2">Signup for Free</h2>
        {errors &&
        <div className="signupform__errors">
            {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
            ))}
        </div>}
        <form className="signupform__form" onSubmit={onSubmit}>
        
            <div className="signupform__form__inputwrapper">
                <label className="signupform__form__inputwrapper__label" htmlFor="">Username</label>
                <input className="signupform__form__inputwrapper__input" ref={nameRef} type="text" placeholder="Full Name"/>
            </div>
            <div className="signupform__form__inputwrapper">
                <label className="signupform__form__inputwrapper__label" htmlFor=""> Email</label>
                <input className="signupform__form__inputwrapper__input" ref={emailRef} type="email" placeholder="Email Address"/>
            </div>
            <div className="signupform__form__inputwrapper">
                <label className="signupform__form__inputwrapper__label" htmlFor="">Password</label>
                <input className="signupform__form__inputwrapper__input" ref={passwordRef} type="password" placeholder="Password"/>
                <input className="signupform__form__inputwrapper__input" ref={passwordConfirmationRef} type="password" placeholder="Repeat Password"/>
            </div>
            <Link className="signupform__form__alreadyhaveaccount" to="/login">Already have an account? </Link>
            <button className="signupform__form__signupbutton">Signup</button>
        </form>
        </section>
    </div>
  )
}