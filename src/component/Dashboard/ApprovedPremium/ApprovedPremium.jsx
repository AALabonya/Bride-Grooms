import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApprovedPremium = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { data: premiumRequest = [], refetch } = useQuery({
        queryKey: ['premiumRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get("/premiumRequest")
            return res.data;
        }

    })

     const handleRequest = async(id)=>{
        const res = await axiosSecure.patch(`/approvePremium?id=${id}`)
        console.log(res.data);
        if(res.data.modifiedCount > 0){
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your approve this premium membership",
                showConfirmButton: false,
                timer: 1500
              })&& refetch()
        }
     }

    return (
        <div>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white">
                    <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Premium Approval Request</h2>
                    <p className="text-xl font-semibold leadi text-center mb-20">[Table]</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">Biodata Id</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    premiumRequest.map(request =>
                                        <tr key={request._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                            <td className="p-3">
                                                <p>{request.bioDataId}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{request.name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{request.userEmail}</p>

                                            </td>

                                            {request?.premiumRequestStatus === "approved" ? <td className="p-1">
                                                    <p className="p-1 bg-green-500 rounded-md text-center text-white text-lg">Premium </p>

                                            </td>:
                                            <td className="p-1">
                                            <p className="p-1 bg-yellow-500 rounded-md text-center text-white text-lg">Pending</p>

                                    </td>}
                                           {
                                            request?.premiumRequestStatus==="approved"? <td className="p-1">
                                            <button  disabled className="p-1 bg-gray-200 rounded-md text-center text-white text-lg">Approved</button>

                                    </td>:
                                     <td >
                                     <button onClick={()=>handleRequest(request.bioDataId)} className="p-1 bg-pink-500 rounded-md text-center text-white text-lg">Approve</button>

                             </td>
                                           }

                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            

        </div>
    );
};

export default ApprovedPremium;