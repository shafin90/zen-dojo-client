import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import OurClasses from "../OurClasses/OurClasses";
import Instructors from "../Instructors/Instructors";
import TimeShift from "../TimeShift/TimeShift";
import HowToJoin from "../HowToJoin/HowToJoin";
import OurAllStudent from "../OurAllStudent/OurAllStudent";
import FAQ from "../FAQ/FAQ";
import OurGoal from "../OurGoal/OurGoal";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <OurClasses></OurClasses>
            <Instructors></Instructors>
            <TimeShift></TimeShift>
            <OurGoal></OurGoal>
            <HowToJoin></HowToJoin>
            <OurAllStudent></OurAllStudent>
            <FAQ></FAQ>
            <Footer></Footer>
        </Container>
    );
};

export default Home;