import "./HomePage.scss";
import { useStateContext } from "../contexts/ContextProvider";

const HomePage = () =>{
    const { setUser, setProfileId, setToken } = useStateContext();

    const onLogout= () => {
        axiosClient.post('/logout')
            .then(() =>{
                setUser({})
                setProfileId(null)
                setToken(null)
            })
    }

    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={onLogout}>logout</button>
        </div>
    );
}

export default HomePage;