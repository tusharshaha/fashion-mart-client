import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useProducts } from '../../../hooks/custom_hooks';
import Product from '../../Shop/Product/Product';

const ShoeCategory: React.FC = () => {
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
                    filteredProducts.map(product => <Product
                        key={product._id}
                        product={product}
                        anim="zoom-in"
                    />)
                }
            </Row>
        </Container>
    );
};

export default ShoeCategory;