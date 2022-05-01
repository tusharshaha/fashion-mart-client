import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { productType } from '../../../utils/types';
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdSearch } from "react-icons/md"
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { addToCart, getTotal } from '../../../redux/features/cartSlice';
import Swal from 'sweetalert2';
import { addToWishlist } from '../../../redux/features/wishlistSlice';
import ProductDetails from '../ProductDetails/ProductDetails';
interface props {
    product: productType,
    key: string,
    anim?: "zoom-in" | "fade-in" | "fade-up"
}

const Product: React.FC<props> = ({ product, anim }) => {
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
            <Col data-aos={anim} className="details_product">
                <div className="mb-3 product_img">
                    <img src={product.img} alt="" />
                    <div className='product_actions'>
                        <button
                            onClick={() => handleAddToWishlist(product)}
                            className='icon'
                        >
                            <FaRegHeart />
                        </button>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className='icon'
                        >
                            <MdAddShoppingCart />
                        </button>
                        <button onClick={() => {
                            setItem(product)
                            setShowModal(true)
                        }} className='icon'>
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
            <ProductDetails
                product={item}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default Product;