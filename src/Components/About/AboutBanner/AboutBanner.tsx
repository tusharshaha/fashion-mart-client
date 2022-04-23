import React from 'react';
import banner from "../../../assets/images/aboutBanner.jpg";

const AboutBanner: React.FC = () => {
    return (
        <div style={{ marginBottom: "30px" }} className="banner">
            <img src={banner} alt="" />
        </div>
    );
};

export default AboutBanner;