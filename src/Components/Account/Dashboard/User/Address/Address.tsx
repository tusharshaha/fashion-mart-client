import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Address.css';

const Address: React.FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleAddress = handleSubmit((data) => {
        reset();
    })
    return (
        <div>
            <h4 className="mb-4 text-uppercase">Bill Address</h4>
            <form onSubmit={handleAddress} className="pdts_form">
                <div className="adr_input">
                    <div className="pdts_input">
                        <label>First Name *</label>
                        <Form.Control {...register("fName", { required: true })} />
                        {errors.fName && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                    </div>
                    <div className="pdts_input">
                        <label>Last Name *</label>
                        <Form.Control {...register("lName", { required: true })} />
                        {errors.lName && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                    </div>
                </div>
                <div className="pdts_input">
                    <label>Company Name</label>
                    <Form.Control {...register("cName", { required: true })} />
                </div>
                <div className="pdts_input">
                    <label>Country *</label>
                    <Form.Control as="select" {...register("country", { required: true })}>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>United States</option>
                    </Form.Control>
                    {errors.country && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                </div>
                <div className="pdts_input">
                    <label>Street Address *</label>
                    <Form.Control
                    className="mb-3"
                    placeholder="house number and street name"
                    {...register("sa1", { required: true })}
                    />
                    <Form.Control placeholder="Apartment, suite, unit etc.(optional)" {...register("sa2")} />
                    {errors.sa1 && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                </div>
                <div className="pdts_input">
                    <label>Town / City *</label>
                    <Form.Control {...register("city", { required: true })} />
                    {errors.city && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                </div>
                <div className="pdts_input">
                    <label>State / County</label>
                    <Form.Control {...register("state")} />
                </div>
                <div className="adr_input">
                    <div className="pdts_input">
                        <label>Phone *</label>
                        <Form.Control {...register("phone", { required: true })} />
                        {errors.phone && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                    </div>
                    <div className="pdts_input">
                        <label>Email *</label>
                        <Form.Control type="email" {...register("email", { required: true })} />
                        {errors.email && <p className='text-danger mt-2 mb-0'>This field is required</p>}
                    </div>
                </div>
                <div>
                    <button className="product_btn px-5 mt-4">Save Address</button>
                </div>
            </form>
        </div>
    );
};

export default Address;