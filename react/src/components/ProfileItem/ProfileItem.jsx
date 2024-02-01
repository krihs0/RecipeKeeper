import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import "./ProfileItem.scss";

const ProfileItem = ({profile, deleteProfile, noDelete}) => {
    const {setProfileId} = useStateContext();
    const [editMode, setEditMode] = useState(false);

    const onConfirm = () => {
        setEditMode(false);
    }

    return(
        <div onClick={()=>setProfileId(profile.id)} className="profile-item">
            <figure className="profile-item__figure">
                {editMode && !noDelete && <span onClick={(ev)=>{ev.stopPropagation();deleteProfile(profile.id)}} className="material-symbols-outlined profile-item__figure__delete">delete</span>}
                {!editMode && <span onClick={(ev)=>{ev.stopPropagation();setEditMode(true)}} className="material-symbols-outlined profile-item__figure__edit">edit</span>}
                {editMode && <span onClick={(ev)=>{ev.stopPropagation();onConfirm()}} className="material-symbols-outlined profile-item__figure__confirm">check</span>}
            </figure>
            {!editMode && <h2 className="profile-item__name">{profile.name}</h2>}
            {editMode && <input type="text" defaultValue={profile.name} />}
        </div>
    )
}

export default ProfileItem;