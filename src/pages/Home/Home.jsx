import { Helmet } from "react-helmet-async";
import SuccessCounter from "../../component/Counter/SuccessCounter";
import HowItWorks from "../../component/HowItWorks/HowItWorks";
import PremiumHome from "../../component/PremiumCard/PremiumHome";
import SuccessStory from "../../component/SuccessStory/SuccessStory";
import Banner from "./Banner";
import ContactForm from "../Contact/ContactForm";

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
            <ContactForm/>
            <SuccessStory/>
        </div>
    );
};

export default Home;