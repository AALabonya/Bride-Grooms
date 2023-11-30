
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./SuccessCounter.css"
const SuccessCounter = () => {
   
    return (
        <div className="">
            <Helmet>
        <title>BrideAndGrooms | Success Counter</title>
      </Helmet>
            <SectionTitle subHeading={"Check it out"} heading={"Success Counter"} />
            <div className="featured-item bg-fixed text-white opacity-110 pt-8 my-20 lg:h-[500px]">

                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                        <div className="mx-auto grid justify-center grid-cols-3 text-center lg:grid-cols-3 lg:gap-60">

                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                                <img src="https://i.ibb.co/vVyCfmV/girl-cartoon-characters-3.jpg" alt="" className="rounded-full h-32" />
                                <div className="rounded-full border ">
                                  <h1>1130</h1>
                                </div>
                                <p className="text-2xl lg:text-2xl">Girls Biodata</p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                            <img src="https://i.ibb.co/k3Pjwry/channels4-profile.jpg" alt="" className="rounded-full h-32" />
                            <div className="rounded-full border ">
                               <h1>1500</h1>
                                </div>
                                <p className="text-2xl lg:text-2xl">Boys Biodata</p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                            <img src="https://i.ibb.co/vm04G4v/couple-bride-groom-cartoon-design-wedding-marriage-love-celebration-invitation-engagement-theme-vect.webp" alt="" className="rounded-full h-32" />
                            <div className="rounded-full border ">
                             <h1>2000</h1>
                                </div>
                                <p className="text-2xl lg:text-4xl">Marriages</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default SuccessCounter;
