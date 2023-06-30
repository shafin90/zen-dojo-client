import Flicking from '@egjs/react-flicking';
import "@egjs/react-flicking/dist/flicking.css";
import './Banner.css';
import { TypeAnimation } from 'react-type-animation';

import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='my-5 py-5'>
            <Row>
                <Col sm={12} md={5}>
                    <Flicking
                        align="prev"
                        circular={true}
                        onMoveEnd={e => {
                            console.log(e);
                        }}>
                        <div className="panel d-flex justify-content-center align-items-center  w-100">

                            <h1>one</h1>

                        </div>

                        <div className="panel d-flex justify-content-center align-items-center w-100">
                            <h1>two</h1>

                        </div>

                        <div className="panel d-flex justify-content-center align-items-center w-100">
                            <h1>three</h1>

                        </div>
                    </Flicking>
                </Col>



                <Col sm={12} md={7} >

                    <h1 className='h4 mb-4'>
                         
                    
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
                    <article>

                        Welcome to Zen Dojo, your ultimate destination for martial arts training and self-defense. Immerse yourself in a sanctuary of discipline and inner strength as we offer a wide array of martial arts disciplines to empower you with self-defense skills. Whether you're a beginner or an experienced practitioner, our dedicated instructors will guide you on a transformative journey of physical mastery and mental resilience. Discover the art of self-defense, cultivate inner peace, and unlock your true potential at Zen Dojo, where martial arts and personal growth harmoniously coexist.
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;