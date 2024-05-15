import { useContext,  } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className="4xl">Loading...</h1>
    }

    if(!currentUser){
        return <Navigate to='/login' state = {location?.pathname || '/'} ></Navigate>
    }
    
    return (
        <div >
            {children}
        </div>
    );
};

export default PrivateRoute;


