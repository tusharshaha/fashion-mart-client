import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../../redux/store';

const UserHome: React.FC = () => {
    const { userName } = useSelector((state: RootState) => state.authUser.value);
    return (
        <div>
            <h4 className="mb-4">Dashboard</h4>
            <p className='mb-2 text-capitalize'>Hi {userName},</p>
            <p>From your account dashboard, You can easily check & view your recent <Link to="/dashboard/orders" className='text-danger'>orders,</Link> manage your shipping <Link to="/dashboard/address" className='text-danger'>address</Link> and edit your <Link to="/dashboard/account-details" className='text-danger'>account</Link>.</p>
        </div>
    );
};

export default UserHome;