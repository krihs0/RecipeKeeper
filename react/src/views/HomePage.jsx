import "./HomePage.scss";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
import SliderBanner from "../components/SliderBanner/SliderBanner";
import Menu from "../components/Menu/Menu";
import FavoritesSlider from "../components/FavoritesSlider/FavoritesSlider";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import contentImg from "../assets/annie-spratt-AwRaEOeM8B0-unsplash.jpg";

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
            <FavoritesSlider />
            <ContentBlock title="Iets nieuws proberen? " text="Neem een kijkje in onze uitgebreide bibliotheek met honderden publieke recepten. Of je nu een doorgewinterde chef-kok bent of net begint met koken, er is voor elk wat wils. Ontdek nieuwe smaken, deel jouw favoriete recepten en laat je culinaire creativiteit de vrije loop." img={contentImg} btnText="Bekijk recepten" btnLink="/recipes" />
        </div>
    );
}

export default HomePage;