import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShoeCategory = () => {
    const [active, setActive] = useState<string>("Tennis")
    const catBtns: string[] = ["Tennis", "Fitness", "Football"]
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
            <Row xs={1} md={2} lg={4} className="g-3">
                <Col></Col>
            </Row>
        </Container>
    );
};

export default ShoeCategory;