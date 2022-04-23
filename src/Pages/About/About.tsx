import React from 'react';
import AboutBanner from '../../Components/About/AboutBanner/AboutBanner';
import AboutPolicy from '../../Components/About/AboutPolicy/AboutPolicy';
import AboutService from '../../Components/About/AboutService/AboutService';
import AboutStore from '../../Components/About/AboutStore/AboutStore';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';

const About: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <AboutBanner></AboutBanner>
            <AboutStore></AboutStore>
            <AboutService></AboutService>
            <AboutPolicy></AboutPolicy>
            <Footer></Footer>
        </>
    );
};

export default About;