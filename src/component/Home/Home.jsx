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
import ClassVideo from "../ClassVideo/ClassVideo";
import Review from "../Review/Review";


const Home = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <OurClasses></OurClasses>
            <Instructors></Instructors>
            <TimeShift></TimeShift>
            <ClassVideo></ClassVideo>
            <OurGoal></OurGoal>
            <HowToJoin></HowToJoin>
            <OurAllStudent></OurAllStudent>
        
            <FAQ></FAQ>
            
        </Container>
    );
};

export default Home;