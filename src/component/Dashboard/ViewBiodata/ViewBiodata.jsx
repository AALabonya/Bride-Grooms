import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ViewBiodata = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: allBioData = [], refetch } = useQuery({
        queryKey: ['allBioData', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allBioData/${user?.email}`)
            return res.data;
        }

    })
    console.log(allBioData);

    const requestedData = {
        biodataId: allBioData?.biodataId,
        name: allBioData?.name,
        userEmail: allBioData?.userEmail,


    }

    const requestToPremium = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be a premium member",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, request for it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post("/premiumRequest", requestedData)
                refetch()
                Swal.fire({
                    title: "Request Send!",
                    text: "Successfully send request.",
                    icon: "success"
                }) 
            }
            
        });
    }

    return (
        <div>
            <Helmet>
        <title>BrideAndGrooms | View Biodata</title>
      </Helmet>
            <section className="dark:bg-gray-800 dark:text-gray-100 bg-orange-50 ">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">View BioData</h2>
                    </div>
                    <div className="grid lg:gap-1 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">{allBioData.name}</h3>
                            <div className="mt-5 space-y-5">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <img src="https://rn53themes.net/themes/matrimo/images/icon/pro-age.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">BiodataType: {allBioData.biodataType}</h4>
                                        <p className=" dark:text-gray-400">Age: {allBioData.age}</p>
                                        <p className=" dark:text-gray-400">Date of Birth: {allBioData.date}</p>
                                        <p className=" dark:text-gray-400">Height: {allBioData.height}</p>
                                        <p className=" dark:text-gray-400">Weight: {allBioData.weight}</p>
                                        <p className=" dark:text-gray-400">Race: {allBioData.race}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <img src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Address</h4>
                                        <p className=" dark:text-gray-400">Permanent Division: {allBioData.permanentDivision}</p>
                                        <p className=" dark:text-gray-400">Present Division: {allBioData.presentDivision}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <img src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Occupation: {allBioData.occupation}</h4>
                                        <p className=" dark:text-gray-400">Email: {allBioData.userEmail}</p>
                                        <p className=" dark:text-gray-400">Mobile Number: {allBioData.mobileNumber}</p>
                                        <p className=" dark:text-gray-400">ContactEmail: {allBioData.contactEmail}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <img src="https://rn53themes.net/themes/matrimo/images/icon/pro-age.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Parents</h4>
                                        <p className="mt-1 dark:text-gray-400">Father Name: {allBioData.fathersName}</p>
                                        <p className="mt-1 dark:text-gray-400">Mather Name: {allBioData.mothersName}</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <img src="https://rn53themes.net/themes/matrimo/images/icon/pro-age.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi dark:text-gray-50">Expected Partner</h4>
                                        <p className=" dark:text-gray-400">Expected Partner Age: {allBioData.expectedPartnerAge}</p>
                                        <p className=" dark:text-gray-400">Expected Partner Height: {allBioData.expectedPartnerHeight}</p>
                                        <p className=" dark:text-gray-400">Expected Partner Weight: {allBioData.expectedPartnerWeight}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src={allBioData.image} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>

                       {allBioData?.premiumRequestStatus === "pending" ?
                       <div className="flex justify-center">
                        <button disabled className="bg-pink-300 px-4 py-2 rounded-md text-white font-semibold uppercase">Request Pending</button>
                    </div>
                    :
                     <div className="flex justify-center">
                     <button onClick={requestToPremium} className="bg-pink-700 px-4 py-2 rounded-md text-white font-semibold uppercase">Make bioData to Premium</button>
                 </div>
                       }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewBiodata;