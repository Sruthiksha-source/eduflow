import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const ProtectedRoute = ({ children }) => {
    //Get auth state from AuthContext
    const{user, loading} = useAuth()

    //Check is user is logged in
    //Preventing premature redirect before auth check completes
    if (loading){
        return(
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }

    //Auto check complete no user found
    //Redirect to login immediately
    if(!user){
        return <Navigate to ="/login" replace />
    }

    //Auth check complete - user is logged in
    //Render whatever page is inside Protected Route
    return children
}

export default ProtectedRoute