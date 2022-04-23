import React from 'react';
import "./LoginRegister.css";
import loginBanner from '../../../assets/images/login.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./LoginRegister.css";
import Login from './Login';

const LoginRegister: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = handleSubmit((data) => console.log(data));
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
                                    <input type="password" {...register("password", { required: true })} />
                                    {errors.password && <p className='text-danger mt-2 mb-0'>This field can't be empty</p>}
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