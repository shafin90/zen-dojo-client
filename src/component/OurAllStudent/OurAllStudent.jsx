import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import './OurAllStudent.css'


const OurAllStudent = () => {
    // Detecting ScreenWidth. We have to use TypeAnimation based on screenwidth.
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    

    return (
        <Container className="py-5">
            {
                screenWidth>575?
                <h1 className="fw-bold mb-5   ">

                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'The Current number of ',
                        1000,
                        'Our well trained',
                        1000,
                        'and skilled students is',
                        1000,
                        '943',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </h1> 
            :
            <h1 className="fw-bold mb-5   ">

                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'The Current',
                        1000,
                        'number of ',
                        1000,
                        'Our well',
                        1000,
                        'trained and',
                        1000,
                        'skilled students',
                        1000,
                        'is 943',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </h1>
            }
            
            
            
            <div className="outer">
                <div className="slider d-flex justify-content-between align-items-center">
                   

                    <img className="me-2 img-size rounded " src="https://i2-prod.walesonline.co.uk/incoming/article12814263.ece/ALTERNATES/s615b/JS115521204.jpg" alt="" />

                    <img className="me-2 img-size rounded " src="https://images.tapology.com/headshot_images/52068/large/Steven_Hoffman-hs.jpg?1506377552" alt="" />

                    <img className="me-2 img-size rounded " src="https://i.pinimg.com/originals/d0/d9/cb/d0d9cb1fc51ade48ebfe3d3af717141b.jpg" alt="" />



                    <img className="me-2 img-size rounded  " src="https://imgix.bustle.com/elite-daily/2015/02/05164120/bo.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2" alt="" />

                    <img className="me-2 img-size rounded " src="https://api.army.mil/e2/c/images/2014/07/21/354695/original.jpg" alt="" />

                    <img className="me-2 img-size rounded  " src="https://phantom-marca.unidadeditorial.es/5dbd389ad61b5daadcbc3754c8e64203/assets/multimedia/imagenes/2020/04/29/15881494718560.jpg" alt="" />

                    <img className="me-2 rounded img-size " src="https://i.pinimg.com/originals/d1/7d/9d/d17d9d4fe96c3cb051843a6c82ebc408.jpg" alt="" />

                    <img className="me-2 rounded img-size " src="https://media.istockphoto.com/id/1392633090/photo/hispanic-woman-dressed-in-traditional-kimono-practicing-karate-at-home-black-belt.jpg?s=612x612&w=0&k=20&c=eyqZgJ_EusV0pUe2qDbv7yIJQKY4qES_Vc2idRGGjTM=" alt="" />

                    <img className="me-2 rounded  img-size" src="https://i.pinimg.com/736x/6c/0e/f8/6c0ef82bf370339e5cb13fbb24595ddc.jpg" alt="" />

                   
                    <img className="me-2 img-size rounded  " src="https://img.xcitefun.net/users/2011/05/246899,xcitefun-fighting-girl-9.jpg" alt="" />

                </div>
            </div>
        </Container>
    );
};

export default OurAllStudent;