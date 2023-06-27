import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <Container className="px-0" fluid>
            <CustomNavbar></CustomNavbar>
            <Outlet></Outlet>
        

        </Container>
    );
};

export default Layout;