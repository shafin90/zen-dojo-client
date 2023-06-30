import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './ManageClasses.css';

function ManageClasses() {




    const [pendingClass, setPendingClass] = useState([]);
    const [approvedClass, setApprovedClass] = useState([]);
    const [showClass, setShowClass] = useState([]);




    useEffect(() => {
        fetch('http://localhost:5000/getting_pending_classes')
            .then(res => res.json())
            .then(data => setPendingClass(data))
    }, [])



    useEffect(() => {
        fetch('http://localhost:5000/getting_approved_classes')
            .then(res => res.json())
            .then(data => setApprovedClass(data))
    }, [])



    useEffect(()=>{
        setShowClass([...pendingClass,...approvedClass])
    },[])




    // action for approve a class==================
    const handleApprove = (item) =>{
        
        // deleting the class from the pending class database========
        fetch(`http://localhost:5000/delete_class/${item._id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
        
        // enlist the class at approve database=======
        fetch(`http://localhost:5000/approve_class`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))


    }




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
                                <button onClick={()=>handleApprove(e)} className='btn btn-success btn-sm me-2'>Approve</button>
                                <button className='btn btn-danger btn-sm'>Deny</button>
                            </td>
                        


                        </tr>


                    )
                })}



            </tbody>
        </Table>
    );
}

export default ManageClasses;