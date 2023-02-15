import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../Hooks/useToken';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Registration = () => {

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, Perror] = useUpdateProfile(auth);
    const [token] = useToken(user);

    let errorElement;
    let loadingComponent;

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [customError, setCustomError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        matchPassword: '',
    });



    if (loading) {
        loadingComponent = <p>Loading..</p>
    }

    // if (user) {
    //     console.log("user", user)
    // }

    //name validation :
    const handleName = e => {

        console.log("click", e.target.value)
        setUserInfo({ ...userInfo, name: e.target.value });
    }

    // email validation :
    const handleEmail = (e) => {
        // console.log("click",e.target.value)
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            console.log("click", e.target.value)
            setUserInfo({ ...userInfo, email: e.target.value });
            //eror
            // setCustomError({ ...customError, email: "" });
            //setCustomError({ ...customError, email: "" });

        } else {
            console.log("error");
            // errorElement = <p>Email Error</p>
            // setCustomError({ ...customError, email: "Email invalid" });
            // setCustomError({ ...customError, email: "email invalid" });
            // setUserInfo({ ...userInfo, email: "" });
        }
    }

    //Password validation :
    const handlePassword = (e) => {

        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            console.log("click", e.target.value)
            setUserInfo({ ...userInfo, password: e.target.value });
            // setCustomError({ ...customError, matchPassword: "" });


            //setCustomError({ ...customError, password: "" });

        } else {
            console.log("Please valid password");
            // setCustomError({ ...customError, matchPassword: "Email and Password not match" });
            // errorElement = <p className=" text-xs italic text-red-500">Insart valid password (1-60)</p>
            // setCustomError({ ...customError, password: "insart 6 caracter" });
            // setUserInfo({ ...userInfo, password: "" });

        }
    }

    //Confirm password Validation :
    const handleConfirmPassword = (e) => {

        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            console.log("click", e.target.value)
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            //error
            errorElement = <p className=" text-xs italic text-red-500">Please valid password.</p>
            // setCustomError({ ...customError, password: "" });
            //setCustomError({ ...customError, confirmPassword: "" });

            // strokeLinecap
        } else {
            console.log("Please valid Cpassword")
            errorElement = <p className=" text-xs italic text-red-500">Please valid password.</p>
            // setCustomError({ ...customError, password: "Password invalid" });
            // setCustomError({ ...customError, confirmPassword: "Insart 6 caracter" });
            // setUserInfo({ ...userInfo, confirmPassword: "" });

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //const name = e.target.name.value;
        console.log("click", userInfo.name);

        if (userInfo.password !== userInfo.confirmPassword) {
            // general.password('passswoard not match');
            //setCustomError({ ...customError, password: 'password not match' })
            console.log("submit error");
            errorElement = <p className=" text-xs italic text-red-500">Please valid password.</p>
            return;
        }
        if (userInfo.email && userInfo.password) {
            console.log('User create successful', userInfo.email, userInfo.password);
            await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            await updateProfile({ displayName: userInfo.name });
            e.target.reset();
        }
    }

    useEffect(() => {

        if (token) {
            navigate('/');
        }

    }, [token])

    // if (token) {
    //     navigate('/');
    // }
    // style={{
    //     boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
    // }} 
    // style={{ backgroundColor: '#f8f8f8' }}

    return (
        <div className='md:h-screen text-center w-full max-w-xs mx-auto flex items-center '>
            <div style={{
                    boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
                }} 
                className='rounded-md w-full shadow-md  px-5  py-8 my-5' >
                <form onSubmit={handleSubmit} className="">
                    <div className="mb-4">
                        <h1>Registration From</h1>
                    </div>
                    <div className="mb-4">

                        <input onBlur={handleName} className="shadow appearance-none border rounded w-full py-2 px-3 border-current text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='' type="text" placeholder="Name" required />
                    </div>
                    <div className="mb-4">


                        <input onBlur={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 border-current text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="email" type="email" placeholder="Email" required />
                    </div>
                    <div className="mb-4">

                        <input onBlur={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 border-current text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="password" required />
                    </div>
                    <div className="mb-6">

                        <input onBlur={handleConfirmPassword} className="shadow appearance-none border  rounded w-full py-2 px-3 border-current text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Confirm password" required />
                        {errorElement}
                        {loadingComponent}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn" type="submit">
                            Registration
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            <Link to="/login" className='text-decoration-none'>Please Login.</Link>
                        </a>
                    </div>

                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </form>

            </div>

        </div >
    );
};

export default Registration;