import { GraphQLClient } from 'graphql-request';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { login_user } from '../../../graphql/schema';
import { GRAPHQL_URL } from '../../../util/BaseUrl';

const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleLogin = handleSubmit(async (data) => {
        setLoading(true);
        const client = new GraphQLClient(GRAPHQL_URL);
        await client.request(login_user, data)
            .then(res => {
                console.log(res.loginUser)
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
                    <input type="password" {...register("password", { required: true })} />
                    {errors.password && <p className='text-danger mt-2 mb-0'>Pasword is Required</p>}
                </div>
                <div className=' mt-4 login_action'>
                    <p className='hover-red mb-0'>Lost Your Password?</p>
                    <div className="d-flex align-items-center">
                        <div>
                            <input type="checkbox" id="rmb" />
                            <label className="hover-red ms-2" htmlFor="rmb">Remember Me</label>
                        </div>
                        <button type='submit' className='account_btn ms-3'>Login</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;