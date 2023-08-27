import 'ka-table/style.css';

import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { useEffect, useState } from 'react';
import { Spinner, Table, ToastContainer } from 'react-bootstrap';
import './ManageUsers.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';


const ManageUsers = () => {
    // Initiate AOS
    useEffect(() => {
        AOS.init();
    }, [])


    // Declaring state for this  component.
    const [userFromDatabase, setUserFromDatabase] = useState([]);


    // Fetching data for the table from database=====================================
    const loadData = () => {
        fetch('http://localhost:5000/gettingUserInfo')
            .then(res => res.json())
            .then(data => setUserFromDatabase(data))

    }

    loadData();




    //declaring function  for making an user admin=======================================
    const makeAdmin = (id) => {
        console.log(123);


        fetch(`http://localhost:5000/updateUserInfo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'admin' })

        })
            .then(res => res.json())
            .then(data => console.log(data))

            // showing succesfull message
            toast.success('This person is now an admin!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });




        loadData();

    }





    const makeInstructor = (id) => {
        console.log(123);



        fetch(`http://localhost:5000/updateUserInfo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'instructor' })

        })
            .then(res => res.json())
            .then(data => console.log(data))

            // showing succesfull message
            toast.success('This user is now an instructor!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });




        loadData();


    }










    // loader===============================
    if (userFromDatabase.length == 0) {
        return (
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }





    return (
        <div className='d-flex flex-column justify-content-center align-items-center table-container h-100'>

            <h1 className='text-center fw-bold display-3 mb-4'>All Users</h1>

            <Table data-aos='fade-up' data-aos-duration="2000" className='use_info_table' striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userFromDatabase.map(e => {
                        return (
                            <tr key={e._id}>
                                <td><img className='table-img' src={e.img} /></td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.status}</td>
                                <td>
                                    <button className='btn no-border-radius bg-blue text-white px-2 btn-sm me-2' onClick={() => makeAdmin(e._id)}> make admin</button>
                                    <button className='btn btn no-border-radius bg-red text-white px-2 btn-sm' onClick={() => makeInstructor(e._id)}>make instructor</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>




            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </div>
    );
};

export default ManageUsers;