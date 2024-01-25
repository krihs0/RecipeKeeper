import "./HomePage.scss";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";

const HomePage = () =>{
    const {user, setUser, setToken} = useStateContext();

    const onLogout = () =>{
        axiosClient.post('/logout')
            .then(() =>{
                setUser({})
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