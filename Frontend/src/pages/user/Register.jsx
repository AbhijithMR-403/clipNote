import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAxios } from '../../components/axios-instance/instance';

function Register() {
    const navigate = useNavigate();
    const handleSubmit = (res) =>{
        res.preventDefault()
        const formData = new FormData(res.target)
        UserAxios.post('/register', formData).then((res)=>{
            navigate('/login')
        }).catch((err)=>{
            console.log(err);
            if(err.response.status == 400){
                if(err.response.data.email){
                    console.log(err.response.data.email[0]);
                }
                if(err.response.data.username){
                    console.log(err.response.data.username[0]);
                }
            }
            console.log(err);
        })
        // console.log(Object.fromEntries(formData.entries()));

    }
    return (
        <div class="flex flex-col h-screen bg-gray-100">
            <div class="grid place-items-center mx-2 my-20 sm:my-auto">
                <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Sign UP
                    </h2>

                    <form class="mt-10" onSubmit={handleSubmit}>
                        <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="e-mail address"
                            class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />
                        <label for="username" class="block text-xs font-semibold text-gray-600 uppercase">Username</label>
                        <input id="username" type="username" name="username" placeholder="username"
                            class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="password"
                            class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <button type="submit"
                            class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Sign up
                        </button>

                        <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            
                            <Link to={'/login'} class="flex-2 underline">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register