import React, { useState } from 'react';
import "./LoginRegister.css";
import loginBanner from '../../../assets/images/login.png';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Login from './Login';
import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_URL } from '../../../util/BaseUrl';
import { register_user } from '../../../graphql/schema';
import Swal from 'sweetalert2';
import { registerUser } from '../../../util/types';
import "./LoginRegister.css";

const LoginRegister: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleRegister = handleSubmit(async (data) => {
        setLoading(true);
        const client = new GraphQLClient(GRAPHQL_URL);
        await client.request<{ registerUser: registerUser }>(register_user, { input: data })
            .then(res => {
                if (res.registerUser.register) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Registerd",
                        text: "Now you can login via your registered email and password",
                    })
                    reset();
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: err.response.errors[0].message
                })
            }).finally(() => setLoading(false));
    });
    return (
        <>
            <div className='banner'>
                <img src={loginBanner} alt="" />
            </div>
            <Container className="my-5">
                <Row xs={1} lg={2} className="g-3">
                    {/* login section  */}
                    <Col>
                        <h2 className='mb-4'>Login</h2>
                        <div className='border rounded p-4'>
                            <Login></Login>
                        </div>
                    </Col>
                    {/* register section  */}
                    <Col>
                        <h2 className='mb-4'>Register</h2>
                        <div className='border rounded p-4'>
                            {loading && <div className='my-3 text-center'>
                                <Spinner animation="border" variant="primary" />
                            </div>}
                            <form onSubmit={handleRegister} className="pdts_form">
                                <div className="pdts_input">
                                    <label>Your Name *</label>
                                    <input {...register("userName", { required: true })} />
                                    {errors.userName && <p className='text-danger mt-2 mb-0'>This field can't be empty</p>}
                                </div>
                                <div className="pdts_input">
                                    <label>Your Full Name</label>
                                    <input {...register("userFullName")} />
                                </div>
                                <div className="pdts_input">
                                    <label>Your Email *</label>
                                    <input type="email" {...register("email", { required: true })} />
                                    {errors.email && <p className='text-danger mt-2 mb-0'>This field can't be empty</p>}
                                </div>
                                <div className="pdts_input">
                                    <label>Your Password *</label>
                                    <input type="password" {...register("password", { required: true, minLength: 6 })} />
                                    {errors.password && <p className='text-danger mt-2 mb-0'>Password must be a minimum 6 digit</p>}
                                </div>
                                <div className='text-end'>
                                    <button className="account_btn">Register</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginRegister;