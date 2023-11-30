
const About = () => {
    return (
        <div className="">
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-8xl mx-auto overflow-hidden rounded">
                    <div className="w-full">
                        <img src="https://castella.qodeinteractive.com/wp-content/uploads/2022/11/h5-parallax-01.jpg" alt="" className="relative w-full h-72 sm:h-96 dark:bg-gray-500" />
                        <h1 className="absolute font-bold lg:text-9xl top-52 ml-20 text-4xl lg:top-64 text-center flex justify-center lg:ml-[500px]">About Us</h1>
                    </div>
                    <div className="top-[75%] md:top-[55%] absolute">
                        <div className="md:flex md:mx-auto md:justify-center md:ml-60">
                            <div className="flex justify-center gap-5 md:gap-10">
                                <div className="md:w-72 md:h-52 w-20 h-52 border bg-white ">

                                    <div className="flex justify-center"> <img src="https://rn53themes.net/themes/matrimo/images/icon/prize.png" alt="" className="w-10 h-8 md:w-22 md:h-20 md:mt-5" /></div>

                                    <h1 className="text-center sm:text-xs">Genuine profiles</h1>
                                    <h1 className="text-center sm:text-xs">The most trusted wedding matrimony brand</h1>

                                </div>
                                <div className="md:w-72 md:h-52 w-20 h-52 border bg-white ">

                                    <div className="flex justify-center"> <img src="https://rn53themes.net/themes/matrimo/images/icon/trust.png" alt="" className="w-10 h-8 md:w-22 md:h-20 md:mt-5" /></div>

                                    <h1 className="text-center">Most trusted</h1>
                                    <h1 className="text-center">The most trusted wedding matrimony brand</h1>

                                </div>
                                <div className="md:w-72 md:h-52 w-20 h-52 border bg-white ">

                                    <div className="flex justify-center"> <img src="https://rn53themes.net/themes/matrimo/images/icon/rings.png" alt="" className="md:w-[80px] md:h-20 md:mt-5 w-[40px]" /></div>

                                    <h1 className="text-center">2000+ weddings</h1>
                                    <h1 className="text-center">The most trusted wedding matrimony brand</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="lg:mt-32  mt-[200px]">
                <div className="">
                    <div className="hero-content mx-aut0 hero-content flex-col lg:flex-row">
                        <div className="flex justify-center lg:ml-48">
                            <div className="lg:w-1/2 relative ml-5">
                                <img src="https://rn53themes.net/themes/matrimo/images/about/1.jpg" className="w-2/3 rounded-lg shadow-2xl" />
                                <img src="https://rn53themes.net/themes/matrimo/images/couples/20.jpg" alt="" className="w-1/2 h-72 absolute right-2 top-1/2 border-8 border-white rounded-lg" />
                            </div>
                            <div className="lg:w-1/2 space-y-2">
                                <h3 className="lg:text-3xl text-orange-500 font-bold">About Us</h3>
                                <h1 className="lg:text-5xl font-bold lg:w-[370px]">BrideAndGrooms</h1>
                                <p className="py-4 lg:w-[440px]">Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <p className="lg:w-[450px]">At Matrimony, we believe in fostering meaningful connections that last a lifetime. Our mission is to help individuals find their perfect life partners and create enduring relationships built on trust, respect, and compatibility </p>
                                <p className="lg:w-[450px]">Services Offered
                                    Matchmaking: We provide personalized matchmaking services catering to various communities, preferences, and backgrounds.
                                    Profiles: Members can create detailed profiles highlighting their interests, values, and preferences.
                                    Compatibility Matching: Utilizing advanced algorithms, we facilitate matches based on compatibility factors, enhancing the likelihood of successful unions.
                                    Privacy & Security: Ensuring the utmost confidentiality and safety of our members information is our top priority</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;