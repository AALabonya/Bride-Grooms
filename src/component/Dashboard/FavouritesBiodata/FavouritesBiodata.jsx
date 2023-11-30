import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
const FavouritesBiodata = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure =useAxiosSecure()
    const { data: favorite= [],refetch } = useQuery({
        queryKey: ['favorite'],
        queryFn: async () => {
            const res = await axiosPublic.get("/favorite" )
            return res.data;
        }

    })

    const handleDeleteFav= fav =>{
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
                axiosSecure.delete(`/favData/${fav._id}`)
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
        <title>BrideAndGrooms | Favourites</title>
      </Helmet>
             <div>
            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white">
                    <h2 className="text-2xl font-semibold leadi text-center mb-4 mt-10">Favourites Biodata Information</h2>
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
                                    <th className="p-3"> Permanent Address</th>
                                    <th className="p-3">Occupation</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    favorite.map(fav =>
                                        <tr key={fav._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                            <td className="p-3">
                                                <p>{fav.biodataId}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{fav.name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{fav.occupation}</p>

                                            </td>
                                            <td className="p-3">
                                                <p>{fav.name}</p>
                                            </td>
                            
                                            <td > 
                                                <button onClick={()=>handleDeleteFav(fav)}
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
        </div>
    );
};

export default FavouritesBiodata;