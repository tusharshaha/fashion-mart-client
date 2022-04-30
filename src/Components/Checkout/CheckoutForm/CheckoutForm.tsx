import { GraphQLClient } from 'graphql-request';
import React, { useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { order_product } from '../../../graphql/schema';
import { clearCart } from '../../../redux/features/cartSlice';
import { AppDispatch, RootState } from '../../../redux/store';
import { GRAPHQL_URL } from '../../../util/BaseUrl';
import CheckoutProducts from '../ChecoutProuducts/CheckoutProducts';
import './CheckoutForm.css';

const CheckoutForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch<AppDispatch>();
    const { items, totalAmount, totalCount } = useSelector((state: RootState) => state.cart);
    const { email, userName, token } = useSelector((state: RootState) => state.authUser.value);
    const handleCheckout = handleSubmit(async (data) => {
        setLoading(true);
        const orderDate = new Date().toISOString().slice(0, 10);
        data.userEmail = email;
        data.status = "Processing";
        data.totalAmount = totalAmount
        data.totalQty = totalCount;
        data.date = orderDate;
        data.products = items;
        const client = new GraphQLClient(GRAPHQL_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        await client.request(order_product, { input: data })
            .then(res => {
                if (res.orderProduct) {
                    dispatch(clearCart());
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Placed Your Order.",
                        showConfirmButton: false,
                        timer: 1800
                    })
                    navigate("/dashboard/orders")
                }
            }).catch(err => {
                Swal.fire({
                    icon: "error",
                    title: err.response.errors[0].message
                })
            }).finally(() => setLoading(false));
    })
    return (
        <Container className='py-5'>
            {loading && <div className='mb-3 text-center'>
                <Spinner
                animation="border"
                variant="secondary"
                className="fs-2 p-3"
                />
            </div>}
            <form onSubmit={handleCheckout} className='checkout_form_container'>
                <div className='checkout_form'>
                    <div className="adr_input">
                        <div>
                            <Form.Control
                                {...register("userName", { required: true })}
                                className="py-2"
                                placeholder="Your Name"
                                defaultValue={userName}
                            />
                            {errors.fName && <p className='text-danger mt-2 mb-0'>This Field is Required</p>}
                        </div>
                        <div>
                            <Form.Control
                                type="email" {...register("userEmail")}
                                className="py-2"
                                placeholder="Your Email Address"
                                value={email}
                                disabled
                            />
                        </div>
                    </div>
                    <div>
                        <Form.Control
                            as="select"
                            defaultValue="Bangladesh"
                            {...register("country", { required: true })}
                            className="py-2"
                        >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                        </Form.Control>
                        {errors.country && <p className='text-danger mt-2 mb-0'>This Field is Required</p>}
                    </div>
                    <div className="adr_input">
                        <div>
                            <Form.Control
                                {...register("city", { required: true })}
                                className="py-2"
                                placeholder="City"
                            />
                            {errors.city && <p className='text-danger mt-2 mb-0'>This Field is Required</p>}
                        </div>
                        <div>
                            <Form.Control
                                {...register("address", { required: true })}
                                className="py-2"
                                placeholder="Address"
                            />
                            {errors.address && <p className='text-danger mt-2 mb-0'>This Field is Required</p>}
                        </div>
                    </div>
                    <div>
                        <Form.Control
                            {...register("company")}
                            className="py-2"
                            placeholder="Company Name"
                        />
                    </div>
                    <div>
                        <Form.Control
                            {...register("userPhone", { required: true, minLength: 11 })}
                            className="py-2"
                            placeholder="Your Phone Number"
                        />
                        {errors.userPhone && <p className='text-danger mt-2 mb-0'>minimum 11 digit required</p>}
                    </div>
                    <div className='pdts_input mt-4'>
                        <label>Select Payment</label>
                        <Form.Control
                            as="select"
                            className="py-2"
                            defaultValue="Cash On Delivery"
                            {...register("payment", { required: true })}
                        >
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Bank Payment">Bank Payment</option>
                            <option value="Check Payment">Check Payment</option>
                        </Form.Control>
                        {errors.payment && <p className='text-danger mt-2 mb-0'>This Field is Required</p>}
                    </div>
                    <div className='text-end'>
                        <Button
                            type="submit"
                            variant="secondary"
                            className="mt-4"
                        >Place Order</Button>
                    </div>
                </div>
                <CheckoutProducts
                    items={items}
                    totalAmount={totalAmount}
                />
            </form>
        </Container>
    );
};

export default CheckoutForm;