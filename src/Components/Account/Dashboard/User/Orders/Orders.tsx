import request from 'graphql-request';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { delete_order } from '../../../../../graphql/schema';
import { useOrders } from '../../../../../hooks/useOrders';
import { GRAPHQL_URL } from '../../../../../utils/BaseUrl';

const Orders: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(false);
    const navigate = useNavigate();
    const { orders } = useOrders(update);
    const handleCancelOrder = (id: string) => {
        Swal.fire({
            icon: "warning",
            title: 'Are you sure you want to cancel your order?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await request(GRAPHQL_URL, delete_order, { id })
                    .then(res => {
                        if (res.deleteOrder) {
                            Swal.fire({
                                icon: "success",
                                title: "Successfully Cancelled Order",
                                showConfirmButton: false,
                                timer: 1800
                            })
                            setUpdate(!update)
                        }
                    }).catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: err.response.errors[0].message
                        })
                    })
            }
        })
    }
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
                                        onClick={() => handleCancelOrder(ele._id)}
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