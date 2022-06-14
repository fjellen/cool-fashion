import { ReactNode, useContext } from "react";
import { userContext } from "../context/UserContext"
import { Navigate } from "react-router-dom";

type privateProps = {
    children: ReactNode
}


 const PrivateRoute = ({ children }: privateProps) => {

  const context = useContext(userContext)
  console.log(context?.loggedIn);

  return (
    context?.loggedIn ? <>{children}</> : <Navigate to="/Login" />
  )
  };

export default PrivateRoute;