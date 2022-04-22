import React from 'react';
import { Col } from 'react-bootstrap';
import { productType } from '../../../util/types';
interface props {
    product: productType,
    key: string,
    anim?: "zoom-in" | "fade-in" | "fade-up"
}

const Product: React.FC<props> = ({ product, anim }) => {
    return (
        <Col data-aos={anim}>
            <div className="mb-3 product_img">
                <img src={product.img} alt="" />
            </div>
            <h5>{product.name}</h5>
            <p className="text-capitalize">
                <em className='me-2'><b>Category:</b></em>
                {product.category}
            </p>
            <div style={{ fontSize: "18px" }} className='fw-bold text-danger'>
                <span><del>&#36;{product.prevPrice}.00</del></span>
                <span className="ms-3">&#36;{product.curPrice}.00</span>
            </div>
        </Col>
    );
};

export default Product;