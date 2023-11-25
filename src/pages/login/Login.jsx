
import { Link, useLocation, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async'
import SocialLogin from './SocialLogin'

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
  }
  return (
    <>
      <Helmet>
        <title>BrideAndGrooms | Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
            <p className='text-sm text-gray-400'>
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLogin}  className='space-y-6 ng-untouched ng-pristine ng-valid'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div>
            <button
              type='submit'
              className='bg-pink-500 w-full rounded-md py-3 text-white' 
            > Submit
            </button>
          </div>
          </form>
          <p className="text-center font-bold text-lg"><small>New Here? Create an account <Link to="/signUp" className="text-blue-600">SignUp </Link></small></p>
          <SocialLogin />
        </div>
      </div>

    </>
  )
}

export default Login
