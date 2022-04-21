import React from 'react';
import { productType } from '../../../util/types';
import { BsFillSuitHeartFill, BsEyeFill } from "react-icons/bs";
import "./ProductList.css";

interface props {
    product: productType,
    key: string,
}

const ProductList: React.FC<props> = ({ product }) => {
    return (
        <div className='product_list'>
            <div className='productList_img'>
                <img src={product.img} className="w-100" alt="" />
            </div>
            <div className="productList_text">
                <h4 className='fw-light'>{product.name}</h4>
                <div className="d-flex align-items-center">
                    <h4 className='fw-bold me-3'>&#36;{product.curPrice}</h4>
                    <h5 className='fw-bold text-secondary'>
                        <del>&#36;{product.prevPrice}</del>
                    </h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis, nisi quas in, nobis incidunt natus aperiam, maxime exercitationem neque totam asperiores numquam necessitatibus suscipit earum odit laborum quia dolorum quaerat nostrum placeat et commodi.</p>
                <div className='productList_btns'>
                    <button className="product_btn">ADD TO CART</button>
                    <button className="product_btn"><BsFillSuitHeartFill /></button>
                    <button className="product_btn"><BsEyeFill /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;