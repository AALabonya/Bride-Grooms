import { Helmet } from "react-helmet-async";
import SuccessCounter from "../../component/Counter/SuccessCounter";
import HowItWorks from "../../component/HowItWorks/HowItWorks";
import PremiumHome from "../../component/PremiumCard/PremiumHome";
import SuccessStory from "../../component/SuccessStory/SuccessStory";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
              <Helmet>
        <title>BrideAndGrooms | Home</title>
      </Helmet>
            <Banner/>
           <PremiumHome/>
            <HowItWorks/>
            <SuccessCounter/>
            <SuccessStory/>
        </div>
    );
};

export default Home;