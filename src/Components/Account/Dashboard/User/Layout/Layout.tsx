import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <Container>
            <div>
                <div className='dashboard_btn'>
                    <button>Dashboard</button>
                    <button>Orders</button>
                    <button>Downloads</button>
                    <button>Address</button>
                    <button>Account Details</button>
                    <button>Logout</button>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
};

export default Layout;