import { Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import "./ProfileItem.scss";

const ProfileItem = ({profile}) => {
    const {setProfileId} = useStateContext();

    const onProfileSelect = () => {
        setProfileId(profile.id);
    }

    return(
        <div onClick={onProfileSelect} className="profile-item">
            <figure className="profile-item__figure">
                
            </figure>
            <h2 className="profile-item__name">{profile.name}</h2>
        </div>
    )
}

export default ProfileItem;