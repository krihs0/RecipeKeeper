import {createContext, useState, useContext} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
})

export const ContextProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN')); //localStorage.getItem('ACCESS_TOKEN')
    const [profile, _setProfile] = useState(localStorage.getItem('PROFILE'));

    const setNotification = (message) =>{
        _setNotification(message);
        setTimeout(()=>{
            _setNotification('');
        }, 5000)
    }

    const setToken = (token) =>{
        _setToken(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem( 'ACCESS_TOKEN');
        }
    }

    const setProfile = (token) =>{
        _setProfile(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem( 'ACCESS_TOKEN');
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            profile,
            setToken,
            setProfile,
            notification,
            setNotification,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
