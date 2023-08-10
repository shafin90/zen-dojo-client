import { useContext, useEffect, useState } from 'react';
import { Container, ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../AuthProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

const AddClass = () => {
    const { user, allUser } = useContext(authContext);
    

    useEffect(()=>{
        AOS.init();
    },[])


    const currentUser = allUser.find(item=>item.email== user?.email);





    const addClass = (e) => {
        e.preventDefault();
        const className = e.target.className.value;
        const image = e.target.image.value;
        const availableSeats = e.target.availableSeats.value;
        const price = e.target.price.value;

        const classStatus = 'pending';
        const email = user.email;

        const myClass = {
            className,
            image,
            availableSeats,
            price,
            classStatus,
            email
        }








        // lets put the info through API
        fetch('https://zen-doj-server-shafin90.vercel.app/pending_classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myClass)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
        
        
        
        
        e.target.reset();

        toast.success('Successfully added the class', {
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
            <h1  className='text-center fw-bold display-3 mb-3'>Add New Class</h1>
            <Form data-aos="fade-left" data-aos-duration="2000" onSubmit={addClass} className='w-100'>

                <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold'>Instructor Name:</Form.Label>
                    <Form.Text className='ms-3 fw-bold fs-5'>{currentUser.name}</Form.Text>
                </Form.Group>





                <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold' >Instructor Email:</Form.Label>
                    <Form.Text  className='ms-3 fw-bold fs-5'> {user.email}</Form.Text>

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