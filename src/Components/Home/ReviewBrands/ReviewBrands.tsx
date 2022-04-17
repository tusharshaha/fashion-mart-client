import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import profile1 from "../../../assets/images/testimonial1.png";
import profile2 from "../../../assets/images/testimonial2.png";
import profile3 from "../../../assets/images/testimonial3.png";
import brand1 from "../../../assets/images/brand8.png";
import brand2 from "../../../assets/images/brand9.png";
import brand3 from "../../../assets/images/brand10.png";
import brand4 from "../../../assets/images/brand11.png";
import brand5 from "../../../assets/images/brand12.png";
import brand6 from "../../../assets/images/brand13.png";
import brand7 from "../../../assets/images/brand14.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ReviewBrands.css"
SwiperCore.use([Pagination, Navigation]);

interface review {
    img: string,
    name: string
}
const ReviewBrands: React.FC = () => {
    const reviews: review[] = [
        { img: profile1, name: "JENIFER BROWN" },
        { img: profile2, name: "KATHY YONG" },
        { img: profile3, name: "JOHN SULLIVAN" }
    ]
    const brands: string[] = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand3, brand5]
    return (
        <div style={{ backgroundColor: "#f7f7f7" }} className='py-5'>
            <Container className='py-3'>
                <Row xs={1} md={1} lg={2} className="g-4 d-flex align-items-center">
                    <Col>
                        <Swiper slidesPerView={1} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} pagination={{
                            "clickable": true
                        }} navigation={true}>
                            {
                                reviews.map((ele, i) => <SwiperSlide key={i}>
                                    <div className='d-flex'>
                                        <div className='me-4'>
                                            <img style={{ width: "100px" }} src={ele.img} alt="" />
                                        </div>
                                        <div>
                                            <p className="text-danger mb-0 fw-bold">{ele.name}</p>
                                            <p><em>Customer</em></p>
                                            <p style={{ fontSize: "18px" }}>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </Col>
                    <Col>
                        <Row xs={3} className="g-5">
                            {brands.map((ele, i) => <Col key={i}>
                                <div>
                                    <img src={ele} alt="" />
                                </div>
                            </Col>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewBrands;