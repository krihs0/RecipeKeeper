import { useState } from "react";
import "./NewProfile.scss";

const NewProfile = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    return(
        <>
        <div onClick={()=>setPopupOpen(true)} className="profile-item profile-item">
            <figure className="profile-item__figure profile-item__figure--new"></figure>
        </div>
        {popupOpen && <div className="profile-item profile-item">
            <figure className="profile-item__figure"></figure>
            <div>
                x
                <input type="text" />
                +
            </div>
        </div>}
        </>
    )
}

export default NewProfile;