import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineDesignServices, MdAddTask, MdOutlineHeadsetMic } from "react-icons/md";
import "./AboutService.css";

interface service {
    icon: ReactElement,
    title: string
}
const AboutService: React.FC = () => {
    const services: service[] = [
        { icon: <MdOutlineDesignServices />, title: "Creative Design" },
        { icon: <MdAddTask />, title: "100% Money Back Guarantee" },
        { icon: <MdOutlineHeadsetMic />, title: "Online Support 24/7" }
    ];
    return (
        <div className='about_service'>
            <Container>
                <Row xs={1} lg={3} className="g-3">
                    {
                        services.map((service, i) => <Col key={i}>
                            <div className="service_icon">
                                {service.icon}
                            </div>
                            <h4 className='my-3'>{service.title}</h4>
                            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet</p>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AboutService;