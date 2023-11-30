import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useManageUser = () => {
      const axiosPublic =useAxiosPublic()
    const {data: bioData=[], refetch, isLoading}=useQuery({
        queryKey:['bioDataAll'],
        queryFn: async()=>{
            const res = await axiosPublic.get("/bioDataAll")
            return res.data
        }
    })
    return[bioData,refetch, isLoading]
};
export default useManageUser;