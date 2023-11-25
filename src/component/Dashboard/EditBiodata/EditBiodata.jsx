/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
// import Swal from "sweetalert2";
const image_hosting_key= import.meta.env.VITE_IMGBB_API_KEY;
console.log(image_hosting_key);
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const EditBiodata = () => {
    const {register, handleSubmit,reset} = useForm();
  const axiosPublic = useAxiosPublic()
    const onSubmit = async(data) => {
        console.log(data);
        //image upload to imgbb and then get an url

        const imageFile ={image: data.image[0]}
        const res= await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                "content-type":"multipart/form-data"
            }
        })
             console.log(await res.data);

        const bioDataInfo ={
            name: data.name,
            biodataType: data.biodataType,
            dod: data.dob,
            height: data.height,
            weight: data.weight,
            occupation: data.occupation,
            race: data.race,
            fathersName: data.fathersName,
            age: parseInt(data.age),
            permanentDivision: data.permanentDivision,
            expectedPartnerAge: parseInt(data.expectedPartnerAge),
            mothersName: data.mothersName,
            expectedPartnerHeight: data.expectedPartnerHeight,
            expectedPartnerWeight: data.expectedPartnerWeight,
            contactEmail: data.contactEmail,
            mobileNumber: data.mobileNumber,
        }
        console.log(bioDataInfo);
    };

    // const onSubmit = async(data) => {
    //     console.log(data)
    // //image upload to imgbb and then get an url

    // const imageFile ={image: data.image[0]}
    // const res= await axiosPublic.post(image_hosting_api,imageFile,{
    //     headers:{
    //         "content-type":"multipart/form-data"
    //     }
    // })
    // if(res.data.success){
    //     //now send the menu item data to the server with the image url 
    //     const menuItem ={
    //         name:data.name,
    //         image:res.data.data.display_url,
    //         recipe:data.recipe,
    //         price:parseFloat(data.price),
    //         category:data.category

    //     }
    //   const menuRes =await axiosSecure.post("/menu",menuItem)
    //     .then(menuRes=>{
    //         console.log(menuRes.data);
    //         if(menuRes.data.insertedId){
    //             reset()
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${data.name}`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               });
    //         }
    //     })

    // }
    // console.log("log with image url", res.data);
    // };

    return (
        <div>
            <SectionTitle subHeading={"Form"} heading={"Edit Biodata"}></SectionTitle>
            <div className="p-16 bg-gray-100 max-w-[900px] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className='flex flex-col md:flex-row justify-start items-center gap-5'>
                        <div className="mb-6 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Biodata Type
                            </label>
                            <select
                                {...register('biodataType', { required: true })}
                                className="mt-1 p-2 w-full border rounded"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Date of Birth
                            </label>
                            <input
                                {...register('dob', { required: true })}
                                type="date"
                                className="mt-1 p-2 w-full border rounded"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Height
                        </label>
                        <select
                            {...register('height', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="short">Short</option>
                            <option value="average">Average</option>
                            <option value="tall">Tall</option>
                            <option value="short">Extra short</option>
                            <option value="average">Medium</option>
                            <option value="tall">Extra Tall</option>
                            <option value="average">Medium</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Weight
                        </label>
                        <select
                            {...register('weight', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                             <option value="light">Light</option>
                            <option value="average">Average</option>
                            <option value="heavy">Heavy</option>
                            <option value="slim">Slim</option>
                            <option value="chubby">Chubby</option>
                            <option value="thin">Thin</option>
                            <option value="overweight">Overweight</option>
                            <option value="obese">Obese</option>
                            <option value="fit">Fit</option>
                            <option value="athletic">Athletic</option>
                            <option value="stocky">Stocky</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Age
                        </label>
                        <input
                            {...register('age')}
                            type="number"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Occupation
                        </label>
                        <select
                            {...register('occupation', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="web developer">Web Developer</option>
                            <option value="doctor">Doctor</option>
                            <option value="engineer">Engineer</option>
                            <option value="teacher">Teacher</option>
                            <option value="house wife">House Wife</option>
                            <option value="entrepreneur">Entrepreneur</option>
                            <option value="artist">Artist</option>
                            <option value="student">Student</option>
                            <option value="lawyer">Lawyer</option>
                            <option value="journalist">Journalist</option>
                            <option value="content creator">Content Creator</option>
                            <option value="judge">Judge</option>
                            <option value="Chef">Chef</option>
                            <option value="heavy">Journalist</option>
                            <option value="corporate job">Corporate Job</option>
                            <option value="govt. service">Govt. Service</option>
                            <option value="ngo">NGO</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Race
                        </label>
                        <select
                            {...register('race', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="asian">Asian</option>
                            <option value="black">Black</option>
                            <option value="white">White </option>
                            <option value="light brown">Light Brown</option>
                            <option value="medium brown">Medium Brown</option>
                            <option value="dark brown">Dark Brown</option>

                            {/* Add more race options as needed */}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Fathers name
                        </label>
                        <input
                            {...register('fathersName')}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Mothers name
                        </label>
                        <input
                            {...register('mothersName')}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Permanent Division name
                        </label>
                        <select
                            {...register('permanentDivision', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Present Division name
                        </label>
                        <select
                            {...register('presentDivision', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Expected Partner Age
                        </label>
                        <input
                            {...register('expectedPartnerAge')}
                            type="number"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Expected Partner Height
                        </label>
                        <select
                            {...register('expectedPartnerHeight', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="short">Short</option>
                            <option value="average">Average</option>
                            <option value="tall">Tall</option>
                            <option value="short">Extra short</option>
                            <option value="average">Medium</option>
                            <option value="tall">Extra Tall</option>
                            <option value="average">Medium</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Expected Partner Weight
                        </label>
                        <select
                            {...register('expectedPartnerWeight', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="light">Light</option>
                            <option value="average">Average</option>
                            <option value="heavy">Heavy</option>
                            <option value="slim">Slim</option>
                            <option value="chubby">Chubby</option>
                            <option value="thin">Thin</option>
                            <option value="overweight">Overweight</option>
                            <option value="obese">Obese</option>
                            <option value="fit">Fit</option>
                            <option value="athletic">Athletic</option>
                            <option value="stocky">Stocky</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Contact Email (User Email Readonly)
                        </label>
                        <input
                            {...register('contactEmail', { readOnly: true })}
                            type="email"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            {...register('mobileNumber', { required: true })}
                            type="tel"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Profile Image Link or Image Input
                        </label>
                        <input {...register("image", { required: true})} type="file" className="file-input file-input-bordered my-5 fill-gray-100 w-full max-w-xs" />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className=" bg-green-700 text-white py-2 px-4 rounded-full w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default EditBiodata;