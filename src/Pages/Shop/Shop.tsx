import React from 'react';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';
import Products from '../../Components/Shop/Products/Products';
import ShopBanner from '../../Components/Shop/ShopBanner/ShopBanner';

const Shop: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <ShopBanner></ShopBanner>
            <Products></Products>
            <Footer></Footer>
        </>
    );
};

export default Shop;