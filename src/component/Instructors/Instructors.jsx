// This component show all instructors in Home Page in card side by side. 

import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Instructors.css'
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Instructors = () => {
    // Getting value from AuthProvider component through Context API
    const { instructor } = useContext(authContext);


    // Initialize AOS to animate component.
    useEffect(() => {
        AOS.init();
    }, [])


    // Spinner will be shown if data is not loaded properly.
    if (instructor.length == 0) {
        return (
            <Spinner className="d-flex justify-content-center align-items-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }



    return (
        <Container>
            <h1 data-aos='zoom-in' data-aos-duration="2000" className="h1 fw-bold display-4 my-5 py-5 text-center">Our Instructors</h1>
            <div className="outerr ">
                <div data-aos='fade-right' data-aos-duration='2000' className="sliderr d-flex justify-content-start align-items-center">
                    {
                        instructor.map(item => {
                            return (

                                <div className="me-5">
                                    <Card className=" instructor-card" >
                                        <Card.Img className="img" variant="top" src={item.img} />
                                        <Card.Body >
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.email}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>

                            )
                        })
                    }

                </div>


            </div>

        </Container>
    );
};

export default Instructors;