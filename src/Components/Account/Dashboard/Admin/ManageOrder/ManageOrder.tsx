import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { orderedProduct } from '../../../../../utils/types';

const ManageOrder: React.FC = () => {
    const [orders, setOrders] = useState<orderedProduct[]>([]);
    const { token, email } = useSelector((state: RootState) => state.authUser.value)
    return (
        <div>
            <h4 className="mb-3">Manage Orders</h4>
            <div className='cus_td_container'>
                <table className='cus_table text-center'>
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>Total</td>
                            <td>Date</td>
                            <td>Status</td>
                            <td>Payment</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 && <tr>
                            <td colSpan={6} className='py-5 text-center'>No Order Available</td>
                        </tr>}
                        {
                            orders.map(((ele, i) => <tr key={ele._id}>
                                <td>{ele.userEmail}</td>
                                <td>{`&#36;${ele.totalAmount} for ${ele.totalQty} item`}</td>
                                <td>{ele.date}</td>
                                <td>
                                    <Form.Control as="select">
                                        <option
                                            value="Processing"
                                            selected={ele.status === "Processing"}
                                        >
                                            Processing
                                        </option>
                                        <option
                                            value="Shipped"
                                            selected={ele.status === "Shipped"}
                                        >
                                            Shipped
                                        </option>
                                        <option
                                            value="Cancelled"
                                            selected={ele.status === "Cancelled"}
                                        >
                                            Cancelled
                                        </option>
                                    </Form.Control>
                                </td>
                                <td>{ele.payment}</td>
                                <td>
                                    <Button variant="dark" size='sm'>Cancel</Button>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;