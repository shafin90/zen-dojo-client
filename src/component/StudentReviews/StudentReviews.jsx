import React from "react";
import { Carousel, Container } from "react-bootstrap";

const StudentReviews = () => {
    const reviews = [
        {
            name: "John Doe",
            review: "I've been taking martial arts classes here for 6 months now and I'm really happy with my progress. The instructors are great and the atmosphere is very supportive. I would definitely recommend this school to anyone interested in learning martial arts."
        },
        {
            name: "Jane Doe",
            review: "I've been a student at this school for 2 years now and I love it! The instructors are very knowledgeable and patient, and they create a fun and challenging learning environment. I've learned so much about martial arts and myself since I started training here."
        },
        {
            name: "Peter Smith",
            review: "I'm so glad I found this school! The instructors are amazing and they really care about their students. I've learned so much from them and I've become so much more confident since I started training here. I would highly recommend this school to anyone looking for a martial arts school."
        },
        {
            name: "Mary Smith",
            review: "I've been taking martial arts classes here for 3 years now and I'm still learning new things every day. The instructors are top-notch and they really push you to be your best. I'm so grateful for the opportunity to train at this school."
        },
        {
            name: "David Johnson",
            review: "I'm a beginner in martial arts, but the instructors at this school have made me feel welcome and comfortable from the start. They're very patient and they take the time to explain everything clearly. I'm really enjoying my time here and I'm learning a lot."
        }
    ];

    return (
        <Container className=" py-5 d-block px-5 py-2 btn no-border-radius bg-blue text-white ">
            <h2 className=" fw-bold  mb-5 ">Students Review</h2>
            <Carousel>
                {reviews.map((review, index) => (
                    <Carousel.Item key={index}>
                        <div className="testimonial">
                            <p>{review.review}</p>
                            <cite>{review.name}</cite>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default StudentReviews;
