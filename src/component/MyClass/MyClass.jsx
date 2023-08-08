import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function MyClass() {

    const [pendingClass, setPendingClass] = useState([]);
    const [approvedClass, setApprovedClass] = useState([]);
    const [showClass, setShowClass] = useState([]);



    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_pending_classes')
            .then(res => res.json())
            .then(data => setPendingClass(data))
    }, [])




    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_approved_classes')
            .then(res => res.json())
            .then(data => setApprovedClass(data))
    }, [])



    console.log(approvedClass)

    useEffect(() => {
        setShowClass([...pendingClass, ...approvedClass])
    }, [])


    console.log(showClass)

    return (
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
    );
}

export default MyClass;