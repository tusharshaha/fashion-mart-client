import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

const EditAccount: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userName, userFullName, email } = useSelector((state: RootState) => state.authUser.value);
    const handleAccountUpdate = handleSubmit((data) => {

    })
    return (
        <div>
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
                    <Form.Control type="email" value={email} disabled />
                </div>
                <div className="pdts_input">
                    <label>Old Password</label>
                    <Form.Control type="password" {...register("oldP", { required: true, minLength: 6 })} />
                    {errors.oldP && <p className='text-danger mt-2 mb-0'>Password must be a minimum 6 digit</p>}
                </div>
                <div className="pdts_input">
                    <label>Current Password</label>
                    <Form.Control type="password" {...register("curP", { required: true, minLength: 6 })} />
                    {errors.curP && <p className='text-danger mt-2 mb-0'>Password must be a minimum 6 digit</p>}
                </div>
                <div className='text-end'>
                    <button className="product_btn px-4">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditAccount;