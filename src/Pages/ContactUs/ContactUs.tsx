import React from 'react';
import Footer from '../../Components/Common/Footer/Footer';
import NavBar from '../../Components/Common/NavBar/NavBar';
import ContactBanner from '../../Components/ContactUs/ContactBanner/ContactBanner';
import ContactForm from '../../Components/ContactUs/ContactForm/ContactForm';
import ContactMap from '../../Components/ContactUs/ContactMap/ContactMap';

const ContactUs: React.FC = () => {
    return (
        <>
            <NavBar></NavBar>
            <ContactBanner></ContactBanner>
            <ContactMap></ContactMap>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;