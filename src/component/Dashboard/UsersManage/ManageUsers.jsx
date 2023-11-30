
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

import Loading from "../../../pages/Loading";
import {  useState } from "react";
import { Helmet } from "react-helmet-async";


const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()
    const [search, setSearch] = useState('')
    const { data: manageUser = [], refetch, isLoading } = useQuery({
        queryKey: ['manageUsers',search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manageUsers?search=${search}`)
            return res.data
        }
    })

console.log(manageUser);
//     const [displayData, setDisplayData] = useState([]);
// console.log(displayData);
//     useEffect(() => {
//         setDisplayData(manageUser);
//     }, [isLoading,manageUser])
   

    const handleSearch=e=>{
        e.preventDefault()
        const searchText = e.target.search.value
        console.log(searchText);
        setSearch(searchText)
   
      
    }
    

    const handleMakeAdmin = manageData => {
        console.log("admin" ,manageData);
        axiosSecure.patch(`/users/admin/${manageData._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakePremium = manageData => {
        console.log("hhhhhh",manageData);
        Swal.fire({
            title: "Are you sure?",
            text: "Make the client premium!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, request for it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(email)
                axiosSecure.patch(`/managesUserPremium/${manageData}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                            });
                           
                        }
                    })
            }
        });
    }




    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <Helmet>
        <title>BrideAndGrooms | Manage Users</title>
      </Helmet>
            <div className="p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white rounded-lg">
                <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Manager Users Info</h2>
                <p className="text-xl font-semibold leadi text-center">[Table]</p>
                <div className="flex justify-center bg-red-300 max-w-lg rounded-md mx-auto mt-5 mb-20">
                        <div className="flex justify-center rounded-md p-3 ">
                          
                                <form onSubmit={handleSearch} >
                                    <input
                                    type="text"
                                    name="search"
                                    placeholder="  Search by name..."
                                    className="w-[400px] rounded-md shadow-2xl shadow-rose-900 pe-10 sm:text-sm mr-1 py-3 border
                                    border-slate-900"
                                />

                                
                                    <button type="submit" value="Search" className="text-gray-900 font-semibold border
                                     border-slate-900 px-1 rounded-md py-1.5 mt-1 hover:text-gray-700 ">
                                         Search
                                      
                                    </button>
                                </form>
                         
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
                                <th className="p-3">Make Premium</th>
                                <th className="p-3">Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              manageUser?.map(manageData => <tr key={manageData._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{manageData.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{manageData.email}</p>
                                    </td>

                                    <td className="p-1 w-[10px] mr-10 rounded-md">{manageData.accountType === "premium" ? <button className=" bg-yellow-600 px-4 border-2 text-white py-2 rounded-md">Premium</button> 
                                    :
                                           <button onClick={() => handleMakePremium(manageData.email)}
                                            className="  bg-stone-700  text-white px-5  rounded-md py-1 text-lg shadow-2xl border-2 shadow-red-700">
                                            user
                                        </button>}
                                    </td>


                                    <td className="text-lg ml-5 py-1 p-2 " >{manageData.role === "admin" ? <div className="shadow-2xl border-2 shadow-red-800 text-black bg-red-200 w-24 h-8 flex 
                                    rounded-md"><MdAdminPanelSettings className="text-pink-500"/>Admin</div> :
                                        <button onClick={() => handleMakeAdmin(manageData)}
                                            className="h-12  bg-fuchsia-200 border-2 rounded-md items-center shadow-2xl shadow-red-700">
                                            <p><FaUsers className="w-6 h-4 text-pink-500"/> Make Admin</p>
                                        </button>}
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default ManageUsers;
