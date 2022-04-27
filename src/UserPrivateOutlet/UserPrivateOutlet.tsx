import React from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store"

const UserPrivateOutlet: React.FC = () => {
    const { token, email } = useSelector((state: RootState) => state.authUser.value);
    return token && email ? <Outlet /> : <Navigate to="/account" />
}

export default UserPrivateOutlet