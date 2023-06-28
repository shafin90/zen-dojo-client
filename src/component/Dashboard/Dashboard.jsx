import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import ManageClasses from "../ManageClasses/ManageClasses";
import ManageUsers from "../ManageUsers/ManageUsers";


const Dashboard = () => {

    
    return (
        <Container fluid className="h-100">
            <Row className="h-100">
                <Col className="bg-dark h-100" sm={12} md={2}>
                    <h1 className="text-white text-center mt-4 mb-5">
                        Admin
                    </h1>


                    <ul className="ps-5">
                        <li className="mb-2"><Link className="text-white text-decoration-none" to='/dashboard/manage_users'>Manage users</Link></li>
                        <li className="mb-2"><Link className="text-white text-decoration-none" to="/dashboard/manage_classes">Manage Classes</Link></li>
                        <li className="mb-2"><Link className="text-white text-decoration-none" to="/">Home</Link></li>
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