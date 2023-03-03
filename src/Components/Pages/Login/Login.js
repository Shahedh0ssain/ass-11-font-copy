
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import auth from '../../../firebase.init'
import useToken from '../../Hooks/useToken';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    // handle email:
    const handleEmail = e => {

        // console.log("email", e.target.value);
        setUserInfo({ ...userInfo, email: e.target.value })
    }

    //handle password:
    const handlePassword = e => {
        // console.log("password", e.target.value);
        setUserInfo({ ...userInfo, password: e.target.value })
    }


    let navigate = useNavigate();
    let location = useLocation();
    let loadingElement;
    let errorEmail;

    let from = location.state?.from?.pathname || "/";




    const handleSubmit = async e => {

        e.preventDefault();
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);
        e.target.reset();
    }

    if (loading) {
        // console.log('loading');
        loadingElement = <h1>Loading...</h1>
    }

    if (error) {
        console.log("error", error.message);
        errorEmail = <p>error found</p>
    }

    if (!user) {
        console.log("User not found")
        return;
    }

    const [token] = useToken(user);

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [token])

    return (
        <div className='md:h-screen text-center max-w-xs mx-auto  flex items-center'>

            <div style={{
                boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
                className="flex flex-col w-full m-5 px-5 py-8 rounded-md   ">

                <form onSubmit={handleSubmit} className="">
                    <div className="mb-4">
                        <h1>Login From</h1>
                    </div>
                    <div className="mb-4">

                        <input onBlur={handleEmail} className="shadow appearance-none border border-current rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email" />
                    </div>
                    <div className="mb-6">

                        <input onBlur={handlePassword} className="shadow appearance-none border border-current rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    {loadingElement}
                    <div className="flex items-center justify-between">
                        <button className="btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            <Link to="/registration" className='text-decoration-none'>Please Register.</Link>
                        </a>
                    </div>

                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>

                </form>
            </div>

        </div>
    );
};

export default Login;