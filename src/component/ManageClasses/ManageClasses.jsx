import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './ManageClasses.css';

function ManageClasses() {




    const [pendingClass, setPendingClass] = useState([]);
    const [approvedClass, setApprovedClass] = useState([]);
    const [showClass, setShowClass] = useState([]);




    // this fetch has been done to collect data from pending class. it will get merged with approve class and be putted into showClass
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_pending_classes')
            .then(res => res.json())
            .then(data => setPendingClass(data))
    }, [])


    // this fetch has been done to collect data from approve class. it will get merged with pending class and be putted into showClass
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_approved_classes')
            .then(res => res.json())
            .then(data => setApprovedClass(data))
    }, [])



    // merging the pending class and approved class==========
    useEffect(() => {
        setShowClass([...pendingClass, ...approvedClass])
    }, [])




    // action for approve a class==================
    const handleApprove = (item) => {

        // deleting the class from the pending class database========
        fetch(`https://zen-doj-server-shafin90.vercel.app/delete_class_from_pending_class/${item._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))


        // enlist the class at approve database=======
        fetch(`https://zen-doj-server-shafin90.vercel.app/approve_class`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => console.log(data))


    }

















    // action for deny  a class=====================================================================================
    const handleDeny = (item) => {



        if (item.classStatus == 'pending') {
            // deleting the class from the pending class database========
            fetch(`https://zen-doj-server-shafin90.vercel.app/denied_from_pending_class/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('pending theke hoise'))

        }
        else if (item.classStatus == 'approved') {
            // deleting the class from the approve class database========
            fetch(`https://zen-doj-server-shafin90.vercel.app/denied_from_approved_class/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('approve theke hoise'))

        }




        


    }



    console.log(showClass)


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ClassName</th>
                    <th>Image</th>
                    <th>Available Seats</th>
                    <th>Price</th>
                    <th>Class Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>


                {showClass.map(e => {
                    return (
                        <tr key={e._id}>
                            <td>{e.className}</td>
                            <td><img className='table-image' src={e.image} alt="" /></td>
                            <td>{e.availableSeats}</td>
                            <td>{e.price}</td>
                            <td>{e.classStatus}</td>
                            <td>
                                <button onClick={() => handleApprove(e)} className='btn btn-success btn-sm me-2'>Approve</button>
                                <button onClick={() => handleDeny(e)} className='btn btn-danger btn-sm'>Deny</button>
                            </td>



                        </tr>


                    )
                })}



            </tbody>
        </Table>
    );
}

export default ManageClasses;