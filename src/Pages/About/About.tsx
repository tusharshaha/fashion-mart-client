import React from 'react';
import AboutBanner from '../../Components/About/AboutBanner';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';

const About: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <AboutBanner></AboutBanner>
            <Footer></Footer>
        </>
    );
};

export default About;