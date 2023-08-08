import Flicking from '@egjs/react-flicking';
import "@egjs/react-flicking/dist/flicking.css";
import './Banner.css';
import { TypeAnimation } from 'react-type-animation';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// blue- #014094
// red= #B60000

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container className='my-5 py-5'>
            <h1 className='h4 mb-4 text-dark fw-bold display-6 mb-5'>


                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Zen Dojo',
                        1000,
                        'Unleash Your Inner Strength',
                        1000,
                        'Through Martial Arts and',
                        1000,
                        'Self-Defense Training',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </h1>
            <Row>
                <Col data-aos="fade-right" data-aos-duration="2000" sm={12} md={5}>
                    <Flicking
                        align="prev"
                        circular={true}
                        onMoveEnd={e => {
                            console.log(e);
                        }}>
                        <div className="panel d-flex justify-content-center align-items-center  w-100">

                            <img className='img-fluid' src="https://www.fullcontactway.com/wp-content/uploads/2017/08/boxing-match.jpg" alt="" />

                        </div>

                        <div className="panel d-flex justify-content-center align-items-center w-100">
                            <img className='img-fluid h-100' src="https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/04/07/2017-04-07-karate-thumbnail.jpg" alt="" />

                        </div>

                        <div className="panel d-flex justify-content-center align-items-center w-100">
                            <img className='img-fluid' src="https://cdn.vox-cdn.com/thumbor/i7RDAVFBUOQfWaU-pV2a5y8VcYA=/0x0:1000x667/2120x1413/filters:focal(0x0:1000x667)/cdn.vox-cdn.com/uploads/chorus_image/image/38160126/20120422_ajw_ax4_415.0.jpg" alt="" />

                        </div>
                    </Flicking>
                </Col>



                <Col sm={12} md={7} >



                    <article data-aos="fade-left" data-aos-duration="2000" className='fw-lg text-size' >

                        Welcome to Zen Dojo, your ultimate destination for martial arts training and self-defense. Immerse yourself in a sanctuary of discipline and inner strength as we offer a wide array of martial arts disciplines to empower you with self-defense skills. Whether you're a beginner or an experienced practitioner, our dedicated instructors will guide you on a transformative journey of physical mastery and mental resilience. Discover the art of self-defense, cultivate inner peace, and unlock your true potential at Zen Dojo, where martial arts and personal growth harmoniously coexist.
                    </article>

                </Col>
            </Row>
        </Container>
    );
};

export default Banner;