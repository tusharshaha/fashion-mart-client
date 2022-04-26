import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { RiDeleteBin5Line } from 'react-icons/ri'
import "./CartTable.css"
import { clearCart, getTotal, handleQty, removeFromCart } from '../../redux/features/cartSlice';
import CalcCart from './CalcCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CartTable: React.FC = () => {
    const { items, totalAmount } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch<AppDispatch>();
    const handleIncrease = (id: string, qty: number) => {
        const updatedQty = qty + 1;
        dispatch(handleQty({ id, qty: updatedQty }))
    }
    const handleDecrease = (id: string, qty: number) => {
        const updatedQty = qty - 1;
        if (updatedQty < 1) {
            return;
        }
        dispatch(handleQty({ id, qty: updatedQty }))
    }
    const handleClear = () => {
        if(items.length === 0){
            Swal.fire({
                icon: "warning",
                title: "You have no product in cart",
            })
            return;
        }
        dispatch(clearCart())
    }
    useEffect(() => {
        dispatch(getTotal())
        // eslint-disable-next-line
    }, [items])
    return (
        <Container className='py-5'>
            <div className='cus_td_container'>
                <table className="text-center cus_table">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 &&
                            <tr>
                                <td colSpan={6} className='py-5 text-center'>
                                    <p className='mb-0'>You have no product in cart. Go to <Link to="/shop" className="hover-red">Shop</Link></p>
                                </td>
                            </tr>
                        }
                        {
                            items.map(item => <tr key={item.id}>
                                <td>
                                    <button
                                        className='delete_icon'
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        <RiDeleteBin5Line />
                                    </button>
                                </td>
                                <td><img src={item.img} className="cus_table_img" alt="" /></td>
                                <td>{item.name}</td>
                                <td>&#36;{item.curPrice}.00</td>
                                <td className='qty_container'>
                                    <div className='qty_action'>
                                        <button onClick={() => handleIncrease(item.id, item.qty)}>
                                            +
                                        </button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => handleDecrease(item.id, item.qty)}>
                                            -
                                        </button>
                                    </div>
                                </td>
                                <td>&#36;{item.subTotal}.00</td>
                            </tr>)
                        }
                        <tr>
                            <td colSpan={6}>
                                <div className='cart_action'>
                                    <div className='cupon'>
                                        <input type="text" placeholder='Cupon Code' />
                                        <button className='cart_btn'>Apply Cupon</button>
                                    </div>
                                    <div className='text-end'>
                                        <button
                                            className="cart_btn"
                                            onClick={handleClear}
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* cart calculation  */}
            {items.length > 0 && <CalcCart total={totalAmount} />}
        </Container>
    );
};

export default CartTable;