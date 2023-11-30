import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyContactRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments = [], refetch } = useQuery({

        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return res.data;
        }

    })
    console.log(payments);
    const handleDeleteFav = contact => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/payment/${contact._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
                <div>
                    <Helmet>
        <title>BrideAndGrooms | Contact Request</title>
      </Helmet>
                    <div>
                        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white">
                            <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Contact Request Information</h2>
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
                                            <th className="p-3"> Mobile No</th>
                                            <th className="p-3">Email</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            payments.map(contact =>
                                                <tr key={contact._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                    <td className="p-3">
                                                        <p>{contact.needId}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{contact.neededUser}</p>
                                                    </td>
                                                   {
                                                    contact?.status==="pending"?  <td className="p-3">
                                                    <p>-----</p>

                                                </td>:
                                                 <td className="p-3">
                                                 <p>{contact.mobileNumber}</p>

                                             </td>
                                                   }
                                                   {
                                                    contact?.status==="pending"? <td className="p-3">
                                                    <p>-----</p></td>
                                                    :
                                                     <td className="p-3">
                                                        <p>{contact.contactEmail}</p>
                                                         </td>
                                                   }

                                                    <td >
                                                        <button onClick={() => handleDeleteFav(contact)}
                                                            className=" text-red-950 w-16 h-12 p-3"><img src="https://i.ibb.co/2k7vTG4/delete-icon-image-15.png" alt="" />
                                                        </button></td>


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

export default MyContactRequest;