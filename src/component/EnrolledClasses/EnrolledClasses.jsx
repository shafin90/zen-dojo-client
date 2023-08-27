import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { authContext } from "../AuthProvider/AuthProvider";


// I am trying to fetch all the data of enrolledClasses first. Then i will filter that by user email to get logged in users enrolled classses.  After that i will show the information in a table.

const EnrolledClasses = () => {
    // getting data through contex api from authprovider component.
    const { user } = useContext(authContext);
    console.log(user)


    // Declaring state for this component.
    const [allEnrolledClasses, setAllEnrolledClasses] = useState([]);
    const [loggedInUserEnrolledClasses, setLoggedInUserEnrolledClasses] = useState([]);

    // Fetching data
    useEffect(() => {
        fetch('http://localhost:5000/getEnrolledClasses')
            .then(res => res.json())
            .then(data => setLoggedInUserEnrolledClasses([...data.filter(e => e.email == user?.email)]))
            // .then(data => setAllEnrolledClasses(data))
  
        // let filteredData = allEnrolledClasses.filter(e => e.email == user?.email)
        // setLoggedInUserEnrolledClasses([...allEnrolledClasses.filter(e => e.email == user?.email)])
   
        
            // setLoggedInUserEnrolledClasses([...allEnrolledClasses.filter(e => e.email == user?.email)])
    
        
   
   
    }, [])

    


    console.log(allEnrolledClasses)
    console.log(loggedInUserEnrolledClasses)

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