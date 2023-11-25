
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./SuccessCounter.css"
import CountUp from 'react-countup';
const SuccessCounter = () => {
   
    return (
        <div className="">
            <SectionTitle subHeading={"Check it out"} heading={"Success Counter"} />
            <div className="featured-item bg-fixed text-white opacity-110 pt-8 my-20 lg:h-[500px]">

                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                        <div className="mx-auto grid justify-center grid-cols-3 text-center lg:grid-cols-3 lg:gap-60">

                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                               
                                <div className="rounded-full border ">
                                <CountUp start={0} end={1300} delay={3}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                </div>
                                <p className="text-2xl lg:text-2xl">Girls Biodata</p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                            <div className="rounded-full border ">
                                <CountUp start={0} end={1500} delay={3}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                </div>
                                <p className="text-2xl lg:text-2xl">Boys Biodata</p>
                            </div>
                            <div className="flex flex-col justify-start m-2 lg:m-6 text-2xl lg:text-2xl">
                            <div className="rounded-full border ">
                                <CountUp start={0} end={2000} delay={3}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                                </div>
                                <p className="text-2xl lg:text-4xl">Marriages</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
        //   <section>
        //     <h2>Success Counter</h2>
        //     <div>
        //       <p>Total Biodata: {totalBiodata}</p>
        //       <button onClick={incrementTotalBiodata}>Increment Total Biodata</button>

        //       <p>Girls' Biodata: {girlsBiodata}</p>
        //       <button onClick={incrementGirlsBiodata}>Increment Girls' Biodata</button>

        //       <p>Boys' Biodata: {boysBiodata}</p>
        //       <button onClick={incrementBoysBiodata}>Increment Boys' Biodata</button>

        //       <p>Completed Marriages: {completedMarriages}</p>
        //       <button onClick={incrementCompletedMarriages}>Increment Completed Marriages</button>
        //     </div>
        //   </section>
    );
}

export default SuccessCounter;
