import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaOpencart, FaRegUserCircle } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import './NavBar.css';

const NavBar: React.FC = () => {
    // change navbar color when scroll
    const [color, setColor] = useState<boolean>(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);
    return (
        <div style={{
            backgroundColor: color ? '#ffffffe6' : 'transparent',
            padding: color ? "10px 0" : "20px 0",
            color: color ? "black" : "white",
            transition: 'all 0.4s'
        }} className='navbar'>
            <Container>
                <div className="nav_container">
                    <div className='nav_menu'>
                        <h3 className='logo'>Fashion Mart</h3>
                        <ul className='nav_list'>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/home">Home</Link>
                            </li>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/contactUs">Contact Us</Link>
                            </li>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/home">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='nav_icons'>
                            <li><BsSearch /></li>
                            <li className="cart">
                                <FaOpencart />
                                <span className="cart_count">0</span>
                            </li>
                            <li><FaRegUserCircle /></li>
                        </ul>
                    </div>
                    <Button variant="secondary" className="toggle_btn"><FiMenu /></Button>
                </div>
            </Container >
        </div >
    );
};

export default NavBar;