import React, { useContext } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Login = () => {
    //Getting state,function from Authprovider component through context API
    const { handleGoogleSignIn, handleSignInWithEmail } = useContext(authContext);


    //State declaration for this component
    const [passwordVisible, setPasswordVisible] = React.useState(false);


    //Inside this function handleGoogleSignIn() fucntion will be called which is declared in Authprovider to handle google authentication.
    const handleGoogle = () => {
        handleGoogleSignIn();
    }


    // This function get email, password and send those to handleSignInWithEmail() function which is declared in AuthProvider component to handle sign in process.
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignInWithEmail(email, password)
    }




    // This function is responsible for password toggle.
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };



    // AOS initialization.
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4} data-aos='zoom-in' data-aos-duration="2000" className='d-flex flex-column justify-content-center align-items-center'>
                    <h1 className="text-center mt-5 fw-bold mb-4">Login</h1>
                    <Form onSubmit={handleSignIn} className='w-100'>
                        <Form.Group controlId="email">
                            <Form.Label className='fw-bold'>Email</Form.Label>
                            <Form.Control type="email" className='no-border-radius' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className='mt-3' controlId="password">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <div className="password-toggle">
                                <Form.Control
                                    className='no-border-radius'
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

                        <Button className='no-border-radius bg-blue px-5' type="submit" block>
                            Login
                        </Button>
                    </Form>

                    <p className="text-center mt-3">
                        Don't have an account? <Link className='text-decoration-none text-blue' to='/registration'>Register here</Link>
                    </p>

                    <p className='text-center'>Or</p>

                    <Button onClick={handleGoogle} variant="light" className='btn btn-primary no-border-radius mb-5' block>
                        <FcGoogle className="google-icon me-2" />
                        Google sign-in

                    </Button>
                </Col>




            </Row>
        </Container>
    );
};

export default Login;
