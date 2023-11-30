/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../hooks/useAxiosSecure'


const UpdateBiodata = ({ userAnyBiodataOrNot, user}) => {

    const { register, handleSubmit } = useForm()

    const axiosSecure =useAxiosSecure()
    
    const onSubmit = async (data) => {
        console.log('Data:', data);
    try{
       
            const updateOne = {
                name: data?.name || 'null',
                biodataType: data?.biodataType || 'null',
                date:parseInt(data.date) || 'null',
                height: data?.height || 'null',
                weight: data?.weight || 'null',
                occupation: data?.occupation || 'null',
                race: data?.race || 'null',
                fathersName: data?.fathersName || 'null',
                age: parseInt(data.age) || 'null',
                permanentDivision: data?.permanentDivision || 'null',
                presentDivision: data?.presentDivision || 'null',
                expectedPartnerAge: parseInt(data.expectedPartnerAge) || 'null',
                mothersName: data?.mothersName || 'null',
                expectedPartnerHeight: data?.expectedPartnerHeight || 'null',
                expectedPartnerWeight: data?.expectedPartnerWeight || 'null',
                contactEmail: data?.contactEmail || 'null',
                mobileNumber: data?.mobileNumber || 'null',
                userEmail: user?.email
            }
            console.log(updateOne);
            const res = await axiosSecure.patch(`/update-biodata?email=${user?.email}, updateOne `)
               if(res.data.acknowledged) {
                Swal.fire({
                    title: "Good job!",
                    text: "You biodata is updated!",
                    icon: "success"
                });
               
            }
     
    }catch(err){
        console.log(err);
    }
    }


    return (
        <div>
            <h1 className='text-center text-2xl mb-10 font-semibold'>Update BioData Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            defaultValue={userAnyBiodataOrNot?.name}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Biodata Type
                        </label>
                        <select
                            {...register('biodataType', { required: true })}
                            defaultValue={userAnyBiodataOrNot?.biodataType}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            {...register('date', { required: true })}
                            type="date"
                            defaultValue={userAnyBiodataOrNot?.date}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Height
                        </label>
                        <select
                            {...register('height', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.height}
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

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Weight
                        </label>
                        <select
                            {...register('weight', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.weight}
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
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Permanent Division name
                        </label>
                        <select
                            {...register('permanentDivision', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.permanentDivision}
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
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Age
                        </label>
                        <input
                            {...register('age')}
                            type="number"
                            defaultValue={userAnyBiodataOrNot?.age}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Occupation
                        </label>
                        <select
                            {...register('occupation', { required: true })}
                            defaultValue={userAnyBiodataOrNot?.occupation}
                            className="mt-1 p-2 w-full border rounded"
                        >
                            <option value="engineer">Engineer</option>
                            <option value="doctor">Doctor</option>
                            <option value="teacher">Teacher</option>
                            <option value="businessman">Businessman</option>
                            <option value="lawyer">Lawyer</option>
                            <option value="student">Student</option>
                            <option value="bekar">Bekar</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Race
                        </label>
                        <select
                            {...register('race', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.race}
                        >
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="middle">Middle</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Fathers name
                        </label>
                        <input
                            {...register('fathersName')}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.fathersName}
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Mothers name
                        </label>
                        <input
                            {...register('mothersName')}
                            defaultValue={userAnyBiodataOrNot?.mothersName}
                            type="text"
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Present Division name
                        </label>
                        <select
                            {...register('presentDivision', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.presentDivision}
                        >
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Maymansign">Maymansign</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="rajshahi">Rajshahi</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Expected Partner Age
                        </label>
                        <input
                            {...register('expectedPartnerAge')}
                            type="number"
                            defaultValue={userAnyBiodataOrNot?.expectedPartnerAge}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Expected Partner Height
                        </label>
                        <select
                            {...register('expectedPartnerHeight', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.expectedPartnerHeight}
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

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Expected Partner Weight
                        </label>
                        <select
                            {...register('expectedPartnerWeight', { required: true })}
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.expectedPartnerWeight}
                        >
                             <option value="Light">Light</option>
                            <option value="Average">Average</option>
                            <option value="Heavy">Heavy</option>
                            <option value="Slim">Slim</option>
                            <option value="Chubby">Chubby</option>
                            <option value="Thin">Thin</option>
                            <option value="Overweight">Overweight</option>
                            <option value="Fit">Fit</option>
                            <option value="Athletic">Athletic</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start items-center gap-5'>
                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Contact Email
                        </label>
                        <input
                            {...register('contactEmail', { readOnly: true })}
                            type="email"
                            value={user?.email}
                            defaultValue={userAnyBiodataOrNot?.contactEmail}
                            className="mt-1 p-2 w-full border rounded"
                        />
                    </div>

                    <div className="mb-6 w-full">
                        <label className="block text-base font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            {...register('mobileNumber', { required: true })}
                            type="tel"
                            className="mt-1 p-2 w-full border rounded"
                            defaultValue={userAnyBiodataOrNot?.mobileNumber}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-indigo-500 w-full text-white py-2 px-4 rounded-full" >
                        <p>Update Profile</p>
                    </button>
                </div>
            </form>
        </div>
    )
}


export default UpdateBiodata;


