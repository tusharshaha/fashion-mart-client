import React from 'react';
import {Carousel} from 'react-bootstrap'
import './Header.css';
const Header: React.FC = () => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <div className='slider1'>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='slider2'>

                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;