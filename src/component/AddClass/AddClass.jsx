// Instructor add their class through this component.
// There is a form and add button.
// All info will be stored in 'pendingclass' storage in database.

import { useContext, useEffect, useState } from 'react';
import { Container, ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../AuthProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

const AddClass = () => {
    // getting value through Context API from AuthProvider component.
    const { user, allUser } = useContext(authContext);


    // Initialize AOS to animate page.
    useEffect(() => {
        AOS.init();
    }, [])


    // getting current user's name. Right now, user is an instructor. So cruurent user's information is instructor's information.
    const currentUser = allUser.find(item => item.email == user?.email);

    // Function---> to send data to database.
    const addClass = (e) => {
        e.preventDefault();

        // collecting data from the form
        const className = e.target.className.value;
        const image = e.target.image.value;
        const availableSeats = e.target.availableSeats.value;
        const price = e.target.price.value;
        const classStatus = 'pending';//Initially all class's status will be pending. Admin can approve it or deny it.
        const email = user.email;

        // Pakaging all info to send to database.
        const myClass = {
            className,
            image,
            availableSeats,
            price,
            classStatus,
            email
        }

        // sending the data to database through POST method
        fetch('http://localhost:5000/pending_classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myClass)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        // After sending data, reset the form
        e.target.reset();

        // Showing successfull message as the class is added successfully.
        toast.success('Successfully added the class!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }







    return (

        <Container className='d-flex flex-column justify-content-center align-items-center h-100'>
            <h1 className='text-center fw-bold display-3 mb-3'>Add New Class</h1>
            <Form data-aos="fade-left" data-aos-duration="2000" onSubmit={addClass} className='w-100'>

                <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold'>Instructor Name:</Form.Label>
                    <Form.Text className='ms-3 fw-bold fs-5'>{currentUser.name}</Form.Text>
                </Form.Group>





                <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold' >Instructor Email:</Form.Label>
                    <Form.Text className='ms-3 fw-bold fs-5'> {user.email}</Form.Text>

                </Form.Group>




                <Form.Group className="mb-3" controlId="className">
                    <Form.Label className='fw-bold'>Class Name: </Form.Label>
                    <Form.Control className='no-border-radius' type="name" placeholder="Enter Class Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label className='fw-bold'>Class Image: </Form.Label>
                    <Form.Control className='no-border-radius' type="text" placeholder="add a photoURL" />
                </Form.Group>




                <Form.Group className="mb-3" controlId="availableSeats" >
                    <Form.Label className='fw-bold' >Available Seats:</Form.Label>
                    <Form.Control className='no-border-radius' type="number" placeholder="Available seat" />
                </Form.Group>





                <Form.Group className="mb-3" controlId="price">
                    <Form.Label className='fw-bold'>Price:</Form.Label>
                    <Form.Control className='no-border-radius' type="number" placeholder="Price" />
                </Form.Group>









                <Button className='btn no-border-radius bg-blue px-4 text-white' type="submit">
                    Add Class
                </Button>
            </Form>




            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Container>
    );
}

export default AddClass;