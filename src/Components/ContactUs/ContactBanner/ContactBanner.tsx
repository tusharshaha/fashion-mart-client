import React from 'react';
import Banner from "../../../assets/images/contact_us.jpeg";

const ContactBanner: React.FC = () => {
    return (
        <div style={{width: "100%"}}>
            <img src={Banner} className="w-100" alt="" />
        </div>
    );
};

export default ContactBanner;