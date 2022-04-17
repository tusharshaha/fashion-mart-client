import React from 'react';
import AdBanner from '../../Components/Home/AdBanner/AdBanner';
import FeatureShoes from '../../Components/Home/FeatureShoes/FeatureShoes';
import Header from '../../Components/Home/Header/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import ShortCategory from '../../Components/Home/FeatureCategory/FeatureCategory';
import ShortDetails from '../../Components/Home/ShortDetails/ShortDetails';
import ShoeAd from '../../Components/Home/ShoeAd/ShoeAd';
import ShoeCategory from '../../Components/Home/ShoeCategory/ShoeCategory';
import ReviewBrands from '../../Components/Home/ReviewBrands/ReviewBrands';


const Home : React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <Header></Header>
            <ShortCategory></ShortCategory>
            <ShortDetails></ShortDetails>
            <FeatureShoes></FeatureShoes>
            <AdBanner></AdBanner>
            <ShoeAd></ShoeAd>
            <ShoeCategory></ShoeCategory>
            <ReviewBrands></ReviewBrands>
        </>
    );
};

export default Home;