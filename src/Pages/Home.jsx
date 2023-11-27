import Banner from "../Home/Banner";
import Chef from "../Home/Chef";
import Features from "../Home/Features";
import Menu from "../Home/Menu";
import Swipers from "../Home/Swipers";
import Testimonials from "../Home/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swipers></Swipers>
            <Menu></Menu>
            <Chef></Chef>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;