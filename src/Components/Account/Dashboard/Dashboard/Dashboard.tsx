import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import account_banner from '../../../../assets/images/account_banner.jpg';
import { removeUser } from '../../../../redux/features/userAuthSlice';
import { AppDispatch } from '../../../../redux/store';
import Footer from '../../../Common/Footer/Footer';
import NavBar from '../../../Common/NavBar/NavBar';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            <NavBar></NavBar>
            <div className='banner'>
                <img src={account_banner} alt="" />
            </div>
            <Container className='py-5'>
                <div className='dash_layout'>
                    <div className='dashboard_btns'>
                        <NavLink
                            to="/dashboard"
                            className={({isActive}) => (isActive ? 'bg-danger' : '')}
                        >Dashboard</NavLink>
                        <NavLink
                            to="/dashboard/orders"
                            className={({isActive}) => (isActive ? 'bg-danger' : '')}
                        >Orders</NavLink>
                        <NavLink
                            to="/dashboard/downloads"
                            className={({isActive}) => (isActive ? 'bg-danger' : '')}
                        >Downloads</NavLink>
                        <NavLink
                            to="/dashboard/address"
                            className={({isActive}) => (isActive ? 'bg-danger' : '')}
                        >Address</NavLink>
                        <NavLink
                            to="/dashboard/account-details"
                            className={({isActive}) => (isActive ? 'bg-danger' : '')}
                        >Account Details</NavLink>
                        <button onClick={() => dispatch(removeUser())}>Logout</button>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;