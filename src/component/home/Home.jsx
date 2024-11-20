import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Success from "../Success/Success";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Success></Success>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;