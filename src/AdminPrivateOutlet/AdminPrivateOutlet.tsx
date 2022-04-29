import React from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store"

const AdminPrivateOutlet: React.FC = () => {
    const { token, email, role } = useSelector((state: RootState) => state.authUser.value);
    return token && email && role === "admin" ? <Outlet /> : <Navigate to="/account" />
}

export default AdminPrivateOutlet