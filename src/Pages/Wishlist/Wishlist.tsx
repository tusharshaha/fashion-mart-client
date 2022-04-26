import React from 'react';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';
import ShopBanner from '../../Components/Shop/ShopBanner/ShopBanner';
import WishlistTable from './WishlistTable';

const Wishlist: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <ShopBanner></ShopBanner>
            <WishlistTable></WishlistTable>
            <Footer></Footer>
        </>
    );
};

export default Wishlist;