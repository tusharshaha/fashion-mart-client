import React from 'react';
import { Carousel, Container } from 'react-bootstrap'
import './Header.css';
const Header: React.FC = () => {
    return (
        <Carousel interval={null} id='top'>
            <Carousel.Item>
                <div className='slider1'>
                    <Container>
                        <div className='banner_content'>
                            <p data-aos='fade-right' data-aos-delay='300'>Big sale up to 20% off </p>
                            <h1 data-aos='fade-right' data-aos-delay='400' className='text-uppercase fw-bold'>This Black</h1>
                            <p data-aos='fade-right' data-aos-delay='500' className='text-uppercase fw-light mt-4'>An Exclusive Selection of this season's Trends.</p>
                            <p data-aos='fade-right' data-aos-delay='700' className='text-uppercase fw-bold'>Exclusively Online</p>
                            <p></p>
                            <button data-aos='fade-right' data-aos-delay='500' className='shop_btn mt-5'>Shop Now</button>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='slider2'>
                    <Container>
                        <div className='banner_content'>
                            <p>Big sale up to 20% off </p>
                            <h1 className='text-uppercase fw-bold'>This Black</h1>
                            <p className='text-uppercase fw-light mt-4'>An Exclusive Selection of this season's Trends.</p>
                            <p className='text-uppercase fw-bold'>Exclusively Online</p>
                            <p></p>
                            <button className='shop_btn mt-5'>Shop Now</button>
                        </div>
                    </Container>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;