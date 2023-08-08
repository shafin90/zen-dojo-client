import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import { Outlet } from "react-router-dom";
import './Layout.css'
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <Container className="px-0 layout" fluid>
            <CustomNavbar></CustomNavbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </Container>
    );
};

export default Layout;