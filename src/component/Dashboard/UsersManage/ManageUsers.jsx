import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const ManageUsers = () => {
    const axiosPublic = useAxiosPublic()

    const { data: manageUser = [], } = useQuery({
        queryKey: ['manageUser'],
        queryFn: async () => {
            const res = await axiosPublic.get("/manageUsers")
            return res.data;
        }

    })
    console.log(manageUser);
    return (
        <div>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white">
                    <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Manager Users Info</h2>
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
                                    <th className="p-3">User Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Make Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manageUser.map(manageData => <tr key={manageData._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>{manageData.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{manageData.email}</p>
                                        </td>
                                        <td className="p-1 w-[10px] mr-5 rounded-md">
                                            <p className="py-2 px-3 bg-green-600 text-white mr-10 rounded-md">User</p>

                                        </td>

                                        <td className="p-1">


                                            <button className="text-lg bg-pink-600 text-white py-2 px-2 rounded-md">Make Admin</button>


                                        </td>

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

export default ManageUsers;
