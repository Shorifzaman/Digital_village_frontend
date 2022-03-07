import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';
import Lottie from 'react-lottie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/registration.json';

const Register = () => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    processSignUp,
    setAuthError,
    authError,
    processSignInWithGoogle,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect_uri = location?.state?.form || '/';

  const handleGoogleRegister = () => {
    processSignInWithGoogle(navigate);
  };

  const handleRegister = async ({
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
  }) => {
    const name = `${firstName} ${lastName}`;
    const newUser = { name, email, password, dateOfBirth };
    await processSignUp(newUser, redirect_uri, navigate);
    reset();
  };

  // clear error messages
  const handleError = () => {
    setAuthError('');
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="flex-1 px-4">
        <div className="pt-24 md:mx-10 text-center lg:mx-48 space-y-4 mb-3">
          <h3 className=" text-center ">Create an Account</h3>
          <p className="space-x-2">
            <span>Already Registered?</span>
            <Link to="/login">
              <span className="text-primary">Log In</span>
            </Link>
          </p>

          {/* google sign in button */}
          <button
            onClick={handleGoogleRegister}
            className="btn bg-primary flex items-center text-sm rounded-lg mx-auto hover:bg-opacity-80 transition-all duration-300 w-full"
          >
            <BsGoogle
              className="h-8 w-8 hover:scale-125 mx-3"
              aria-hidden="true"
            />
            <p className="text-center">Sign Up With Google</p>
          </button>

          <p>or</p>
        </div>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-6 max-w-[500px] mx-auto"
        >
          {/* name */}
          <div className="flex gap-4">
            {/* first name */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('firstName', { required: true, maxLength: 20 })}
              placeholder="First Name"
              required
            />

            {/* last name */}
            <input
              className="px-7 py-3 bg-gray-100 outline-none border-2 w-full focus:border-primary transition-all duration-300 rounded-xl"
              {...register('lastName', {
                required: true,
                pattern: /^[A-Za-z\d]+$/i,
                maxLength: 20,
              })}
              placeholder="Last Name"
              required
            />
          </div>

          {/* email */}
          <input
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please provide correct email address.',
              },
            })}
            placeholder="Email"
            type="email"
            required
          />

          {errors.email && (
            <p className="text-error mb-2">{errors.email.message}</p>
          )}

          {/* date of birth */}
          <div className="space-y-6 text-center">
            <p className="capitalize font-bold text-info">Your Date of Birth</p>
            <input
              type="date"
              className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
              {...register('dateOfBirth', {
                required: true,
              })}
            />
          </div>

          {/* password */}
          <input
            type="password"
            className="px-7 py-3 bg-gray-100 outline-none border-2 focus:border-primary w-full transition-all duration-300 rounded-xl"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            placeholder="Password"
            required
          />

          <input
            className="btn bg-primary rounded-lg w-full cursor-pointer hover:bg-opacity-80  transition-all duration-300"
            type="submit"
            value="Signup with Email"
          />
        </form>
      </div>

      <div className="hidden md:block w-full md:w-1/2 px-3 pt-24 pointer-events-none">
        <div className="w-fit mx-auto">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={isDesktop ? 500 : isTablet ? 400 : 300}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;