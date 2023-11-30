/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useManageUser from "../../../hooks/useManageUser";
import UpdateBiodata from "./UpdateBiodata";
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const EditBiodata = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [bioData, refetch, isLoading] = useManageUser()


    const userAnyBiodataOrNot =bioData?.find(data => data?.userEmail === user?.email);


    const onSubmit = async (data) => {
        //image upload to imgbb and then get an url

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })

        const image = res.data.data.display_url
        if (res.data.success) {
            const bioDataInfo = {
                name: data.name,
                biodataType: data.biodataType,
                date: data.date,
                height: data.height,
                weight: data.weight,
                occupation: data.occupation,
                race: data.race,
                fathersName: data.fathersName,
                age: parseInt(data.age),
                permanentDivision: data.permanentDivision,
                presentDivision: data.presentDivision,
                expectedPartnerAge: parseInt(data.expectedPartnerAge),
                mothersName: data.mothersName,
                expectedPartnerHeight: data.expectedPartnerHeight,
                expectedPartnerWeight: data.expectedPartnerWeight,
                contactEmail: data.contactEmail,
                mobileNumber: data.mobileNumber,
                image,
                userEmail: user?.email
            }
            console.log(bioDataInfo);
            const bioInfo = await axiosSecure.post(`/allBioData?email=${user?.email}`, bioDataInfo)
                .then(bioInfo => {
                    console.log(bioInfo.data);
                    if (bioInfo.data.insertedId) {
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${data.name}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: `${bioInfo.data.message}`,
                            text: "sorry",
                        })
                    }
                })
        }


    };

    return (
        <div>
            <SectionTitle subHeading={"BioData Form"}></SectionTitle>
            <div className="p-16 bg-gray-100 max-w-[900px] mx-auto">
            
                {!userAnyBiodataOrNot? <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h1 className='text-center text-2xl mb-10 font-semibold'>Create BioData Form</h1>
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
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="mb-6 w-full">
                            <label className="block text-sm font-medium text-gray-700">
                                Date of Birth
                            </label>
                            <input
                                {...register('date', { required: true })}
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
                            <option value="Short">Short</option>
                            <option value="Average">Average</option>
                            <option value="Tall">Tall</option>
                            <option value="Thort">Extra short</option>
                            <option value="Average">Medium</option>
                            <option value="Tall">Extra Tall</option>
                            <option value="Average">Medium</option>
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
                            <option value="Light">Light</option>
                            <option value="Average">Average</option>
                            <option value="Heavy">Heavy</option>
                            <option value="Slim">Slim</option>
                            <option value="Chubby">Chubby</option>
                            <option value="Thin">Thin</option>
                            <option value="Overweight">Overweight</option>
                            <option value="Obese">Obese</option>
                            <option value="Fit">Fit</option>
                            <option value="Athletic">Athletic</option>
                            <option value="Stocky">Stocky</option>
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
                            <option value="Web Developer">Web Developer</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Teacher">Teacher</option>
                            <option value="House Wife">House Wife</option>
                            <option value="Entrepreneur">Entrepreneur</option>
                            <option value="Artist">Artist</option>
                            <option value="Student">Student</option>
                            <option value="Lawyer">Lawyer</option>
                            <option value="Journalist">Journalist</option>
                            <option value="Content Creator">Content Creator</option>
                            <option value="Judge">Judge</option>
                            <option value="Chef">Chef</option>
                            <option value="Heavy">Journalist</option>
                            <option value="Corporate Job">Corporate Job</option>
                            <option value="Govt. Service">Govt. Service</option>
                            <option value="NGO">NGO</option>
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
                            <option value="Asian">Asian</option>
                            <option value="Black">Black</option>
                            <option value="White">White </option>
                            <option value="Light brown">Light Brown</option>
                            <option value="Medium brown">Medium Brown</option>
                            <option value="Dark brown">Dark Brown</option>

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
                            <option value="Short">Short</option>
                            <option value="Average">Average</option>
                            <option value="Tall">Tall</option>
                            <option value="Thort">Extra short</option>
                            <option value="Average">Medium</option>
                            <option value="Tall">Extra Tall</option>
                            <option value="Average">Medium</option>
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
                            <option value="Light">Light</option>
                            <option value="Average">Average</option>
                            <option value="Heavy">Heavy</option>
                            <option value="Slim">Slim</option>
                            <option value="Chubby">Chubby</option>
                            <option value="Thin">Thin</option>
                            <option value="Overweight">Overweight</option>
                            <option value="Obese">Obese</option>
                            <option value="Fit">Fit</option>
                            <option value="Athletic">Athletic</option>
                            <option value="Stocky">Stocky</option>
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
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered my-5 fill-gray-100 w-full max-w-xs" />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className=" bg-green-700 text-white py-2 px-4 rounded-full w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form> : <UpdateBiodata
                    userAnyBiodataOrNot={userAnyBiodataOrNot}
                    onSubmit={handleSubmit(onSubmit)}
                    user={user}
                    URL={image_hosting_api}
                    axiosPublic={axiosPublic}
                    axiosSecure={axiosSecure}

                />}
            </div>
        </div>
    );
};



export default EditBiodata;