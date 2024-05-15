import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2'; // SweetAlert2 import
import { AuthContext } from '../authProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordChecker = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/;

  const { createUser, updateUserProfile, setCurrentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // To navigate to another route upon success

  const onSubmit = (data) => {
    const { email, password, admin, photo } = data;

    if (passwordChecker.test(password)) {
      createUser(email, password)
        .then((result) => {
          if (result.user) {
            updateProfile(result.user, {
              displayName: admin,
              photoURL: photo,
            })
              .then(() => {
                setCurrentUser({
                  displayName: admin,
                  photoURL: photo,
                });

                // Show success alert
                Swal.fire({
                  title: 'Success!',
                  text: 'You have registered successfully!',
                  icon: 'success',
                  confirmButtonText: 'OK',
                }).then(() => {
                  navigate('/'); // Navigate to home or another route after success
                });
              })
              .catch((error) => {
                console.error('Error updating user profile:', error);
                Swal.fire({
                  title: 'Error!',
                  text: 'An error occurred while updating your profile.',
                  icon: 'error',
                  confirmButtonText: 'OK',
                });
              });
          }
        })
        .catch((error) => {
          console.error('Error creating user:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to create user.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    } else {
      Swal.fire({
        title: 'Warning!',
        text: 'Password must contain upper, lower, number, and special character.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="flex justify-center items-center mt-[100px]">
        <div className="sm:flex shrink-0 w-full h-full max-w-screen-lg shadow-2xl bg-base-100 border border-green-500 overflow-hidden">
          <div className="sm:w-1/3 bg-green-400 h-screen text-white text-center flex flex-col justify-center items-center p-10">
            <h1 className="text-4xl font-bold mb-5">New Here?</h1>
            <p className="text-xl mb-4">
              Sign In and discover a great amount of new opportunities!
            </p>
            <Link to="/login" className="link">
              <button className="btn bg-white hover:bg-green-400 hover:text-white w-[150px] rounded-full">
                <span style={{ textDecoration: 'none' }}>Sign In</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:w-2/3 justify-center items-center h-screen">
            <h1 className="text-center text-5xl font-bold">
              Register To Your Account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:px-32 space-y-5 mt-5">
              <div className="form-control text-xl">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="name"
                  className="input rounded-full bg-green-100"
                  {...register('admin', { required: true })}
                />
                {errors.FullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Photo URL"
                  name="photo"
                  className="input rounded-full bg-green-100"
                  {...register('photo')}
                />
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input rounded-full bg-green-100"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Your Password"
                  name="password"
                  className="input rounded-full bg-green-100"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2/3 right-10"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              <div className="form-control flex items-center mt-6">
                <button type="submit" className="btn bg-green-400 hover:bg-white text-white hover:text-black w-[150px] rounded-full">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
