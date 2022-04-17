import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner12 from "../../../assets/images/banner12.png";
import banner13 from "../../../assets/images/banner13.png";
import banner14 from "../../../assets/images/banner14.png";

interface banner {
    img: string,
    timer: string
}

const ShoeAd: React.FC = () => {
    const banners: banner[] = [
        { img: banner12, timer: "300" },
        { img: banner13,  timer: "500"},
        { img: banner14, timer: "700" }
    ];
    const navigate = useNavigate();
    return (
        <Container className="py-5">
            <Row sm={1} md={1} lg={3} className="g-3">
                {
                    banners.map((ele, i) => <Col key={i}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay={ele.timer}
                            onClick={() => navigate("/shop")}
                            className='cat_img pointer'
                        >
                            <img src={ele.img} alt="" />
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ShoeAd;