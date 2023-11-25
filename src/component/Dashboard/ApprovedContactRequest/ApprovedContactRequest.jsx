import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ApprovedContactRequest = () => {
    const axiosPublic =useAxiosPublic()

    const { data:premiumRequest = [], } = useQuery({
        queryKey: ['premiumRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get("/premiumRequest")
            return res.data;
        }

    })
    console.log(premiumRequest);
    return (
        <div>
            
        </div>
    );
};

export default ApprovedContactRequest;