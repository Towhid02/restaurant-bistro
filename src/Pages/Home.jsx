import { Helmet } from "react-helmet-async";
import Banner from "../Home/Banner";
import Chef from "../Home/Chef";
import Features from "../Home/Features";
import Menu from "../Home/Menu";
import Swipers from "../Home/Swipers";
import Testimonials from "../Home/Testimonials";
import About from "../Home/About";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Towhid Restaurant | Home</title>
      </Helmet>
            <Banner></Banner>
            <Swipers></Swipers>
            <About></About>
            <Menu></Menu>
            <Chef></Chef>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;