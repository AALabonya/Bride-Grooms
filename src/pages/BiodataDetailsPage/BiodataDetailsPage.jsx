import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../Loading";
import { Helmet } from "react-helmet-async";

const BiodataDetailsPage = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure =useAxiosSecure()
    const { id } = useParams()
    const{user}=useAuth()
     console.log(user?.email);
    console.log(id);
    const { data: allBioData = [] ,isLoading} = useQuery({
        queryKey: ['bioDataAll'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bioDataAll')
            return res.data;
        }

    })
    console.log(allBioData);
    const detailsData = allBioData.find(data => data._id === id)
    console.log(detailsData);
    const basedOnUserGender = allBioData.filter(data => data.biodataType === detailsData.biodataType && data._id !== id)
    console.log(basedOnUserGender);
    const premiumMember = allBioData.find(premium=> premium.userEmail === user?.email && premium.accountType ==="premium")
    console.log(premiumMember);

    const addToFavorite = async()=>{
            const favoriteInfo={
                name:detailsData?.name,
                biodataId:detailsData?.biodataId,
                occupation:detailsData?.occupation,
                permanentDivision:detailsData?.permanentDivision
            }
            console.log(favoriteInfo);
            const res = await axiosSecure.post("/addToFavorite", favoriteInfo)
            console.log(res.data);
             if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your favorite bio data Added!",
                    icon: "success"
                  });
             }else{
                Swal.fire({
                    title: "Sorry!",
                    text: "Already Added!",
                    icon: "error"
                  });
             }
    }
    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
             <Helmet>
        <title>BrideAndGrooms | Biodata Details</title>
      </Helmet>
            <section className="dark:bg-gray-800 dark:text-gray-100 mt-10">
                <div className="flex gap-12 justify-center mx-auto">
                    <div className="rounded-lg bg-white">
                        <h1 className="text-center mt-4 font-semibold text-lg"> Biodata Details Information</h1>
                        <div className="p-5 mx-auto sm:p-10 md:p-4 dark:bg-gray-800 dark:text-gray-100">
                            <div className="flex flex-col max-w-[600px] mx-auto overflow-hidden rounded">
                                <img src={detailsData?.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                                <div className="p-11 pb-4 m-4 mx-auto -mt-24 lg:max-w-6xl sm:px-10 sm:mx-600 lg:rounded-md dark:bg-gray-900">
                                    <div className=" bg-white">
                                        <a rel="noopener noreferrer"  className="inline-block text-center lg:ml-24 text-2xl font-semibold sm:text-3xl">{detailsData?.name}</a>
                                        <p className="text-xs text-center dark:text-gray-400">Age: {detailsData?.age}</p>
                                        <p className="text-xs text-center dark:text-gray-400">Biodata Id: {detailsData?.biodataId}</p>

                                        <p className="text-xs text-center dark:text-gray-400">Occupation:{detailsData?.occupation}</p>
                                    </div>
                                   
                                    <div className="flex justify-between  gap-10 items-center">
                                    <div >
                                            <p className="text-gray-700 text-sm">Height: {detailsData?.height}</p>
                                        </div>

                                        <div >
                                             <p className="text-gray-700 text-sm">Weight: {detailsData?.weight}</p>
                                        </div>
                                
                                    </div>
                                    <div className="flex justify-between  gap-10 items-center">
                                    <div >
                                            <p className="text-gray-700 text-sm">Date: {detailsData?.date}</p>
                                        </div>

                                        <div >
                                             <p className="text-gray-700 text-sm">Biodata Type: {detailsData?.biodataType}</p>
                                        </div>
                                
                                    </div>
                                    <div className="flex justify-between  gap-10 items-center">
                                    <div >
                                            <p className="text-gray-700 text-sm">Permanent Division: {detailsData?.permanentDivision}</p>
                                        </div>

                                        <div >
                                             <p className="text-gray-700 text-sm">Present Division: {detailsData?.presentDivision}</p>
                                        </div>
                                
                                    </div>
                                    <div className="flex justify-between  gap-5">
                                    <div >
                                            <p className="text-gray-700 text-sm">Contact Email: {detailsData?.contactEmail}</p>
                                        </div>

                                        <div >
                                             <p className="text-gray-700 text-sm">User Email: {detailsData?.userEmail}</p>
                                        </div>
                                
                                    </div>
                                    <div className="flex justify-between  gap-5 items-center">
                                    <div >
                                            <p className="text-gray-700 text-sm">Race: {detailsData?.race}</p>
                                        </div>

                                        <div >
                                             <p className="text-gray-700 text-sm">Mother: {detailsData?.mothersName}</p>
                                        </div>
                                
                                    </div>
                                    <div className="flex justify-between  gap-5 items-center">
                                    <div >
                                            <p className="text-gray-700 text-sm">Father: {detailsData?.fathersName}</p>
                                        </div>

                                        <div >
                                             <p className="text-gray-700 text-sm">Mother: {detailsData?.mothersName}</p>
                                        </div>
                                
                                    </div>
                                </div>
                                     <button onClick={addToFavorite} className="bg-green-400 mb-3 py-2 px-3 text-white rounded-sm">Add to Favorite </button>
                                {  premiumMember? <><div>
                                    <span className="relative flex justify-center">
                                        <div
                                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                                        ></div>
    
                                        <span className="relative z-10 bg-white px-6">Contact Information</span>
                                    </span>
                                    <div className="flow-root mt-5">
                                        <dl className="-my-3 divide-y divide-gray-100 text-lg">
                                            <div
                                                className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                            >
                                                <dt className="font-medium text-gray-900">Email</dt>
                                                <dd className="text-gray-700 sm:col-span-2">{detailsData?.contactEmail}</dd>
                                            </div>
    
                                            <div
                                                className="grid grid-cols-1 gap-1 py-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
                                            >
                                                <dt className="font-medium text-gray-900">Contact Number</dt>
                                                <dd className="text-gray-700 sm:col-span-2">{detailsData?.mobileNumber}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div> </>
                                :
                                <><Link to={`/checkout/${detailsData?.biodataId}`}><button className="text-center w-full flex justify-center bg-amber-500 rounded-sm py-2 px-3 text-white">
                                Request Contact information</button></Link></>
                                }
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-center font-semibold text-2xl">Similar Biodata Based On Gender</h1>
                        <div className="mt-10 lg:mt-42 lg:col-start-1 lg:row-start-1">

                            <div className="grid grid-cols-3 gap-2">
                                {
                                    basedOnUserGender.map(gender => <a key={gender.Id} href="#" className="block">
                                        <img
                                            alt="Signage"
                                            src={gender.image}
                                            className="w-[300px] rounded-bl-3xl rounded-tr-2xl object-cover sm:h-64 lg:h-72"
                                        />

                                        <div className="mt-4 text-center">
                                            <h1 className="text-base font-semibold">{gender.name}</h1>
                                            <div className="flex justify-evenly">
                                            <p>BiodataId: {gender.biodataType}</p>
                                              <p>BiodataId:{gender.biodataId}</p>
                                            </div>
                                        </div>

                                    </a>)
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BiodataDetailsPage;

// name: data.name,
//                     biodataType: data.biodataType,
//                     date: data.date,
//                     height: data.height,
//                     weight: data.weight,
//                     occupation: data.occupation,
//                     race: data.race,
//                     fathersName: data.fathersName,
//                     age: parseInt(data.age),
//                     permanentDivision: data.permanentDivision,
//                     presentDivision: data.presentDivision,
//                     expectedPartnerAge: parseInt(data.expectedPartnerAge),
//                     mothersName: data.mothersName,
//                     expectedPartnerHeight: data.expectedPartnerHeight,
//                     expectedPartnerWeight: data.expectedPartnerWeight,
//                     contactEmail: data.contactEmail,
//                     mobileNumber: data.mobileNumber,
//                     image,
//                     userEmail:user ?.email