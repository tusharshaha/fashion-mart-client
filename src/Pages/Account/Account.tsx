import React from 'react';
import LoginRegister from '../../Components/Account/LoginRegister/LoginRegister';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';

const Account: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <LoginRegister></LoginRegister>
            <Footer></Footer>
        </>
    );
};

export default Account;