/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loading";

const AdminRoute = ({children}) => {
    const{user, loading}= useAuth()
    const[isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()


    if(loading || isAdminLoading){
        return <Loading/>
       }

     if(user && isAdmin){
        return children
     }  

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};
export default AdminRoute;