import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Instructors.css'
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Instructors = () => {
    const {instructor} = useContext(authContext);





    useEffect(()=>{
        AOS.init();
    },[])
   









    // looader if data is not loaded=====
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
                                
                                    <Card  className="me-5 instructor-card" >
                                        <Card.Img className="img" variant="top"  src={item.img} />
                                        <Card.Body >
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.email}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                
                            )
                        })
                    }






                </div>


            </div>






        </Container>
    );
};

export default Instructors;