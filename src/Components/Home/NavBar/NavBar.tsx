import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { FaOpencart, FaRegUserCircle } from 'react-icons/fa';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className='navbar'>
            <Container>
                <div className="nav_container">
                    <div className='nav_menu'>
                        <h3>Fashion Mart</h3>
                        <ul className='nav_list'>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/contactUs">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/home">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='nav_icons'>
                            <li><BsSearch /></li>
                            <li><FaOpencart /></li>
                            <li><FaRegUserCircle /></li>
                        </ul>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default NavBar;