import { Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar/CustomNavbar";


const Layout = () => {
    return (
        <Container className="px-0" fluid>
            <CustomNavbar></CustomNavbar>
        

        </Container>
    );
};

export default Layout;