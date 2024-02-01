import "./HomePage.scss";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
import SliderBanner from "../components/SliderBanner/SliderBanner";

const HomePage = () =>{
    const { setUser, setProfileId, setToken, user } = useStateContext();

    const onLogout= () => {
        axiosClient.post('/logout')
            .then(() =>{
                setProfileId(null)
                setUser({})
                setToken(null)
            })
    }

    return (
        <div className="home">
            <SliderBanner />
            <button onClick={onLogout}>logout</button>
        </div>
    );
}

export default HomePage;