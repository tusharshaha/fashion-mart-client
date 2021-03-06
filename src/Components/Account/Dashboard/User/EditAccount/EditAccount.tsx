import request from 'graphql-request';
import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { update_user } from '../../../../../graphql/schema';
import { RootState, AppDispatch } from '../../../../../redux/store';
import { addUser } from '../../../../../redux/features/userAuthSlice';
import { loginUser } from '../../../../../utils/types';
import { GRAPHQL_URL } from '../../../../../utils/BaseUrl';

const EditAccount: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userName, userFullName, email, role, token } = useSelector((state: RootState) => state.authUser.value);
    const dispatch = useDispatch<AppDispatch>();
    const handleAccountUpdate = handleSubmit((data) => {
        setLoading(true);
        request<{ updateUserAccount: loginUser }>(GRAPHQL_URL, update_user, { input: { ...data, email } }).then(res => {
            const { userName, userFullName } = res.updateUserAccount;
            dispatch(addUser({ userName, userFullName, email, token, role }))
            Swal.fire({
                icon: "success",
                title: "Successfully Updated Your Account",
                showConfirmButton: false,
                timer: 1800
            })
            reset();
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: err.response.errors[0].message
            })
        }).finally(() => setLoading(false));
    })
    return (
        <div>
            {loading && <div className='my-3 text-center'>
                <Spinner animation="border" variant="primary" />
            </div>}
            <form onSubmit={handleAccountUpdate} className="pdts_form">
                <div className="adr_input">
                    <div className="pdts_input">
                        <label>Your Name</label>
                        <Form.Control
                            defaultValue={userName}
                            {...register("userName", { required: true })}
                        />
                        {errors.userName && <p className='text-danger mt-2 mb-0'>This field can't be empty</p>}
                    </div>
                    <div className="pdts_input">
                        <label>Your Full Name</label>
                        <Form.Control
                            defaultValue={userFullName}
                            {...register("userFullName")}
                        />
                    </div>
                </div>
                <div className="pdts_input">
                    <label>Your Email</label>
                    <Form.Control
                        type="email"
                        value={email} disabled
                    />
                </div>
                <div className="pdts_input">
                    <label>Old Password</label>
                    <Form.Control
                        type="password"
                        {...register("oldP", { required: true, minLength: 6 })}
                    />
                    {errors.oldP && <p className='text-danger mt-2 mb-0'>Password must be a minimum 6 digit</p>}
                </div>
                <div className="pdts_input">
                    <label>Current Password</label>
                    <Form.Control
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.password && <p className='text-danger mt-2 mb-0'>Password must be a minimum 6 digit</p>}
                </div>
                <div className='text-end'>
                    <button type='submit' className="product_btn px-4">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditAccount;