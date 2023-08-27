import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RegistrationPage = () => {
    // Context API================================
    const {handleRegistrationWithEmail} = useContext(authContext);
    
    
    
    // state declaration ===============================
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [error, setError] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all required fields.');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one capital letter.');
        } else if (!/[!@#$%^&*]/.test(password)) {
            setError('Password must contain at least one special character.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            // Registration successful, you can perform further actions here
            setError('');
            // registration function from authprovider======
            handleRegistrationWithEmail(email,password);
           
            fetch('https://zen-doj-server-shafin90.vercel.app/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email:email, status:'student',name:name,img:photoUrl})
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            


            e.target.reset();
        }
    };



    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col data-aos='zoom-in' data-aos-duration="2000" xs={12} sm={8} md={6} lg={4}>
                    <h1 className="text-center mt-5 mb-4 fw-bold">Registration</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleRegistration}>
                        <Form.Group controlId="name">
                            <Form.Label className='fw-bold'>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='no-border-radius mb-3'
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label className='fw-bold'>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='no-border-radius mb-3'
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='no-border-radius mb-3'
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label className='fw-bold'>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='no-border-radius mb-3'
                            />
                        </Form.Group>

                        <Form.Group controlId="photoUrl">
                            <Form.Label className='fw-bold'>Photo URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter photo URL"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                className='no-border-radius'
                            />
                        </Form.Group>

                        <p className='text-danger text-sm'>{error}</p>

                        <Button  type="submit" className='no-border-radius bg-blue px-5' block>
                            Register
                        </Button>


                        <p className='mt-2'>Already have an account? <Link className='text-decoration-none text-blue' to='/login'>Login</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationPage;
