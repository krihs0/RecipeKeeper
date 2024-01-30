import {createContext, useState, useContext} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    profileId: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setProfileId: () => {},
    setNotification: () => {},
})

export const ContextProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN')); //localStorage.getItem('ACCESS_TOKEN')
    const [profileId, _setProfileId] = useState(sessionStorage.getItem('PROFILE_ID'));

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

    const setProfileId = (profileId) =>{
        _setProfileId(profileId)
        if(profileId) {
            sessionStorage.setItem('PROFILE_ID', profileId);
        }else{
            sessionStorage.removeItem( 'PROFILE_ID');
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            profileId,
            notification,
            setProfileId,
            setNotification,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)