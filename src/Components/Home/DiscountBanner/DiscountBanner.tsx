import React from 'react';
import { Container } from 'react-bootstrap';
import "./DiscountBanner.css";

const DiscountBanner: React.FC = () => {
    return (
        <div className='banner_wrapper mb-5'>
            <div className='discount_banner'>
                <Container>
                    <div className='banner_text'>
                        <h4 data-aos='fade-right' data-aos-delay='300' className='text-danger'>Minimalist Spring Collection</h4>
                        <h1 data-aos='fade-right' data-aos-delay='400' style={{fontSize:"50px"}} className='fw-bold mb-4'>UP TO 40% OFF</h1>
                        <p data-aos='fade-right' data-aos-delay='500' className='mb-2'>AN EXCLUSIVE SELECTION OF THIS SEASON’S TRENDS.</p>
                        <p data-aos='fade-right' data-aos-delay='700' className="fw-bold">EXCLUSIVELY ONLINE!</p>
                        <button data-aos='fade-right' data-aos-delay='500' className='shop_btn2 mt-4'>Shop Now <span>+</span></button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default DiscountBanner;