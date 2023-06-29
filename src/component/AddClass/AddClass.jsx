import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../AuthProvider/AuthProvider';

const AddClass = () => {
    const {user} = useContext(authContext);
    console.log(user)



  

    const addClass = (e) =>{
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
        fetch('http://localhost:5000/pending_classes',{
             method:'POST',
             headers:{
                'Content-Type':'application/json'
             },
             body:JSON.stringify(myClass)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        





    }







    return (

        <Container>
            <Form onSubmit={addClass}>
                <Form.Group className="mb-3" controlId="className">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Class Name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Class Image</Form.Label>
                    <Form.Control type="text" placeholder="add a photoURL" />
                </Form.Group>



                <Form.Group className="mb-3" >
                    <Form.Label >Instructor Name:</Form.Label>
                    <Form.Text>{user.displayName}</Form.Text>
                </Form.Group>





                <Form.Group className="mb-3" >
                    <Form.Label >Instructor Email:</Form.Label>
                    <Form.Text> {user.email}</Form.Text>
            
                </Form.Group>




                <Form.Group className="mb-3" controlId="availableSeats" >
                    <Form.Label >Available Seats:</Form.Label>
                    <Form.Control type="number" placeholder="Available seat" />
                </Form.Group>





                <Form.Group className="mb-3" controlId="price">
                    <Form.Label >Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price" />
                </Form.Group>







              
               
                <Button variant="primary" type="submit">
                    Add Class
                </Button>
            </Form>
        </Container>
    );
}

export default AddClass;