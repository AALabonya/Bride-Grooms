import SuccessCounter from "../../component/Counter/SuccessCounter";
import HowItWorks from "../../component/HowItWorks/HowItWorks";
import PremiumHome from "../../component/PremiumCard/PremiumHome";
import SuccessStory from "../../component/SuccessStory/SuccessStory";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
           <PremiumHome/>
            <HowItWorks/>
            <SuccessCounter/>
            <SuccessStory/>
        </div>
    );
};

export default Home;