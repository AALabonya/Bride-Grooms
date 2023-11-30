
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./SuccessCounter.css"
const SuccessCounter = () => {
   
    return (
        <div className="">
          
            <SectionTitle subHeading={"Check it out"} heading={"Success Counter"} />
            <div className="featured-item bg-fixed text-red-900 font-bold opacity-110 pt-8 my-20 lg:h-[500px]">

             
               
                        <div className="mx-auto flex justify-center lg:gap-52 h-[400px]">

                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                                <img src="https://i.ibb.co/vVyCfmV/girl-cartoon-characters-3.jpg" alt="" className="rounded-full h-24 md:h-32" />
                                <div className="rounded-full border mt-5">
                                  <h1 className="text-center">1130</h1>
                                </div>
                                <p className="text-lg lg:text-2xl text-center">Girls Biodata</p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                            <img src="https://i.ibb.co/k3Pjwry/channels4-profile.jpg" alt="" className="rounded-full h-24 md:h-32" />
                            <div className="rounded-full border mt-5">
                               <h1 className="text-center">1500</h1>
                                </div>
                                <p className="text-lg lg:text-2xl text-center">Boys Biodata</p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                            <img src="https://i.ibb.co/vm04G4v/couple-bride-groom-cartoon-design-wedding-marriage-love-celebration-invitation-engagement-theme-vect.webp" alt="" className="rounded-full h-24 md:h-32" />
                            <div className="rounded-full border mt-5">
                             <h1 className="text-center">2000</h1>
                                </div>
                                <p className="text-lg lg:text-2xl text-center">Marriages</p>
                            </div>
                        </div>
                   

           
            </div>
        </div>
    );
}

export default SuccessCounter;
