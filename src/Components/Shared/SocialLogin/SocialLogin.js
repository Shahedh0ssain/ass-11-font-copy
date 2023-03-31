import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import useToken from '../../Hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let loadingElement;

    let navigate = useNavigate();
    let location = useLocation();
    // const [token] = useToken(user);

    let from = location.state?.from?.pathname || "/";

    // if (token) {
    //     // console.log(user);
    //     navigate(from, { replace: true });
    // }

    if (loading) {
        console.log('loading');
        loadingElement = <span>Loading...</span>
    }
    if (error) {
        console.log("err0r")
    }

    const [token] = useToken(user);

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }

    }, [token]);

    return (
        <div>
            <div className='pt-1'>
                <button className="btn gap-2 text-center" onClick={() => signInWithGoogle()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Google Sign In
                </button>
                {loadingElement}
            </div>
        </div>
    );
};

export default SocialLogin;