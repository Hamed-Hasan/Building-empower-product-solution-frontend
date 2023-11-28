import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useLoginMutation } from '../../services/authQueries';


const Login = () => {
    const navigate = useNavigate();
    const loginMutation = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(e)

    try {
      const { data } = await loginMutation.mutateAsync({ email, password });
      console.log(data); // Handle success, e.g., store tokens in state or context
      navigate('/table'); 
    } catch (error) {
      console.error(error); // Handle error, e.g., display error message to the user
    }
  };

    return (
        <div>
                <div className="relative h-screen grid bg-black">
                    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
                        <div className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url(https://i.postimg.cc/mrgPMqpP/logo.png)' }}>
                            <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
                            <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
                                <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center"></div>
                            </div>
                        </div>

                        <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
                <div className="max-w-xl w-full space-y-12">
                    <div className="lg:text-left text-center">
                        <div className="flex items-center justify-center">
                            <div className="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">
                                <form onSubmit={handleLogin} className="flex flex-col  ">
                                    <label className="font-bold text-lg text-white mt-3">Email</label>
                                    <input 
                                    type="email" 
                                    value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Write Your Email.." 
                      className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white mb-3" />
                                    <label className="font-bold text-lg text-white">Password</label>
                                    <input 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Write Your Password.." 
                                    className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                                    <button 
                                    type="submit"
                                    className="border mt-12 border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">
                                         {loginMutation.isLoading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <div class="flex items-center justify-between mt-4"><span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span> <Link to="/signup" class="text-xs  text-gray-500 uppercase dark:text-gray-400 hover:underline">Create an account</Link> <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;