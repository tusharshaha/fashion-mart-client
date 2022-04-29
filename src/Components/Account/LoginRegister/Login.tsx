import { GraphQLClient } from 'graphql-request';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { login_user } from '../../../graphql/schema';
import { addUser } from '../../../redux/features/userAuthSlice';
import { AppDispatch } from '../../../redux/store';
import { GRAPHQL_URL } from '../../../util/BaseUrl';
import { loginUser } from '../../../util/types';

const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleLogin = handleSubmit(async (data) => {
        setLoading(true);
        const client = new GraphQLClient(GRAPHQL_URL);
        await client.request<{ loginUser: loginUser }>(login_user, data)
            .then(res => {
                dispatch(addUser(res.loginUser));
                Swal.fire({
                    icon: "success",
                    title: "Succesfully Login",
                    timer: 1800,
                    showConfirmButton: false
                })
                reset();
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: err.response.errors[0].message
                })
            }).finally(() => setLoading(false))
    });
    return (
        <>
            {loading && <div className='my-3 text-center'>
                <Spinner animation="border" variant="primary" />
            </div>}
            <form onSubmit={handleLogin} className="pdts_form">
                <div className="pdts_input">
                    <label>Your Email *</label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <p className='text-danger mt-2 mb-0'>Email is Required</p>}
                </div>
                <div className="pdts_input">
                    <label>Your Password *</label>
                    <input type="password" {...register("password", { required: true, minLength: 6 })} />
                    {errors.password && <p className='text-danger mt-2 mb-0'>Password must be a minimum 6 digit</p>}
                </div>
                <div className=' mt-4 login_action'>
                    <p className='hover-red mb-0'>Lost Your Password?</p>
                    <div className="d-flex align-items-center">
                        <div>
                            <input type="checkbox" id="rmb" />
                            <label className="hover-red ms-2" htmlFor="rmb">Remember Me</label>
                        </div>
                        <button className='account_btn ms-3'>Login</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;