import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";


const Instructor = () => {


    const [userInfo, setUserInfo] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/gettingUserInfo')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])


    const instructor = userInfo.filter(e=>e.status == 'instructor');


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