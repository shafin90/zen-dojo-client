import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import ManageClasses from "../ManageClasses/ManageClasses";
import ManageUsers from "../ManageUsers/ManageUsers";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Dashboard = () => {



    const { user } = useContext(authContext);


    if (!user) {
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }



    const [userInfo, setUserInfo] = useState([]);


    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/gettingUserInfo')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])


    console.log(userInfo)

    const loggedInUser = userInfo.find(e => e.email == user.email)



    if (!loggedInUser) {
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <Container fluid className="h-100">
            <Row className="h-100">
                <Col className="bg-dark h-md-100 " sm={12} md={2}>
                    <h1 className="text-white text-center mt-4 mb-5">
                        {loggedInUser.status == 'instructor' ? 'Instructor' : `${loggedInUser.status == 'admin' ? 'Admin' : 'student'}`}
                    </h1>



                    <ul className="ps-5">


                        <li className="mb-2"><Link className="text-white text-decoration-none" to={loggedInUser.status == 'admin' ? '/dashboard/manage_users' : `${loggedInUser.status == 'instructor' ? '/dashboard/addClass' : '/dashboard/selected_class'}`}>{loggedInUser.status == 'admin' ? 'Manage users' : `${loggedInUser.status == 'instructor' ? 'Add Class' : 'Selected Class'}`}</Link></li>


                        <li className="mb-2"><Link className="text-white text-decoration-none" to={loggedInUser.status == 'admin' ? '/dashboard/manage_classes' : '/dashboard/myClass'}>{loggedInUser.status == 'admin' ? 'Manage Classes' : `${loggedInUser.status == 'instructor' ? 'My Classes' : 'enrolled Class'}`}</Link></li>


                        <li className="mb-2"><Link className="text-white text-decoration-none" to="/">Home</Link></li>


                        <li className="mb-2"><Link className={loggedInUser.status=="instructor"?"text-white text-decoration-none":"d-none"} to="/dashboard/addbioofinstructor ">Add Bio</Link></li>











                    </ul>
                </Col>



                <Col sm={12} md={10}>



                    <Outlet></Outlet>











                </Col>
            </Row>

        </Container>
    );
};

export default Dashboard;