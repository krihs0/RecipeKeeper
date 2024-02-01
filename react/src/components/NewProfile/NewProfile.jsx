import { useRef, useState } from "react";
import "./NewProfile.scss";

const NewProfile = ({createProfile}) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const profileNameRef = useRef();

    const onCreateProfile = () => {
        createProfile(profileNameRef.current.value)
        setPopupOpen(false);
    }

    return(
        <>
        {!popupOpen && <div onClick={()=>setPopupOpen(true)} className="profile-item profile-item">
            <figure className="profile-item__figure profile-item__figure--new"></figure>
        </div>}
        {popupOpen && <div className="profile-item profile-item">
            <figure className="profile-item__figure">
                <span onClick={onCreateProfile} className="material-symbols-outlined profile-item__figure__confirm">done</span>
                <span onClick={()=>setPopupOpen(false)} className="material-symbols-outlined profile-item__figure__delete">cancel</span>
            </figure>
            <div className="profile-item__bottom">
                <input ref={profileNameRef} type="text" />
            </div>
        </div>}
        </>
    )
}

export default NewProfile;