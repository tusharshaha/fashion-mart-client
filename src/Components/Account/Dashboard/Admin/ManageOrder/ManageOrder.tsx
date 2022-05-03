import request, { GraphQLClient } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { all_orders_query, change_order_status, delete_order } from '../../../../../graphql/schema';
import { RootState } from '../../../../../redux/store';
import { GRAPHQL_URL } from '../../../../../utils/BaseUrl';
import { orderedProduct } from '../../../../../utils/types';

const ManageOrder: React.FC = () => {
    const [orders, setOrders] = useState<orderedProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    const { token } = useSelector((state: RootState) => state.authUser.value);
    const client = new GraphQLClient(GRAPHQL_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    useEffect(() => {
        (async () => {
            setLoading(true)
            await client.request<{ allOrders: orderedProduct[] }>(all_orders_query)
                .then(res => {
                    setOrders(res.allOrders)
                }).catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: err.response.errors[0].message
                    })
                }).finally(() => setLoading(false))
        })()
        // eslint-disable-next-line
    }, [update, token])
    // change order status
    const handleChangeStatus = async (id: string, status: string) => {
        setLoading(true);
        await client.request(change_order_status, { id, status })
            .then(res => {
                if (res.changeOrderStatus) {
                    setUpdate(!update);
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Changed Status",
                        showConfirmButton: false,
                        timer: 1800
                    })
                }
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: err.response.errors[0].message
                })
            }).finally(() => setLoading(false));
    }
    const handleDelete = (id: string) => {
        Swal.fire({
            icon: "warning",
            title: 'Are you sure you want to delete this order?',
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
    // fiter for search order
    const filterOrder = orders.filter(ele => {
        if (search !== "") {
            return ele.userEmail.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
        }
        return true;
    })
    return (
        <div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
                <h4>Manage Orders</h4>
                <div className='search_input'>
                    <input
                        type="text"
                        placeholder='Search by Email'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <BsSearch className="search_icon" />
                </div>
            </div>
            {loading && <div className='mb-3 text-center'>
                <Spinner
                    animation="border"
                    variant="danger"
                    className="p-3"
                />
            </div>}
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
                            filterOrder.map(((ele) => <tr key={ele._id}>
                                <td>{ele.userEmail}</td>
                                <td>&#36;{`${ele.totalAmount}.00 for ${ele.totalQty} item`}</td>
                                <td>{ele.date}</td>
                                <td>
                                    <Form.Control
                                        as="select"
                                        defaultValue={ele.status}
                                        onChange={(e) => handleChangeStatus(ele._id, e.target.value)}
                                    >
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </Form.Control>
                                </td>
                                <td>{ele.payment}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size='sm'
                                        onClick={() => handleDelete(ele._id)}
                                    >
                                        Delete
                                    </Button>
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