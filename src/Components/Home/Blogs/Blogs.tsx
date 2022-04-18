import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Blog1 from "../../../assets/images/blog1.png"
import Blog2 from "../../../assets/images/blog2.png"
import Blog3 from "../../../assets/images/blog3.png"
import "./Blogs.css";

interface blog {
    img: string,
    name: string,
    timer: string
}

const Blogs: React.FC = () => {
    const blogs: blog[] = [
        { img: Blog1, name: "Praesent imperdie", timer: "300" },
        { img: Blog2, name: "Post with Gallery", timer: "500" },
        { img: Blog3, name: "Maecenas ultricies", timer: "700" }
    ]
    return (
        <Container className="py-5">
            <div className='text-center'>
                <h2 className='text-uppercase title_mark'>Latest Blogs</h2>
                <p className='text-decoration-underline fw-bold'>VIEW ALL POSTS</p>
            </div>
            <Row xs={1} lg={3} className="g-3 mt-4">
                {
                    blogs.map((ele, i) => <Col
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={ele.timer}
                    >
                        <div className='cat_img'>
                            <img src={ele.img} alt="" />
                        </div>
                        <div className='d-flex mt-4'>
                            <div className='post_date'>
                                <h3 className="fw-bold">24</h3>
                                <p className="fw-bold mb-0"><small>APR</small></p>
                            </div>
                            <div>
                                <h5>{ele.name}</h5>
                                <p><em>By Admin</em></p>
                                <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
                                <p className='text-decoration-underline fw-bold mt-3'>+ READ MORE</p>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Blogs;