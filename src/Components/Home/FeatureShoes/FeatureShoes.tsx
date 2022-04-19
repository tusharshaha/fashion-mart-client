import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/custom_hooks';
import "./FeaturedShoes.css";

const FeaturedProduct: React.FC = () => {
    const { products } = useProducts();
    return (
        <Container className="py-5">
            <div className='text-center'>
                <h2 className='text-uppercase title_mark'>Featured Product</h2>
                <Link to="/shop" className='
                    text-uppercase
                    fw-bold
                    text-dark
                '>Shop All Collection</Link>
            </div>
            <Row xm={1} md={2} lg={4} className="g-3 mt-3">
                {
                    products.slice(0, 4).map(product => <Col data-aos="fade-in" key={product._id}>
                        <div className="mb-3 product_img">
                            <img src={product.img} alt="" />
                        </div>
                        <h5>{product.name}</h5>
                        <p className="text-capitalize">
                            <em className='me-2'><b>Category:</b></em>
                            {product.category}
                        </p>
                        <div style={{fontSize: "18px"}} className='fw-bold text-danger'>
                            <span><del>&#36;{product.prevPrice}.00</del></span>
                            <span className="ms-3">&#36;{product.curPrice}.00</span>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default FeaturedProduct;