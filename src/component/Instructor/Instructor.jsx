// This component show the list of instructors. At the navbar, there is an option 'Instructors'. If user click on this option, user will see the list.

import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";


const Instructor = () => {

    // Declaring state
    const [userInfo, setUserInfo] = useState([]);

    // Loading all user's data. After that, data of instructor's will be filtered.
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/gettingUserInfo')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])


    // Data of all instructors.
    const instructor = userInfo.filter(e=>e.status == 'instructor');


    // Spinner will be shown untill data of instructors is not loaded fully.
    if(instructor.length==0){
        return (
            <Spinner animation="border" role="status">
              
            </Spinner>
          );
    }



    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        instructor.map(e => {
                            return (
                                <tr key={e._id}>
                                    <td><img className="table-img" src={e.img} alt="" /></td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    
                                </tr>

                            )
                        })
                    }


                </tbody>
            </Table>

        </Container>
    );
};

export default Instructor;