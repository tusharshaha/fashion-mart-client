import React from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../../../../hooks/useOrders';

const OrderDetails: React.FC = () => {
    const { orderId } = useParams();
    const { orders } = useOrders();
    const singleOrder = orders.find(ele => ele._id === orderId);
    return (
        <div>
            <h4 className='mb-4'>Order Details</h4>
            <div className="cus_td_container">
                <table className="cus_table">
                    <thead>
                        <tr>
                            <td className='text-center'>Image</td>
                            <td className='text-center'>Product</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleOrder?.products.map(product => <tr key={product.id}>
                                <td>
                                    <div className='chekout_img mx-auto'>
                                        <img src={product.img} alt="" />
                                    </div>
                                </td>
                                <td className='text-center'>{`${product.name} x ${product.qty}`}</td>
                                <td>&#36;{product.subTotal}.00</td>
                            </tr>)
                        }
                        <tr>
                            <td colSpan={2}>Subtotal:</td>
                            <td>&#36;{singleOrder?.totalAmount}.00</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Payment Method:</td>
                            <td>{singleOrder?.payment}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Total:</td>
                            <td>&#36;{singleOrder?.totalAmount}.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4 className='mt-5 mb-4'>Bill Address</h4>
            <div className="cus_td_container">
                <table className="cus_table">
                    <tbody>
                        <tr>
                            <th className='text-secondary'>Name</th>
                            <td>{singleOrder?.userName}</td>
                        </tr>
                        <tr>
                            <th className='text-secondary'>Email</th>
                            <td>{singleOrder?.userEmail}</td>
                        </tr>
                        <tr>
                            <th className='text-secondary'>Company</th>
                            <td>{singleOrder?.company}</td>
                        </tr>
                        <tr>
                            <th className='text-secondary'>Address</th>
                            <td>{singleOrder?.address}</td>
                        </tr>
                        <tr>
                            <th className='text-secondary'>Country</th>
                            <td>{singleOrder?.country}</td>
                        </tr>
                        <tr>
                            <th className='text-secondary'>City</th>
                            <td>{singleOrder?.city}</td>
                        </tr>
                        <tr>
                            <th className='text-secondary'>Phone</th>
                            <td>{singleOrder?.userPhone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetails;