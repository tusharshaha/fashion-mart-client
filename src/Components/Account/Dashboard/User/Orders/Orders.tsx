import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../../../../hooks/useOrders';

const Orders: React.FC = () => {
    const navigate = useNavigate();
    const { orders } = useOrders();
    return (
        <div>
            <h4 className="mb-3">Orders</h4>
            <div className='cus_td_container'>
                <table className='cus_table text-center'>
                    <thead>
                        <tr>
                            <td>Order</td>
                            <td>Date</td>
                            <td>Status</td>
                            <td>Total</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 && <tr>
                            <td colSpan={5} className='py-5 text-center'>You Currenly haven't any order</td>
                        </tr>}
                        {
                            orders.map(((ele, i) => <tr key={ele._id}>
                                <td>{i + 1}</td>
                                <td>{ele.date}</td>
                                <td>{ele.status}</td>
                                <td>&#36;{`${ele.totalAmount}.00 for ${ele.totalQty} item`}</td>
                                <td>
                                    <Button
                                        variant="secondary"
                                        size='sm'
                                        className="me-2"
                                        onClick={() => navigate(`/dashboard/orders/${ele._id}`)}
                                    >
                                        View
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size='sm'
                                    >
                                        Cancel
                                    </Button>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Orders;