import React, { useState } from 'react';
import { productType } from '../../../utils/types';
import { BsFillSuitHeartFill, BsEyeFill } from "react-icons/bs";
import "./ProductList.css";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { addToCart, getTotal } from '../../../redux/features/cartSlice';
import { addToWishlist } from '../../../redux/features/wishlistSlice';
import Swal from 'sweetalert2';
import ProductDetails from '../ProductDetails/ProductDetails';

interface props {
    product: productType,
    key: string,
    anim?: "zoom-in" | "fade-in" | "fade-up"
}

const ProductList: React.FC<props> = ({ product, anim }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [item, setItem] = useState<productType>();
    const dispatch = useDispatch<AppDispatch>();
    const handleAddToCart = (product: productType) => {
        // dispactch for add to cart
        dispatch(addToCart({
            id: product._id,
            img: product.img,
            name: product.name,
            curPrice: product.curPrice,
            subTotal: product.curPrice,
            qty: 1
        }));
        // dispatch for get total
        dispatch(getTotal());
        Swal.fire({
            icon: "success",
            title: "Successfully Added To Cart",
            showConfirmButton: false,
            timer: 1800
        })
    }
    const handleAddToWishlist = (product: productType) => {
        dispatch(addToWishlist({
            id: product._id,
            img: product.img,
            name: product.name,
            curPrice: product.curPrice,
        }))
    }
    return (
        <>
            <div data-aos={anim} className='product_list'>
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
                        <button
                            className="product_btn"
                            onClick={() => handleAddToCart(product)}
                        >
                            ADD TO CART
                        </button>
                        <button
                            className="product_btn"
                            onClick={() => handleAddToWishlist(product)}
                        >
                            <BsFillSuitHeartFill />
                        </button>
                        <button onClick={() => {
                            setItem(product)
                            setShowModal(true)
                        }} className="product_btn">
                            <BsEyeFill />
                        </button>
                    </div>
                </div>
            </div>
            <ProductDetails
                product={item}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default ProductList;