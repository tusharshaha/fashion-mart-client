import React from 'react';
import { Button } from 'react-bootstrap';

const CalcCart: React.FC<{ total: number }> = ({ total }) => {
    return (
        <div className='calc_cart'>
            <h4>Cart Totals</h4>
            <div className='p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Subtotal :</p>
                    <p>&#36;{total}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Shipping Fee :</p>
                    <p>&#36;500</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Discount :</p>
                    <p><del>&#36;500</del></p>
                </div>
                <div className='
                    pt-3
                    border-top
                    d-flex
                    justify-content-between
                    align-items-center'>
                    <p>Total :</p>
                    <p>&#36;{total}</p>
                </div>
                <div className='text-end'>
                    <Button variant="danger">Procced To Checkout</Button>
                </div>
            </div>
        </div>
    );
};

export default CalcCart;