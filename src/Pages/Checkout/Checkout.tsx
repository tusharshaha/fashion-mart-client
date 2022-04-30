import React from 'react';
import CheckoutForm from '../../Components/Checkout/CheckoutForm/CheckoutForm';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';
import ShopBanner from '../../Components/Shop/ShopBanner/ShopBanner';

const Checkout: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <ShopBanner></ShopBanner>
            <CheckoutForm></CheckoutForm>
            <Footer></Footer>
        </>
    );
};

export default Checkout;