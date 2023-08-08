import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import './OurGoal.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurGoal = () => {
    const [isFull, setIsFull] = useState(false);


    useEffect(()=>{
        AOS.init();
    },[])
    const makeFull = () => setIsFull(true);

    return (
        <Container className="py-5 my-5">
            <h1 data-aos='zoom-in-left' data-aos-duration='2000' className="display-3 text-center fw-bold my-5">Our Goal</h1>
            <article data-aos='fade-right'  data-aos-duration='2000' className="goal">
                At Zen Dojo, our mission is to empower individuals of all ages and backgrounds through the transformative journey of martial arts. We believe that martial arts training goes beyond physical techniques – it instills valuable life skills, fosters personal growth, and creates a supportive community that extends beyond the dojo. <br />



                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4"><b>Comprehensive Skill Development:</b> Our training center is dedicated to providing a well-rounded curriculum that covers a diverse range of martial arts disciplines including boxing, karate, Wing Chun, wrestling, and self-defense. We aim to equip our students with a comprehensive skill set that enables them to navigate various real-world situations with confidence.</p>

                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4"><b>Personal Growth and Empowerment:</b> We view martial arts as a powerful tool for personal growth. Through disciplined training and dedicated practice, our students learn to push their boundaries, overcome challenges, and discover their full potential. We strive to foster self-confidence, mental resilience, and a positive mindset that extends beyond the training floor.</p>

                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4">
                    <b>Safety and Expert Guidance:</b> The safety of our students is paramount. Our center is staffed by highly experienced and qualified trainers who prioritize proper technique and safety protocols. We ensure a controlled and supportive environment where each individual can progress at their own pace under the guidance of knowledgeable instructors.
                </p>

                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4">
                    <b>Inclusive Community:</b> We are proud to cultivate an inclusive and welcoming community where individuals from all walks of life come together to learn, train, and grow. Regardless of age, skill level, or background, our students share a common passion for martial arts and mutual respect for one another.
                </p>

                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4">
                    <b>Fitness and Well-being:</b> Beyond learning self-defense skills, our training programs promote physical fitness, flexibility, and overall well-being. We encourage a healthy lifestyle by providing challenging workouts that engage both the body and mind, leading to improved cardiovascular health, strength, and endurance.
                </p>

                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4">
                    <b>Pathways to Excellence:</b> Whether our students seek martial arts training as a hobby, fitness routine, or aspire to compete professionally, we offer tailored pathways to meet their goals. Our training center supports individuals in realizing their ambitions, whether that's achieving black belt mastery or excelling in competitive arenas.
                </p>



                <p data-aos='fade-up' data-aos-duration='2000' className="mt-4">
                    <b>Lifelong Learning:</b> Martial arts is a lifelong journey of growth and refinement. Our training center fosters a culture of continuous learning, where even the most experienced practitioners continue to deepen their understanding and refine their techniques. We provide opportunities for advanced training, seminars, and workshops to fuel ongoing improvement.
                </p>

               <p data-aos='fade-up' data-aos-duration='2000' className="mt-4">
               At Zen Dojo, our commitment to these goals drives everything we do. We invite you to join our vibrant community and embark on a journey of self-discovery, skill enhancement, and empowerment through the art of martial training. No matter where you start, we're here to support you every step of the way.
               </p>





            </article>


            {/* <Button onClick={makeFull} className="btn btn-primary">Show More</Button>
            <Button className="btn  btn-warning">Show Less</Button> */}
        </Container>
    );
};

export default OurGoal;