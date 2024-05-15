import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  //Navigation System
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  const ridiract = () => {
    navigate(from);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        toast.success('You are wellcome');
        if (result.user) {
          setTimeout(ridiract, 1000);
        }
      })
      .catch(error => {
        toast.warn('please check email');
      });
  };

  return (
    <div
      className="flex justify-center items-center mt-[100px]"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="sm:flex shrink-0 w-full h-full max-w-screen-lg shadow-2xl bg-base-100 border border-green-500 overflow-hidden">
        <div className="sm:w-1/3 bg-green-400 h-screen text-white text-center flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-bold mb-5">New Here?</h1>
          <p className="text-xl mb-4">
            Sign Up and discover a great amount of new opportunities!
          </p>
          <Link to="/register" className="link">
            <button className="btn bg-white hover:bg-green-400 hover:text-white w-[150px] rounded-full">
              <span style={{ textDecoration: 'none' }}>Sign Up</span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col sm:w-2/3 justify-center items-center h-screen">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-black">
            Login To Your Account
          </h1>
          <SocialLogin></SocialLogin>
          <div className="divider sm:px-32">Or</div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:px-32">
            <div className="form-control my-5">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input rounded-full bg-green-100"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="form-control">
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input rounded-full bg-green-100"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">
                  This field is required
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control flex items-center mt-6">
              <button type="submit" className="btn bg-green-400 hover:bg-white text-white hover:text-black w-[150px] rounded-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
