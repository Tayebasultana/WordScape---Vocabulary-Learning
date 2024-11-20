import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
  const{user, loading} = useContext(authContext)
  const location = useLocation()
  console.log(location)
  if(loading){
   return <h2>loading.........</h2>
  }
  if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>
  }
   return children
};

export default PrivetRoute;