import React from 'react';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';
import ShopBanner from '../../Components/Shop/ShopBanner/ShopBanner';
import CartTable from './CartTable';

const Cart: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <ShopBanner></ShopBanner>
            <CartTable></CartTable>
            <Footer></Footer>
        </>
    );
};

export default Cart;