/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_key= import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const GotMarried = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic =useAxiosPublic();
    const axiosSecure=useAxiosSecure();

    const onSubmit = async(data) => {
    //image upload to imgbb and then get an url

    const imageFile ={image: data.image[0]}
    const res= await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            "content-type":"multipart/form-data"
        }
    })
    const image = res.data.data.display_url;
    if(res.data.success){
        //now send the menu item data to the server with the image url 
        const story ={
            selfBiodataNumber:parseInt(data.SelfBiodataNumber),
            image,
            partnerBiodataNumber:parseInt(data.PartnerBiodataNumber),
            date: new Date(),
            successStoryReview:data.SuccessStoryReview
 }
        console.log(story);
       const storyRes =await axiosSecure.post('/success', story)
        .then(storyRes=>{
            console.log(storyRes.data);
            if(storyRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `review done`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    }


      return (
        <div>
            <Helmet>
        <title>BrideAndGrooms | Got Married</title>
      </Helmet>
            <SectionTitle heading="Create a Got Married" subHeading="Form"></SectionTitle>
            <div className="p-10 bg-white max-w-[990px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} >
             <div className="flex gap-6">
             <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Self Biodata Number</span>
                    </label>
                    <input {...register("SelfBiodataNumber", { required: true})} type="number" placeholder="Self Biodata Number" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'/>
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Partner Biodata Number</span>
                    </label>
                    <input {...register("PartnerBiodataNumber", { required: true})} type="number" placeholder="Partner Biodata Number" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'/>
                </div>
                
             </div>
            <div className="form-control w-full my-6">
            <label className="label">
                        <span className="label-text">Success Story Review</span>
                    </label>
            <textarea {...register("SuccessStoryReview")} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' placeholder="Success Story Review"></textarea>
            </div>

            
            <div className="form-control w-full my-6">
            <label className="label">
                        <span className="label-text">Couple Image Link or image input field</span>
                    </label>
            <input {...register("image", { required: true})} type="file" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />

            </div>
            
               <div>
               <button type="submit" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-red-200 text-gray-900' > Submit Button</button>
               </div>
            </form>
            </div>

        </div>
      );
    };
    


export default GotMarried;