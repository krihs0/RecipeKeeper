import "./HomePage.scss";
import { useStateContext } from "../contexts/ContextProvider";

const HomePage = () =>{
    const {user} = useStateContext();

    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    );
}

export default HomePage;