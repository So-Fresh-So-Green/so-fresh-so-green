import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
                Signup
              </h1>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <label class="block text-sm">
                    Username
                  </label>
                  <input
                    placeholder="Username"
                    name="username"
                    type="username"
                    id="username"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label class="block mt-4 text-sm">
                    Email
                  </label>
                  <input
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="email"
                    class="w-full px-4 py-2 text-sm border rounded-md focus:border-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-200"
                    onChange={handleChange}
                  />
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
                <button
                  type="submit"
                  id="submit-button"
                  class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-200 border border-transparent rounded-lg active:bg-orange-300 hover:bg-orange-300 focus:outline-none focus:shadow-outline-blue"
                  href="#">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
