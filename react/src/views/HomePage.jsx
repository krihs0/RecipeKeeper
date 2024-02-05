import "./HomePage.scss";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
import SliderBanner from "../components/SliderBanner/SliderBanner";
import Menu from "../components/Menu/Menu";

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
            <Menu />
            <SliderBanner />
        </div>
    );
}

export default HomePage;