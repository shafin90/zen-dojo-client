
import { Col, Container, Nav, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './HowToJoin.css'


const HowToJoin = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container className="py-5 my-5">
            <h1 data-aos="zoom-up-left" data-aos-duration="2000" className="text-center fw-bold display-3 my-5">How to Join???</h1>

            <Row>
                <Col sm={12} md={6} data-aos="fade-right" data-aos-duration="2000" >
                    <p className="question-para">
                        Frist, you have to craete an account. 
                        Then you have to purchase any course under an instructor. Purchasing cousre is very simple. You just need to go to your dashboard after creating account. Then you will
                        find option to select course and payment procedure. <br />
                        After completing all of those formalities, you will become a part of our programme.
                        You will select the shift you feel comfortable to get trained. Our trainers are always
                        here for you. 

                        Happy Journey!!!!! 


                    </p>

                </Col>

                <Col sm={12} md={6} data-aos="fade-left" data-aos-duration="2000" className="d-flex justify-content-center align-iems-enter">
                    <img className="img-fluid question-mark w-50 " src="https://cliparting.com/wp-content/uploads/2016/06/Question-mark-clip-art-5.jpg" alt="" />
                </Col>

            </Row>

        </Container>
    );
};

export default HowToJoin;