import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate,useLocation } from "react-router-dom";

const RequirAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
      return <div>Loading....</div>
    }
    
     if(!user){
         return  <Navigate to="/login" state={{ from: location }} replace />;
     }
    
     return children;
     

   
};

export default RequirAuth;