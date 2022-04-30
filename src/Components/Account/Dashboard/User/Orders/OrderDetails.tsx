import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails: React.FC = () => {
    const { orderId } = useParams();
    return (
        <div>
            <h4 className='mb-4'>Order Details</h4>
            <div className="cus_td_container">
                <table className="cus_table">
                    <thead>
                        <tr>
                            <td>Product</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetails;