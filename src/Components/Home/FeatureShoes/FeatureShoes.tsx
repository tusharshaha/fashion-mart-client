import React from 'react';
import { Container } from 'react-bootstrap';
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
        </Container>
    );
};

export default FeaturedProduct;