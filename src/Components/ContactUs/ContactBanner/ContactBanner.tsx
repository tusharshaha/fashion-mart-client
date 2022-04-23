import React from 'react';
import Banner from "../../../assets/images/contact_us.jpeg";

const ContactBanner: React.FC = () => {
    return (
        <div className='banner'>
            <img src={Banner} alt="" />
        </div>
    );
};

export default ContactBanner;