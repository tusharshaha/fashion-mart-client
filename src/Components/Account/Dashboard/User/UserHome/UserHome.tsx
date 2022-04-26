import React from 'react';
import { Container } from 'react-bootstrap';

const UserHome: React.FC = () => {
    return (
        <Container>
            <h4 className="mb-4">Dashboard</h4>
            <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
        </Container>
    );
};

export default UserHome;