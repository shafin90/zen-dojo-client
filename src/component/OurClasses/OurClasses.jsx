import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const OurClasses = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container>
            <h1 data-aos="zoom-in" data-aos-duration="2000" className="h1 fw-bold display-4 my-5 pt-5 text-center">Our Class Catagory</h1>



            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='fade-right' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="http://www.vitalitymedspa.com/wp-content/uploads/boxing-practice-scaled.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Boxing</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                     
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='zoom-in' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="https://www.androiddev.tools/karate/images/training.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Karate</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                  
                        </Card.Body>
                    </Card>

                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='fade-left' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="https://pahstidelines.com/wp-content/uploads/2018/12/5-LL_wrestlingpractice-1-28-1820181128_3626-900x598.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Wrestling</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='fade-right' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="https://www.wingchun.edu.au/content/upload/images/templates/academy/xl/wing-chun-sparring-l.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Wing chan</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
         
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='zoom-in' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="https://grapplingschool.com/wp-content/uploads/2021/08/69069945_m-1536x1023.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Judo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='fade-left' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="https://www.womenshealthandfitness.com.au/wp-content/uploads/2021/03/self-defence-classes-for-women.jpeg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Usual Self Defense</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default OurClasses;