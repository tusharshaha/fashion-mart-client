import React from 'react';
import banner from "../../../assets/images/shopBanner.png";

const ShopBanner: React.FC = () => {
    return (
        <div className='banner mb-5'>
            <img src={banner} alt="" />
        </div>
    );
};

export default ShopBanner;