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
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white rounded-lg">
                    <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Manager Users Info</h2>
                    <p className="text-xl font-semibold leadi text-center">[Table]</p>
                    <div className="flex justify-center bg-red-300 max-w-lg rounded-md mx-auto mt-5 mb-20">
                        <div className="flex justify-center rounded-md">
                            <div className="relative py-2">
                                <label htmlFor="Search" className="sr-only"> Search </label>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="  Search by name..."
                                    className="w-[400px] rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto mx-auto flex justify-center max-w-8xl px-5">
                        <table className="min-w-full mx-auto text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-26" />
                            </colgroup>
                            <thead className="dark:bg-gray-700 rounded-lg mb-5">
                                <tr className="text-left text-xl bg-slate-200 rounded-lg mb-5">
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
                                        <td className="p-1 w-[10px] mr-10 rounded-md">
                                            <p className="py-2 px-4 bg-green-600 font-bold text-lg text-black mr-24 rounded-md">User</p>

                                        </td>

                                        <td className="p-3">


                                            <button className="text-lg bg-red-300  text-black  font-bold py-2 px-2 rounded-md">Make Admin</button>


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
