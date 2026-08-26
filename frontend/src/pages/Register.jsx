import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () =>{
    //Form field values user needs to fill
    const [fullName, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    //error message if something is amiss
    const[error, setError] = useState("")

    //Loading response
    const[isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        //prevent default refreshing
        e.preventDefault()

        //clear error & loading = true
        setError("")

        setIsLoading(true)

        //check password == confirmPassword

        if (password !== confirmPassword){
            setError("Passwords don't match")
            setIsLoading(false)
            return //stop the function
        }
        
        try{
            //register all the credentials

            const RegisterData = await registerUser( email, password, confirmPassword, fullName)
            navigate("/login")
        }catch(error){
            setError(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Create your account
                </h1>
                <p className="text-gray-500 mb-6">
                    Start managing your tutoring business
                </p>
                
                {/* Error message */}
                {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                {/* Register form */}
                <form onSubmit = {handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type = "text"
                            value = {fullName}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type = "email"
                            value = {email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type = "password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                        
                    {/* Confirm password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Submit button */}
                    <button
                        type = "submit"
                        disabled = {isLoading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50">
                        
                        {isLoading ? "Creating account...": "Create account"}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Registered?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login to your account
                    </Link>
                </p>
            </div>
        </div>
    )

}
export default Register