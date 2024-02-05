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

    useEffect(() =>{
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
        axiosClient.get('/profiles')
            .then(({data}) =>{
                setProfiles(data)
            })
    } ,[])
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    if(profileId){
        return <Navigate to="/" />;
    }

    

    const onLogout= () => {
        axiosClient.post('/logout')
            .then(() =>{
                setUser({})
                setProfileId(null)
                setToken(null)
            })
    }

    const deleteProfile = (id) => {
        if(!window.confirm("Weet je zeker dat je dit profiel wilt verwijderen?")) return;
        axiosClient.delete(`/profiles/${id}`)
            .then(() =>{
                setProfiles(profiles.filter(profile => profile.id !== id))
            })
    }

    const createProfile = (name) => {
        axiosClient.post('/profiles', {name: name})
            .then(({data}) =>{
                console.log(data);
                setProfiles([...profiles, data])
                return true;
            })
    }
    return(
        <div className="profile-select">
            <button className="profile-select__logout" onClick={onLogout}>Uitloggen</button>
            <h1 className="profile-select__title">Selecteer een profiel</h1>
            <div className="profile-select__profiles">
                {profiles.map((profile, index) => (
                    <ProfileItem key={index} profile={profile} deleteProfile={deleteProfile} noDelete={profiles.length < 2}/>
                ))    
                }
                {profiles.length < 4 && <NewProfile createProfile={createProfile} />}
            </div>
        </div>
    )
}

export default ProfileSelect;