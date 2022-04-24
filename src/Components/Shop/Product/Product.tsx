import React from 'react';
import { Col } from 'react-bootstrap';
import { productType } from '../../../util/types';
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdSearch } from "react-icons/md"
interface props {
    product: productType,
    key: string,
    anim?: "zoom-in" | "fade-in" | "fade-up"
}

const Product: React.FC<props> = ({ product, anim }) => {
    return (
        <Col data-aos={anim} className="details_product">
            <div className="mb-3 product_img">
                <img src={product.img} alt="" />
                <div className='product_actions'>
                    <button className='icon'>
                        <FaRegHeart />
                    </button>
                    <button className='icon'>
                        <MdAddShoppingCart />
                    </button>
                    <button className='icon'>
                        <MdSearch />
                    </button>
                </div>
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