import React, { useContext } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';



const Login = () => {
    // context API======================
    const {handleGoogleSignIn, handleSignInWithEmail} = useContext(authContext);
    
    
    // state declaration===========================
    const [passwordVisible, setPasswordVisible] = React.useState(false);



    const handleGoogle = ()=>{
        handleGoogleSignIn();
    }


    const handleSignIn = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignInWithEmail(email,password)
    }




    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4} className='d-flex flex-column justify-content-center align-items-center'>
                    <h1 className="text-center mt-5 mb-4">Login</h1>
                    <Form onSubmit={handleSignIn} className='w-100'>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <div className="password-toggle">
                                <Form.Control
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="Enter password"
                                    required





                                />

                                <div
                                    className="password-toggle-icon"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <AiFillEyeInvisible />
                                    ) : (
                                        <AiFillEye />
                                    )}
                                </div>

                            </div>
                        </Form.Group>

                        <Button variant="primary"  type="submit" block>
                            Login
                        </Button>
                    </Form>

                    <p className="text-center mt-3">
                        Don't have an account? <Link className='text-decoration-none' to='/registration'>Register here</Link>
                    </p>

                    <p className='text-center'>Or</p>

                    <Button onClick={handleGoogle} variant="light" className='btn btn-primary' block>
                        <FcGoogle className="google-icon me-2" />
                        Google sign-in

                    </Button>
                </Col>



                
            </Row>
        </Container>
    );
};

export default Login;
