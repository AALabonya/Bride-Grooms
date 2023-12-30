import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Loading from "../../pages/Loading";
import { motion } from "framer-motion"

const PremiumHome = () => {
    const axiosPublic =useAxiosPublic()

    const { data:allBioDataPremium = [], isLoading } = useQuery({
        queryKey: ['allBioDataPremium'],
        queryFn: async () => {
            const res = await axiosPublic.get("/allBioDataPremium")
            return res.data;
        }

    })


     if(isLoading){
        return <Loading></Loading>
     }

    return (
        <div>
            <SectionTitle subHeading={"Profiles"} heading={"premium member"}/>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mx-auto ">
          {  
          allBioDataPremium?.slice(0, 6).map(premium=><motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }} key={premium._id} className="max-w-sm p-3 border border-amber-700 bg-white space-y-4 shadow-2xl shadow-red-300  overflow-hidden rounded-lg dark:bg-gray-900 dark:text-gray-100">
          <div>
              <img src={premium.image} alt="" className="w-full h-[400px] dark:bg-gray-500" />
              <h4 className="mb-1 text-xl font-semibold text-center">Biodata Id:{premium.biodataId} </h4>
              <p className="text-sm dark:text-gray-400 text-center">Biodata Type: {premium.biodataType}</p>
              <p className="text-sm dark:text-gray-400 text-center">Age :{premium.age}</p>
              <p className="text-sm dark:text-gray-400 text-center">Permanent Division: {premium.permanentDivision}</p>
              <p className="text-sm dark:text-gray-400 text-center">Occupation :{premium.occupation}</p>
          </div>
          <div className="flex w-full justify-center">
             <Link to={`/detailsPage/${premium._id}`}> <button className="text-white font-bold py-2 rounded-md w-full bg bg-lime-700">View Profile</button></Link>
          </div>
      </motion.div>)
          }
            </div>
        </div>
        </div>
    );
};

export default PremiumHome;