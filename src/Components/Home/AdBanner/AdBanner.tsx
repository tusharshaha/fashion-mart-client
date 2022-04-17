import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import adBanner from '../../../assets/images/banner10.png';
import adBanner2 from '../../../assets/images/banner11.png';

const AdBanner: React.FC = () => {
    return (
        <Container className="pb-5">
            <Row sm={1} lg={2} className="g-5">
                <Col data-aos="fade-right">
                    <div>
                        <div className='cat_img mb-4'>
                            <img src={adBanner} alt="" className="img-fluid" />
                        </div>
                        <h4>BIG SALE UP TO 39% OFF THIS SPORT SNEAKER.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndissesuscipit sagittis leo sit met condimentum estibulum issim Loremipsum dolor sit amet</p>
                        <Link to="/shop" className='text-uppercase fw-bold'>+ Shop Now</Link>
                    </div>
                </Col>
                <Col data-aos="fade-left">
                    <div>
                        <h4>POSITIVITY & OPTIMISM GARY VAYNE RCHUK O1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndissesuscipit sagittis leo sit met condimentum estibulum issim Loremipsum dolor sit amet</p>
                        <Link to="/shop" className='text-uppercase fw-bold'>+ Shop Now</Link>
                        <div className='cat_img mt-4'>
                            <img src={adBanner2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AdBanner;