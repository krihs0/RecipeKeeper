import { useRef, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import "./Menu.scss";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";

const Menu = () => {
    const { user, setProfileId, setUser, setToken } = useStateContext();
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef();

    const onLogout= () => {
        axiosClient.post('/logout')
            .then(() =>{
                setProfileId(null)
                setUser({})
                setToken(null)
            })
    }


    window.addEventListener('click', ({target})=> {
        if(!navRef.current)return;
        if(!navRef.current.innerHTML.includes(target.innerHTML)){
            setNavOpen(false);
        }
    });

    return(
        <>
        <div className="menu">
            <h3 className={`menu__username ${navOpen && "menu__username--open"}`}>{user.name}</h3>
            <div onClick={()=>setNavOpen(!navOpen)} className="menu__user">
                <figure className="menu__user__figure">

                </figure>
            </div>
        </div>
        <div ref={navRef} className={`nav ${navOpen && "nav--open"}`}>
            <Link className="nav__item">
                <span className="material-icons">account_circle</span>
                Account
            </Link>
            <Link className="nav__item">
                <span className="material-icons">favorite</span>
                Favorieten
            </Link>
            <Link className="nav__item">
                <span className="material-icons">add_circle</span>
                Nieuw Recept
            </Link>
            <Link className="nav__item">
                <span className="material-icons">settings</span>
                Instellingen
            </Link>
            <button onClick={onLogout} className="nav__item nav__item--noborder">
                <span className="material-icons">logout</span>
                Uitloggen
            </button>
        </div>
        
        </>
    )
}

export default Menu;