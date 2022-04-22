import React from 'react';
import banner from "../../../assets/images/shopBanner.png";

const ShopBanner: React.FC = () => {
    return (
        <div style={{height: "450px"}} className='w-100 mb-5'>
            <img src={banner} alt="" className='w-100 h-100' />
        </div>
    );
};

export default ShopBanner;