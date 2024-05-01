import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAxios } from '../../components/axios-instance/instance';
import { TInfo, TWarning } from '../../components/toastify/Toastify';

function Register() {
    const navigate = useNavigate();
    const [emailChecker, setEmailChecker] = useState(false)
    const [usernameChecker, setUsernameChecker] = useState(false)
    let timeoutId;

    const handleSubmit = async (res) => {
        res.preventDefault()
        // console.log('this is shere');
        // console.log(res.target.password.value);
        // if (res.target.password.value.trim() == '')
        // {
        //     TWarning('Enter a valid password')
        //     return
        // }
        // else{
        const formData = new FormData(res.target)
        await UserAxios.post('/register', formData).then((res) => {
            navigate('/login')
        }).catch((err) => {
            console.log(err);
            if (err.response.status == 400) {
                if (err.response.data.email) {
                    TWarning(err.response.data.email[0])
                }else
                if (err.response.data.username) {
                    TWarning(err.response.data.username[0]);
                }else if (err.response.data.username) {
                    TWarning(err.response.data.username[0]);
                }else if (err.response.data.password) {
                    TWarning('Enter a valid password');
                }
            }
            console.log(err);
        })
    
    }

    const CheckEmail = (event) => {
        console.log(event.target.name);
        const { value, name } = event.target;
        if(name == 'email')
            setEmailChecker(false)
        else
            setUsernameChecker(false)

        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            UserAxios.get(`/check_details?value=${value}`).then((res)=>{
                if(name == 'email' && res.data.email){
                    setEmailChecker(true)
                    TInfo('mail already exist')
                }else if(name == 'username' && res.data.username){
                setUsernameChecker(true)
                TInfo('username already exist')
            }
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        }, 1000);
    }

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Sign UP
                    </h2>

                    <form className="mt-10" onSubmit={handleSubmit}>
                        <label for="email" className={"block text-xs font-semibold uppercase "+(emailChecker? 'text-red-500': 'text-gray-800')}>E-mail</label>
                        <input id="email" name="email" placeholder="e-mail address" onChange={(e) => {
                            CheckEmail(e)
                        }}
                            className={"block w-full py-3 px-1 mt-2 appearance-none border-b-2 border-gray-100 focus:outline-none focus:border-gray-200 "+(emailChecker? 'text-red-500': 'text-gray-800') }
                            required />
                        <label for="username" className={"block text-xs font-semibold text-gray-600 uppercase "+(usernameChecker? 'text-red-500': 'text-gray-800') }>Username</label>
                        <input id="username" type="username" name="username" placeholder="username"
                            className={"block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:outline-none focus:border-gray-200 "+(usernameChecker? 'text-red-500': 'text-gray-800') }
                            onChange={(e) => {
                                CheckEmail(e)
                            }}
                            required />

                        <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password" type="password" name="password" placeholder="password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required />

                        <button type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Sign up
                        </button>

                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link to={'/login'} className="flex-2 underline">
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