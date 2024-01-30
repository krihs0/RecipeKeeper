import {Link, Navigate} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import background from "../assets/beechmore-books-0S2rRstB_9M-unsplash.jpg"
import "./Signup.scss";

export default function Signup() {
    const {token, setUser, setToken} = useStateContext()
    if (token) {
        return  <Navigate to="/profile" />
    }

  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
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
        setUser(data.user);
        setToken(data.token);
        axiosClient.post('/profiles', {name: data.user.name, user_id: data.user.id})
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className="signup">
        <div className="leftLoginPane" style={{backgroundImage: `url(${background})`}}>
            <div className="textWrapper">
                    <div className="textWrapper__div">
                    <h2 className="textWrapper__div__h2">RecipeKeeper</h2>
                    <h1 className="textWrapper__div__h1">Altijd en overal jouw recepten inzichtelijk.</h1>
                </div>
            </div>
        </div>
        <div className="signup__rightpane">
        <div className="signupform">
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
        </div>
        </div>
    </div>
  )
}