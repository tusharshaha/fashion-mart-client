import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginRegister from '../../Components/Account/LoginRegister/LoginRegister';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';
import { RootState } from '../../redux/store';

const Account: React.FC = () => {
    const { token } = useSelector((state: RootState) => state.authUser.value);
    return (
        <>
            <NavBar></NavBar>
            {!token ?
                <LoginRegister></LoginRegister>
                :
                <Navigate to="/dashboard" />
            }
            <Footer></Footer>
        </>
    );
};

export default Account;