import React from 'react';
import AdBanner from '../../Components/Home/AdBanner/AdBanner';
import FeatureShoes from '../../Components/Home/FeatureShoes/FeatureShoes';
import Header from '../../Components/Home/Header/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import ShortCategory from '../../Components/Home/ShortCategory/ShortCategory';
import ShortDetails from '../../Components/Home/ShortDetails/ShortDetails';

const Home : React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <ShortCategory></ShortCategory>
            <ShortDetails></ShortDetails>
            <FeatureShoes></FeatureShoes>
            <AdBanner></AdBanner>
        </>
    );
};

export default Home;