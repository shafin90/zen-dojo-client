// This component show the list of enrolled class

import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { authContext } from "../AuthProvider/AuthProvider";


const EnrolledClasses = () => {
    
    // getting data through contex api from AuthProvider component.
    const { user } = useContext(authContext);
    
    
    // Declaring state for this component.
    const [allEnrolledClasses, setAllEnrolledClasses] = useState([]);
    const [loggedInUserEnrolledClasses, setLoggedInUserEnrolledClasses] = useState([]);

    
    // Fetching data of enrolled class
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getEnrolledClasses')
            .then(res => res.json())
            .then(data => setLoggedInUserEnrolledClasses([...data.filter(e => e.email == user?.email)]))
        }, [])


    return (
        <Container>
            <h1 className="text-center display-4 fw-bold my-4">Enrolled class</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Class Name</th>
                        <th>Cost</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        loggedInUserEnrolledClasses.map(e => (
                            <tr>
                                
                                <td>{e.className}</td>
                                <td>{e.amount}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default EnrolledClasses;