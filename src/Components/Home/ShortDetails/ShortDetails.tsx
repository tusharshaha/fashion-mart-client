import React, { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineRocket, AiOutlineGift } from 'react-icons/ai';
import { BsHeadset, BsPiggyBank } from 'react-icons/bs';
import './ShortDetails.css';

interface details {
    icon: ReactElement,
    title: string,
    subTitle: string
}
const ShortDetails: React.FC = () => {
    const stDetails: details[] = [
        { icon: <AiOutlineRocket />, title: 'FREE DELIVERY', subTitle: 'Free shipping on all order' },
        { icon: <BsHeadset />, title: 'ONLINE SUPPORT 24/7', subTitle: 'Support online 24 hours a day' },
        { icon: <BsPiggyBank />, title: 'MONEY RETURN', subTitle: 'Back guarantee under 7 days' },
        { icon: <AiOutlineGift />, title: 'MEMBER DISCOUNT', subTitle: 'Onevery order over $120.00' }
    ]
    return (
        <div className='my-5 border'>
            <Container className='py-5'>
                <Row sm={2} lg={4} className="g-4 mx-auto">
                    {
                        stDetails.map((dt, i) => <Col key={i}>
                            <div className='d-flex'>
                                <div className="details_icon">
                                    {dt.icon}
                                </div>
                                <div>
                                    <p className='fw-bold mb-1'>{dt.title}</p>
                                    <p className='mb-0'>{dt.subTitle}</p>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ShortDetails;