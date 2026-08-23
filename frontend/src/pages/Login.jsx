import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { loginUser, getCurrentUser } from "../services/api"
import { useAuth } from "../context/AuthContext"


const Login = () => {
    //Form field values - updated every time user types
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //Error message when login fails
    const [error, setError] = useState("")

    //Loading state - true while waiting for API response
    const[isLoading, setIsLoading] = useState(false)

    //Login function from AuthCOntext -- stores token and user globally
    const{ login } = useAuth()

    //useNavigate - redirecting to next page
    const navigate = useNavigate()

    //Runs when user submits the form
    const handleSubmit = async (e) => {
        //Prevent page from refreshing
        e.preventDefault()

        //errors cleared
        setError("")

        //show loading state button
        setIsLoading(true)
    

        try {
            //send credentials to FastAPI, get token back
            const data = await loginUser(email, password)

            //fetch full user object using token
            //loginUser only returns the token -- need user's name, email etc in AuthContext
            localStorage.setItem("token", data.access_token)
            const UserData = await getCurrentUser()

            //store token and user in AuthContext (global state)
            login(data.access_token, UserData)

            //redirect to dashboard
            navigate("/dashboard")
        }catch(err){
            //Show error message to user if login fails
            setError (err.message)
        }finally{
            //Always stop loading whether success or failure
            setIsLoading(false)
        }
    }
    return (
        //Tailwind CSS
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-olive-200 flex items-center justify-center">
            {/* Login Card */}
            <div className="bg-white p-8 rounded-x1 shadow-md w-full max-w-md">
                {/*Header*/}
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Welcome Back
                </h1>
                <p className="text-gray-500 mb-6">
                    Sign in to your EduFlow account
                </p>

                {/* Error message */}
                {error &&(
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit ={handleSubmit}>
                    {/* Email field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type = "email"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            placeholder = "you@example.com"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1 ">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type = "submit"
                        disabled ={isLoading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50">
                        
                            {isLoading ? "Signing in...": "Sign in"}
                        </button>
                </form>
                
                {/* Link to register page */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login