import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about1 from "../../../assets/images/about1.png";

const AboutStore: React.FC = () => {
    return (
        <Container className="my-5">
            <Row xs={1} lg={2} className="g-4 d-flex align-items-center">
                <Col data-aos="fade-right">
                    <h2 className='fw-bold'>About Our Fashion Mart</h2>
                    <h5 className='my-4'>We believe that every project existing in digital world is a result of an idea and every idea has a cause.</h5>
                    <p className='text-secondary'>For this reason, our each design serves an idea. Our strength in design is reflected by our name, our care for details. Our specialist won't be afraid to go extra miles just to approach near perfection. We don't require everything to be perfect, but we need them to be perfectly cared for. That's a reason why we are willing to give contributions at best. Not a single detail is missed out under Billey's professional eyes.The amount of dedication and effort equals to the level of passion and by.</p>
                </Col>
                <Col data-aos="fade-left">
                    <div className='w-100'>
                        <img src={about1} className="img-fluid w-100" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutStore;