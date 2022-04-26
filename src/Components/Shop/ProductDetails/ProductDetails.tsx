import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useProducts } from '../../../hooks/useProducts';
import { productType } from '../../../util/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { addToCart, getTotal } from '../../../redux/features/cartSlice';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import "./ProductDetails.css";
import Swal from 'sweetalert2';

interface props {
    product: productType | undefined,
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
}
const ProductDetails: React.FC<props> = ({ product, showModal, setShowModal }) => {
    const [gImg, setGimg] = useState<string>("");
    const [qty, setQty] = useState<string>('1');
    const dispatch = useDispatch<AppDispatch>();
    const { products } = useProducts();
    const related = products.filter(ele => ele.category === product?.category)
    const gallery = related.map(ele => ele.img);
    const icons: { icon: ReactElement, color: string }[] = [
        { icon: <FaFacebookF />, color: "#3c5b9b" },
        { icon: <FaTwitter />, color: "#1DA1F2" },
        { icon: <FaPinterestP />, color: "#BD081B" },
        { icon: <FaGooglePlusG />, color: "#DC5043" },
        { icon: <FaLinkedinIn />, color: "#010103" }
    ]
    const handleAddToCart = () => {
        const updatedQty = parseInt(qty);
        dispatch(addToCart({
            id: product?._id || "",
            img: product?.img || "",
            name: product?.name || "",
            curPrice: product?.curPrice || 0,
            subTotal: product?.curPrice || 0,
            qty: updatedQty
        }))
        // update total
        dispatch(getTotal());
        Swal.fire({
            icon: "success",
            title: "Successfully Added To Cart",
            showConfirmButton: false,
            timer: 1800
        })
    }
    return (
        <Modal
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='pdt_modal p-3'>

                <button
                    className='pdt_close_btn'
                    onClick={() => setShowModal(false)}
                >
                    <IoClose />
                </button>
                <div>
                    <div className="pdt_img">
                        <img src={gImg || product?.img} alt="" />
                    </div>
                    <div className="pdt_gallery">
                        {
                            gallery.map((img, i) => <img
                                key={i}
                                src={img}
                                alt=""
                                onClick={() => setGimg(img)}
                            />)
                        }
                    </div>
                </div>
                <div>
                    <h5>{product?.name}</h5>
                    <div className="my-3">
                        <span className="me-3 text-danger">&#36;{product?.curPrice}.00</span>
                        <span><del>&#36;{product?.prevPrice}.00</del></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae</p>
                    <Form.Label>Size</Form.Label>
                    <Form.Control as="select" className='mb-3'>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </Form.Control>
                    <Form.Label>Color</Form.Label>
                    <Form.Control as="select">
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                    </Form.Control>
                    <div className='pdt_action'>
                        <input
                            type="number"
                            onChange={(e) => setQty(e.target.value)}
                            value={qty}
                            min={1}
                            max={10}
                        />
                        <button
                            className="product_btn px-5"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                    <p className='text-uppercase'>Share This Product</p>
                    <div className="pdt_icons">
                        {
                            icons.map((ele, i) =>
                                <div style={{ backgroundColor: ele.color }} key={i} className="pdt_icon">
                                    {ele.icon}
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProductDetails;