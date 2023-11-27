import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const PremiumHome = () => {
    const axiosPublic =useAxiosPublic()
    const { data:allBioData = [], isLoading } = useQuery({
        queryKey: ['premiumRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allBioData')
            return res.data;
        }

    })
     console.log(allBioData);

     if(isLoading){
        return <p>Loading...........................</p>
     }

     const premiumData =allBioData.filter(all=>all.accountType ==='premium')
    return (
        <div>
            <SectionTitle subHeading={"profiles"} heading={"premium member"}/>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mx-auto">
          {  
          premiumData?.slice(0,6).map(premium=><div key={premium._id} className="max-w-sm p-3 bg-white space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div>
              <img src={premium.image} alt="" className="w-full h-[400px] dark:bg-gray-500" />
              <h4 className="mb-1 text-xl font-semibold text-center">BiodataId:{premium.biodataId} </h4>
              <p className="text-sm dark:text-gray-400 text-center">BiodataType: {premium.biodataType}</p>
              <p className="text-sm dark:text-gray-400 text-center">Age :{premium.age}</p>
              <p className="text-sm dark:text-gray-400 text-center">Permanent Division: {premium.permanentDivision}</p>
              <p className="text-sm dark:text-gray-400 text-center">Occupation :{premium.occupation}</p>
          </div>
          <div className="flex w-full justify-center">
             <Link to={`/detailsPage/${premium._id}`}> <button className="text-white font-bold py-2 rounded-md w-full bg bg-lime-700">View Profile</button></Link>
          </div>
      </div>)
          }
            </div>
        </div>
        </div>
    );
};

export default PremiumHome;