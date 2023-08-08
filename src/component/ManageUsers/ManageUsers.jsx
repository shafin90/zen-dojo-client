import 'ka-table/style.css';

import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import './ManageUsers.css'


const ManageUsers = () => {



    const [userFromDatabase, setUserFromDatabase] = useState([]);


    // fetching data for the table from database=====================================
    const loadData = () => {
        fetch('https://zen-doj-server-shafin90.vercel.app/gettingUserInfo')
            .then(res => res.json())
            .then(data => setUserFromDatabase(data))

    }

    loadData();




    //declaring function  for making an user admin=======================================
    const makeAdmin = (id) => {
        console.log(123);


        fetch(`https://zen-doj-server-shafin90.vercel.app/updateUserInfo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'admin' })

        })
            .then(res => res.json())
            .then(data => console.log(data))




        loadData();

    }





    const makeInstructor = (id) => {
        console.log(123);


        fetch(`https://zen-doj-server-shafin90.vercel.app/updateUserInfo/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: 'instructor' })

        })
            .then(res => res.json())
            .then(data => console.log(data))





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
        <div>

            <Table striped bordered hover>
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
                                    <button className='btn btn-primary' onClick={() => makeAdmin(e._id)}> make admin</button>
                                    <button className='btn btn-warning ms-2' onClick={() => makeInstructor(e._id)}>make instructor</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>


        </div>
    );
};

export default ManageUsers;