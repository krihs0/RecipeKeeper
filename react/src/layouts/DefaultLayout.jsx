import { Navigate, Outlet } from "react-router-dom";
import "./DefaultLayout.scss";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

const DefaultLayout = () => {
    const { token, profileId, setUser } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!profileId) {
        return <Navigate to="/profile" />;
    }

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    });

    return <Outlet />;
}

export default DefaultLayout;