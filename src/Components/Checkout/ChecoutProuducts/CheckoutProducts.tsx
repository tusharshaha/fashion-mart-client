import React from 'react';
import { cartType } from '../../../utils/types';
import './CheckoutProducts.css';

interface props {
    items: cartType[],
    totalAmount: number
}

const CheckoutProducts: React.FC<props> = ({ items, totalAmount }) => {
    return (
        <div className='checkout_product'>
            {
                items.map(item => <div key={item.id} className="d-flex align-items-center justify-content-between mb-2">
                    <div className='d-flex align-items-center'>
                        <div className='chekout_img'>
                            <img src={item.img} alt="" />
                            <div className='bg-secondary cp_qty'>
                                {item.qty}
                            </div>
                        </div>
                        <div>
                            <p className='mb-0'>{item.name}</p>
                        </div>
                    </div>
                    <p className='mb-0'>&#36;{item.subTotal}.00</p>
                </div>)
            }
            <div className="py-3 mt-4 border-top border-bottom">
                <div className="d-flex align-items-center justify-content-between">
                    <span>Subtotal:</span>
                    <span>&#36;{totalAmount}.00</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <span>Shipping:</span>
                    <span>&#36;500.00</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <span>Discount:</span>
                    <span><del>&#36;500.00</del></span>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4">
                <h5>Total:</h5>
                <span>&#36;{totalAmount}.00</span>
            </div>
        </div>
    );
};

export default CheckoutProducts;