import { Accordion, Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FAQ = () => {


    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <Container className="my-5 py-5">


            <h1 data-aos='fade-up-left' data-aos-duration="2000" className="h1 display-3 text-center fw-bold my-5">FAQ's</h1>
            <Row>
                <Col sm={12} md={6}>
                    <Accordion data-aos='fade-down-right' data-aos-duration='2000' defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Are the classes suitable for beginners with no prior martial arts experience</Accordion.Header>
                            <Accordion.Body>
                                Absolutely! Our classes cater to individuals of all skill levels, including complete beginners. Our trainers focus on building strong foundations and gradually progressing through techniques, ensuring a comfortable and effective learning environment for everyone.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How does your center prioritize safety during training sessions?</Accordion.Header>
                            <Accordion.Body>
                                Safety is our utmost priority. We have implemented rigorous safety protocols, including proper warm-ups, supervised practice, and the use of appropriate protective gear. Our trainers closely monitor each participant's progress and adjust training intensity to prevent injuries while promoting growth.
                            </Accordion.Body>
                        </Accordion.Item>






                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I try out a class before committing to a membership?</Accordion.Header>
                            <Accordion.Body>
                                Certainly! We offer trial classes to allow you to experience our training firsthand. This gives you the opportunity to assess the atmosphere, meet our trainers, and get a feel for the training style. Contact us to schedule your trial class and discover the benefits of training at our center.                            </Accordion.Body>
                        </Accordion.Item>




                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What age groups do you cater to in your martial arts classes?</Accordion.Header>
                            <Accordion.Body>
                                Our classes are designed to accommodate a wide range of age groups. We offer specialized classes for children, teenagers, and adults. Our trainers tailor their instruction to ensure that each age group gets the most out of their training experience.                           </Accordion.Body>
                        </Accordion.Item>










                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Do I need to purchase any equipment before starting classes?</Accordion.Header>
                            <Accordion.Body>
                            For the most part, we provide the necessary training equipment during classes. However, as you progress, we recommend investing in basic personal gear such as gloves, a mouthguard, and appropriate attire. Our trainers can guide you on the specific equipment needed for your chosen discipline.                           </Accordion.Body>
                        </Accordion.Item>











                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Can I pursue martial arts training professionally or is it only for fitness and recreation?</Accordion.Header>
                            <Accordion.Body>
                            Our training center supports both recreational and professional aspirations. Whether you're looking to train for fitness, personal growth, or to compete at a higher level, our trainers have the expertise to guide you on your chosen path. We offer programs designed to cater to your goals.                           </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>



                </Col>




                <Col sm={12} md={6}>

                    <img data-aos='fade-left' data-aos-duration='2000' className="img-fluid rounded" src="https://i.pinimg.com/originals/ce/0c/f0/ce0cf00fc37007670aa68f4fd73095b4.jpg" alt="" />


                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;