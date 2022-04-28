import request, { GraphQLClient } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { GRAPHQL_URL } from '../../../../../util/BaseUrl';
import { orderedProduct } from '../../../../../util/types';
import { user_orders_query } from '../../../../../graphql/schema';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import Swal from 'sweetalert2';

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<orderedProduct[]>([]);
    const { token, email } = useSelector((state: RootState) => state.authUser.value)
    useEffect(() => {
        (async () => {
            await request<{ userOrders: orderedProduct[] }>(GRAPHQL_URL, user_orders_query, { email: email })
                .then(res => setOrders(res.userOrders))
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: err.response.errors[0].message
                    })
                })
        })()
    }, [token])
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;