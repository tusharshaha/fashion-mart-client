import React from 'react';
import Header from '../../Components/Home/Header/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import ShortCategory from '../../Components/Home/ShortCategory/ShortCategory';

const Home : React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <ShortCategory></ShortCategory>
        </>
    );
};

export default Home;