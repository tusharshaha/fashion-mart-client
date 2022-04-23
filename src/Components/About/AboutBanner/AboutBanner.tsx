import React from 'react';
import banner from "../../../assets/images/aboutBanner.jpg";

const AboutBanner: React.FC = () => {
    return (
        <div style={{height: "450px", marginBottom: "30px"}}>
            <img src={banner} className="w-100 h-100" alt="" />
        </div>
    );
};

export default AboutBanner;