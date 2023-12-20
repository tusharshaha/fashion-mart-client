import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAddressCard, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
    return (
        <Container>
            <Row xs={1} lg={2} className="g-4 mb-5">
                <Col data-aos="fade-right">
                    <h3 className="mb-4 fw-bold">Contact Us</h3>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                    <p className="py-3 mt-4 mb-0 border-top d-flex align-items-center">
                        <FaAddressCard className='me-3' />
                        Address : No 40 Baria Sreet 133/2 NewYork City
                    </p>
                    <p className="py-3 mb-0 border-top d-flex align-items-center">
                        <GrMail className='me-3' />
                        tusharkrs2018@gmail.com
                    </p>
                    <p className="py-3 mb-0 border-top d-flex align-items-center">
                        <FaPhone className='me-3' />
                        0(1234) 567 890
                    </p>
                </Col>
                <Col data-aos="fade-left">
                    <h3 className="mb-4 fw-bold">Tell Us Your Project</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="pdts_form">
                        <div className="pdts_input">
                            <label>Your Name (required)</label>
                            <input type="text" placeholder='Your Name' required/>
                        </div>
                        <div className="pdts_input">
                            <label>Your Email (required)</label>
                            <input type="email" placeholder='example@mail.com' required/>
                        </div>
                        <div className="pdts_input">
                            <label>Subject (required)</label>
                            <input type="text" placeholder='example: Fashion Mart' required/>
                        </div>
                        <div className="pdts_input">
                            <label>Message</label>
                            <textarea cols={30} rows={7} placeholder="Your Message"></textarea>
                        </div>
                        <button type='submit' className="btn btn-dark">Send</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;