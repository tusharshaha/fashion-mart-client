import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about2 from "../../../assets/images/about2.png";
import about3 from "../../../assets/images/about3.png";
import about4 from "../../../assets/images/about4.png";

interface policy {
    img: string,
    title: string
}
const AboutPolicy: React.FC = () => {
    const elements: policy[] = [
        { img: about2, title: "What Do We Do?" },
        { img: about3, title: "Our Mission" },
        { img: about4, title: "History Of Us" }
    ]
    return (
        <Container className="my-5 text-center">
            <Row xs={1} lg={3} className="g-3">
                {
                    elements.map((ele, i) => <Col key={i}>
                        <div className="w-100">
                            <img src={ele.img} className="img-fluid w-100" alt="" />
                        </div>
                        <h3 className="my-3">{ele.title}</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default AboutPolicy;