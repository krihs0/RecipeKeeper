import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "./ProfileSelect.scss";
import axiosClient from "../axios-client";
import { useEffect, useState } from "react";

const ProfileSelect = () => {
    const {token, setUser, setToken} = useStateContext();
    const [profiles, setProfiles] = useState([]);

    if (!token) {
        return <Navigate to="/login" />;
    }

    useEffect(() =>{
        axiosClient.get('/profiles')
            .then(({data}) =>{
                setProfiles(data)
            })
    } ,[])

    const onLogout = () =>{
        axiosClient.post('/logout')
            .then(() =>{
                setUser({})
                setToken(null)
            })
    }



    return(
        <div className="profile-select">
            <button className="profile-select__logout" onClick={onLogout}>Logout</button>
            <h1 className="profile-select__title">Selecteer een profiel</h1>
            <div className="profile-select__profiles">
                {profiles.map(profile => (
                    <div className="profile-select__profiles__profile" key={profile.id}>
                        <figure></figure>
                        <h2 className="profile-select__profiles__profile__name">{profile.name}</h2>
                    </div>
                ))    
                }
                <div className="profile-select__profiles__profile">

                </div>
            </div>
        </div>
    )
}

export default ProfileSelect;