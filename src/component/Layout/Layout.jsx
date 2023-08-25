import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import { Outlet } from "react-router-dom";
import './Layout.css'
import Footer from "../Footer/Footer";
import { useState } from "react";

const Layout = () => {
    const [ screenHeight, setScreenHeight] = useState(window.screenY);
    console.log(screenHeight)
    return (
        <Container className="px-0 layout" fluid>
            <CustomNavbar></CustomNavbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </Container>
    );
};

export default Layout;