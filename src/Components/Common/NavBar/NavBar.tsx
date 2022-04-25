import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CgClipboard } from 'react-icons/cg';
import { FaOpencart, FaRegUserCircle } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";
import './NavBar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const NavBar: React.FC = () => {
    const { totalCount } = useSelector((state: RootState) => state.cart);
    // change navbar color when scroll
    const [color, setColor] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false)
        }
    }
    const navbarStyle = {
        backgroundColor: color ? '#ffffffe6' : 'transparent',
        padding: color ? "10px 0" : "20px 0",
        color: color ? "black" : "white",
        transition: 'all 0.4s'
    }
    const navMenu = {
        backgroundColor: !toggle ? 'transparent' : toggle && color ? "#ffffffe6" : "#0000ff3b",
        color: color ? "black" : "white",
    }
    window.addEventListener('scroll', changeColor);
    return (
        <div style={navbarStyle} className='navbar'>
            <Container>
                <div className="nav_container">
                    <div className='nav_menu'>
                        <h3 className='logo'>Fashion Mart</h3>
                        <ul style={navMenu} className={`${toggle ? "toggle_nav_list" : "nav_list"}`}>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/home">Home</Link>
                            </li>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link style={{ color: color ? "black" : "white" }} to="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <ul style={navMenu} className={`${toggle ? "toggle_nav_icons" : "nav_icons"}`}>
                        <li>
                            <Link style={{ color: color ? "black" : "white" }} to="/wishlist">
                                <CgClipboard />
                            </Link>
                        </li>
                        <li >
                            <Link className="cart" style={{ color: color ? "black" : "white" }} to="/cart">
                                <FaOpencart />
                                <span className="cart_count">{totalCount}</span>
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color: color ? "black" : "white" }} to="/account">
                                <FaRegUserCircle />
                            </Link>
                        </li>
                    </ul>

                    {/* toggle button for navbar  */}
                    <Button
                        variant="secondary"
                        className="toggle_btn"
                        onClick={() => setToggle(!toggle)}
                    >
                        <FiMenu />
                    </Button>
                </div>
            </Container >
        </div >
    );
};

export default NavBar;