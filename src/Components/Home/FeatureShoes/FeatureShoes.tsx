import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/useProducts';
import Product from '../../Shop/Product/Product';
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
            {products.length === 0 &&
                <div className="text-center py-5">
                    <Spinner animation="border" variant="danger" className="p-4 fs-2" />
                </div>
            }
            <Row xs={1} md={2} lg={4} className="g-3 mt-3">
                {
                    products.slice(0, 4).map(product => <Product
                        key={product._id}
                        product={product}
                        anim="fade-in"
                    />)
                }
            </Row>
        </Container>
    );
};

export default FeaturedProduct;