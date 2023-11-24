import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Swal from "sweetalert2";
import { TbFidgetSpinner } from "react-icons/tb";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const axiosPublic = useAxiosPublic()

    const { createUser, updateUserProfile, loading } = useAuth()
    const navigate = useNavigate();

    const handleSubmit =  event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const password = form.password.value

        console.log(name, email, password,image);

        createUser(email, password)
            .then((result) => {
                console.log("created user", result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                })

                if (result.user) {
                    updateUserProfile({
                        displayName: name,
                        photoURL: image
                    })
                }
                navigate("/login")
            })
              axiosPublic.post("/users",)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('user profile info updated')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
                    .catch (error => console.log(error))
            }
    
return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <div className='mb-8 text-center'>
                <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                <p className='text-sm text-gray-400'>Welcome to BrideAndGrooms</p>
            </div>
            <form
                onSubmit={handleSubmit}
                className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
                <div className='space-y-4'>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Enter Your Name Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                           Image url:
                        </label>
                        <input
                            required
                            type="text"
                            id='image'
                            name='image'
                            placeholder='Enter Your Name Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            data-temp-mail-org='0'
                           
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Email address
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            required
                            placeholder='Enter Your Email Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            data-temp-mail-org='0'
                        />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                        </div>
                        <input
                            type='password'
                            name='password'
                            autoComplete='new-password'
                            id='password'
                            required
                            placeholder='*******'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                        />
                    </div>
                </div>

                <div>
                    <button
                        type='submit'
                        className='bg-rose-500 w-full rounded-md py-3 text-white'
                    >
                        {loading ? <TbFidgetSpinner className="animate-spin m-auto" /> : "Submit"}

                    </button>
                </div>
            </form>
            <p className="text-center font-bold text-lg"><small>Already have an account
                <Link to="/login" className="text-blue-600" > Login</Link></small></p>

        </div>
    </div>
);
};

export default SignUp;