import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BioDatas = () => {
    const axiosPublic =useAxiosPublic()
    const { data:allBioData = [] } = useQuery({
        queryKey: ['premiumRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allBioData')
            return res.data;
        }

    })
     console.log(allBioData);
    return (
        <div className="flex justify-center">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 mx-auto">
          {
            allBioData.map(all=> <div key={all._id} className="max-w-sm p-3 bg-white space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div>
                <img src={all.image} alt="" className="w-full h-[400px] dark:bg-gray-500" />
                <h4 className="mb-1 text-xl font-semibold text-center">BiodataId:{all.biodataId} </h4>
                <p className="text-sm dark:text-gray-400 text-center">BiodataType: {all.biodataType}</p>
                <p className="text-sm dark:text-gray-400 text-center">Age :{all.age}</p>
                <p className="text-sm dark:text-gray-400 text-center">Permanent Division: {all.permanentDivision}</p>
                <p className="text-sm dark:text-gray-400 text-center">Occupation :{all.occupation}</p>
            </div>
            <div className="flex w-full justify-center">
                <button className="text-white font-bold py-2 rounded-md w-full bg bg-lime-700">View Profile</button>
            </div>
        </div>)
            }
          </div>
            
        </div>

    );
};

export default BioDatas;