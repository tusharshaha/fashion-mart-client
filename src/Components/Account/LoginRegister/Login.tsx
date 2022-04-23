import React from 'react';
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = handleSubmit((data) => console.log(data));
    return (
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
    );
};

export default Login;