import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "./ProfileSelect.scss";
import axiosClient from "../axios-client";
import { useEffect, useState } from "react";
import ProfileItem from "../components/ProfileItem/ProfileItem";
import NewProfile from "../components/NewProfile/NewProfile";

const ProfileSelect = () => {
    const {token, profileId, setProfileId, setUser, setToken} = useStateContext();
    const [profiles, setProfiles] = useState([]);

    if (!token) {
        return <Navigate to="/login" />;
    }

    if(profileId){
        return <Navigate to="/" />;
    }

    useEffect(() =>{
        axiosClient.get('/profiles')
            .then(({data}) =>{
                setProfiles(data)
            })
    } ,[])

    const onLogout= () => {
        axiosClient.post('/logout')
            .then(() =>{
                setUser({})
                setProfileId(null)
                setToken(null)
            })
    }

    return(
        <div className="profile-select">
            <button className="profile-select__logout" onClick={onLogout}>Logout</button>
            <h1 className="profile-select__title">Selecteer een profiel</h1>
            <div className="profile-select__profiles">
                {profiles.map((profile, index) => (
                    <ProfileItem key={index} profile={profile} />
                ))    
                }
                <NewProfile />
            </div>
        </div>
    )
}

export default ProfileSelect;