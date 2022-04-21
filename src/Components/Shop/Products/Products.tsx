import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useProducts } from '../../../hooks/custom_hooks';
import Product from '../Product/Product';

const Products: React.FC = () => {
    const { products } = useProducts();
    return (
        <Container>
            <div className="border mt-5 mb-4 py-3 ">

            </div>
            <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Products;