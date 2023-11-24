import SuccessCounter from "../../component/Counter/SuccessCounter";
import PremiumCard from "../../component/HomeCard/PremiumCard";
import HowItWorks from "../../component/HowItWorks/HowItWorks";
import SuccessStory from "../../component/SuccessStory/SuccessStory";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <PremiumCard/>
            <HowItWorks/>
            <SuccessCounter/>
            <SuccessStory/>
        </div>
    );
};

export default Home;