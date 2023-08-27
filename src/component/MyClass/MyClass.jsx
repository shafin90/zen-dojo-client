import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function MyClass() {

    // State declaration of this component.
    const [pendingClass, setPendingClass] = useState([]);
    const [approvedClass, setApprovedClass] = useState([]);
    const [showClass, setShowClass] = useState([]);



    // Loading pending class.
    useEffect(() => {
        fetch('http://localhost:5000/getting_pending_classes')
            .then(res => res.json())
            .then(data => setPendingClass(data))
    }, [])




    // Loading approved class.
    useEffect(() => {
        fetch('http://localhost:5000/getting_approved_classes')
            .then(res => res.json())
            .then(data => setApprovedClass(data))
    }, [])



    



    setTimeout(()=>{
        setShowClass([...pendingClass, ...approvedClass])
    },1000)


    console.log(showClass)

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center h-100'>
            
            <h1 className='text-center fw-bold mb-5 dsplay-3'>My Classes</h1>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Class Status</th>
                        <th>Student number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showClass.map(e => {
                            return (
                                <tr key={e._id}>
                                    <td>{e.className}</td>
                                    <td><img className='table-image' src={e.image} alt="" /></td>
                                    <td>{e.classStatus}</td>
                                    <td>@mdo</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </Container>
    );
}

export default MyClass;