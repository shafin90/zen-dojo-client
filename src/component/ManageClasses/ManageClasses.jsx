import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './ManageClasses.css';
import { Container} from 'react-bootstrap';


function ManageClasses() {




    // State declaration of this component.
    const [pendingClass, setPendingClass] = useState([]);
    const [approvedClass, setApprovedClass] = useState([]);
    const [showClass, setShowClass] = useState([]);


    // merging the pending class and approved class==========
    const dataLoad = () => {
        setShowClass([...pendingClass, ...approvedClass])
    }

    // This fetch has been done to collect data from pending class. it will get merged with approve class and be putted into showClass
    
    
    
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_pending_classes')
            .then(res => res.json())
            .then(data => setPendingClass(data))




        // this fetch has been done to collect data from approved class. it will get merged with pending class and be putted into showClass
        fetch('https://zen-doj-server-shafin90.vercel.app/getting_approved_classes')
            .then(res => res.json())
            .then(data => setApprovedClass(data))

}, [pendingClass, approvedClass])





setTimeout(()=>{
    setShowClass([...pendingClass, ...approvedClass])
},1000)



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

      


        // This function load the data with  the  changed value that is happend now.
        dataLoad();


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


           

            // This function load the data with  the  changed value that is happend now.
            dataLoad();

        }
        else if (item.classStatus == 'approved') {
            // deleting the class from the approve class database========
            fetch(`https://zen-doj-server-shafin90.vercel.app/denied_from_approved_class/${item._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('approve theke hoise'))

           

            // This function load the data with  the  changed value that is happend now.
            dataLoad();

        }







    }



    console.log(showClass)


    return (
        <Container className='d-flex flex-column justify-content-center align-items-center h-100'>

            <h1 className='text-center fw-bold display-3 mb-5'>Approve or Deny class</h1>

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
                                    <button onClick={() => handleApprove(e)} className='btn no-border-radius text-white bg-blue btn-sm me-2'>Approve</button>
                                    <button onClick={() => handleDeny(e)} className='btn no-border-radius bg-red text-white btn-sm'>Deny</button>
                                </td>



                            </tr>


                        )
                    })}



                </tbody>
            </Table>



          
        </Container>
    );
}

export default ManageClasses;