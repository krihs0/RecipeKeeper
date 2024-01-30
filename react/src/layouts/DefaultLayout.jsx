import { Navigate, Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import { useStateContext } from "../contexts/ContextProvider";

const DefaultLayout = () => {
    const { token, profileId } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!profileId) {
        return <Navigate to="/profile" />;
    }

    return <Outlet />;
}

export default DefaultLayout;