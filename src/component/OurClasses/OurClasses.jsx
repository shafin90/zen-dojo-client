import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const OurClasses = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container >
            <h1 data-aos="zoom-in" data-aos-duration="2000" className="h1 fw-bold display-4 my-5 pt-5 text-center">Our <span className="text-blue">Class Catagory</span></h1>



            <Row>


                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='fade-right' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="http://www.vitalitymedspa.com/wp-content/uploads/boxing-practice-scaled.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Boxing</Card.Title>
                            <Card.Text>
                                Boxing, a combat sport, involves skillful punches and strategic moves, showcasing strength, agility, and determination within the ring.
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
                                Karate, a disciplined martial art, emphasizes technique, focus, and self-defense, promoting physical fitness and mental strength .
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
                                Wrestling, a dynamic sport, features intense grappling and strategy, demanding strength and agility, while testing  adaptability.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <Row className=" mt-5">
                <Col className="d-flex justify-content-center align-items-center">
                    <Card data-aos='fade-right' data-aos-duration='2000' className="mb-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="img-fluid h-100" src="https://www.wingchun.edu.au/content/upload/images/templates/academy/xl/wing-chun-sparring-l.jpg" />
                        <Card.Body>
                            <Card.Title className="fw-bold">Wing chan</Card.Title>
                            <Card.Text>
                                Agile martial art emphasizing close-range combat, swift strikes, and economy of motion for self-defense.
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
                                Judo, a Japanese martial art, emphasizes throws, pins, and joint locks, using an opponent's energy for controlled self-defense and sport.
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
                                Learning self-defense techniques is vital for personal safety, empowering individuals to respond effectively to potential threats and dangers.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default OurClasses;