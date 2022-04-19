import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useProducts } from '../../../hooks/custom_hooks';

const ShoeCategory = () => {
    const [active, setActive] = useState<string>("Tennis");
    const catBtns: string[] = ["Tennis", "Fitness", "Football"];
    const { products } = useProducts();
    const filteredProducts = products.filter(product => product.category === active.toLowerCase());
    return (
        <Container className="py-5">
            <div className='text-center'>
                <h2 className='text-uppercase title_mark'>Our Categories</h2>
                <div className='d-flex justify-content-center align-items-center g-4'>
                    {
                        catBtns.map((ele, i) => <button
                            key={i}
                            onClick={() => setActive(ele)}
                            className={`${active === ele ? "active_btn" : "disable_cat_btn"} ms-3`}
                        >
                            + {ele}
                        </button>)
                    }
                </div>
            </div>
            <Row xs={1} md={2} lg={4} className="g-3 mt-3">
                {
                    filteredProducts.map(product => <Col data-aos="zoom-in" key={product._id}>
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

export default ShoeCategory;