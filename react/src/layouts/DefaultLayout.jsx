import { Navigate, Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default DefaultLayout;