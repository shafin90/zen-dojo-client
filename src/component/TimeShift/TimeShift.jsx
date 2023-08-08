import { Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const TimeShift = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container className="my-5 py-5">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="fw-bold display-4 my-5 text-center">Our Training Shift</h1>


            <Row className="d-flex justify-content-evenly align-items-center ">

                <Col  data-aos="fade-right" data-aos-duration="2000" className="border border-3 rounded bg-light col-md-5  mb-3 mb-md-0 col-12 p-4 d-flex flex-column justify-content-center align-items-center shadow">
                    <h2 className="fw-bold">Morning Shit</h2>
                    <p className="fw-bold mt-3">7:00AM - 12:00AM</p>

                </Col>



                <Col  data-aos="fade-left" data-aos-duration="2000" className="border border-3 rounded bg-light  col-md-5 col-12 p-4 d-flex flex-column justify-content-center align-items-center shadow" >
                    <h2 className="fw-bold">Evening Shit</h2>
                    <p className="fw-bold mt-3">3:00PM - 8:00PM</p>

                </Col>

            </Row>

        </Container>
    );
};

export default TimeShift;