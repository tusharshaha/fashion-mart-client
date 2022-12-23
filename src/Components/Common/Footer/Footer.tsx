import React, { useEffect, useState } from 'react';
import { GoMail } from "react-icons/go";
import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle, FaInstagram } from "react-icons/fa";
import payment from "../../../assets/images/payment.png";
import "./Footer.css";
import { Container } from 'react-bootstrap';
import { BiArrowToTop } from 'react-icons/bi';

const Footer: React.FC = () => {
    const [topClass, setTopClass] = useState("d-none")
    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const goTopHandler = () => {
        if (window.scrollY >= 500) {
            setTopClass("")
        } else {
            setTopClass("d-none");
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', goTopHandler);
        return ()=> window.removeEventListener('scroll', goTopHandler);
    },[])

    return (
        <div className='footer'>
            <Container>
                <h2 className='text-uppercase title_mark'>Latest Blogs</h2>
                <p className="text-gray">Get updates by subscribe our weekly newsletter</p>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <div className='sub_input'>
                        <input type="email" placeholder='Your Email Address' />
                        <GoMail className='mail_icon' />
                    </div>
                    <button className="subscribe_btn ms-3">Subscribe</button>
                </div>
                <div className="icon_container">
                    <div className="icon"><FaFacebookF /></div>
                    <div className="icon"><FaTwitter /></div>
                    <div className="icon"><FaYoutube /></div>
                    <div className="icon"><FaGoogle /></div>
                    <div className="icon"><FaInstagram /></div>
                </div>
                <div className="footer_bottom py-4">
                    <div className='footer_logo'>
                        <h3 className='logo'>Fashion Mart</h3>
                        <p className='text-gray mb-0'>Copyright &copy; 2021 Braga. All Rights Reserved.</p>
                    </div>
                    <img src={payment} alt="" />
                </div>
            </Container>
            {/* go to top button  */}
            <button onClick={handleGoTop} className={`${topClass} go_top`}>
                <BiArrowToTop />
            </button>
        </div>
    );
};

export default Footer;