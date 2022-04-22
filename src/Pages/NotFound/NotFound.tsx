import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
const NotFound: React.FC = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className='not-found'>
                <img src={`https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg`} alt="" />
                <Button onClick={() => navigate(-1)} variant='outline-danger'>Go Back</Button>
            </div>
        </Container>
    )
}
export default NotFound