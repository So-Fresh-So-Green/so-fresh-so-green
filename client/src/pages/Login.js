import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      console.log(token);
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="flex items-center min-h-screen bg-gradient-to-r from-slate-300 via-green-100 to-green-200" >
      <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
            <iframe src='https://my.spline.design/untitled-f7bec5409f033b3aba753dbcefa9f3dd/' frameborder='0' width='100%' height='100%'></iframe>
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <div class="flex justify-center">

              </div>
              <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                Login to Your Account
              </h1>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <label class="block text-sm">
                    Email
                  </label>
                  <input type="email"
                    name="email"
                    id="email-login"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    placeholder="youremail@test.com"
                    onChange={handleChange} />
                </div>
                <div>
                  <label class="block mt-4 text-sm">
                    Password
                  </label>
                  <input
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    placeholder="******"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                {error ? (
                  <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                  </div>
                ) : null}
                <button
                  type="submit"
                  id="submit-button"
                  class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-200 border border-transparent rounded-lg active:bg-orange-300 hover:bg-orange-300 focus:outline-none focus:shadow-outline-blue"
                  href="#">
                  Log in
                </button>
                <hr class="my-8" />
                <div class="flex justify-between items-center mb-6">
                </div>
                <div class="text-center lg:text-left">
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                  </p>
                  <p><Link to="/signup"> <a href="/signup"
                    class="text-orange-300 hover:text-orange-300 focus:text-orange-500 transition duration-200 ease-in-out">Register as New User</a></Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
