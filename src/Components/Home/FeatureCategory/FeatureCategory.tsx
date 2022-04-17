import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cat1 from '../../../assets/images/category5.png';
import cat2 from '../../../assets/images/category6.png';
import cat3 from '../../../assets/images/category7.png';
import cat4 from '../../../assets/images/category8.png';
import './FeatureCategory.css';

interface category {
    img: string,
    title: string
}

const ShortCategory: React.FC = () => {
    const categories: category[] = [
        {img: cat1, title: "Run Shoes"},
        {img: cat2, title: "Tennis Shoes"},
        {img: cat3, title: "Fitness Shoes"},
        {img: cat4, title: "Football Shoes"}
    ]
    return (
        <Container className="py-5">
            <Row xs={1} md={2} lg={4} className='g-3'>
                {
                    categories.map((cat, i) => <Col key={i}>
                        <div className='cat_img'>
                            <img src={cat.img} alt="category" />
                        </div>
                        <h4 className="text-uppercase fw-light mt-3">{cat.title}</h4>
                        <div className='d-flex align-items-center justify-content-between fw-light'>
                            <span>13 Products</span>
                            <Link to="/shop" className='text-dark'>+ Shop Collections</Link>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ShortCategory;