import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/custom_hooks';
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