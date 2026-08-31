import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () =>{
    //Step 1 = role selection, Step 2 = fill in details
    //Form field values user needs to fill
    const[step, setStep] = useState(1)
    const[role, setRole] = useState("")
    const [fullName, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    //error message if something is amiss
    const[error, setError] = useState("")

    //Loading response
    const[isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    //Step 1 - user picks their role then moves to form
    const handleRoleSelect = (selectedRole)=>{
        setRole(selectedRole)
        setStep(2)
    }

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
            //pass role to api.js
            await registerUser( email, password, confirmPassword, fullName, role)
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
                {/* Header changes based on step */}
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {step === 1 ? "Join EduFlow" : `Create your ${role} account`}
                </h1>
                <p className="text-gray-500 mb-6">
                    {step === 1
                        ? "First, tell us who you are"
                        : "Fill in your details to get started"}
                </p>

                {/* Progress bar — two steps */}
                <div className="flex items-center gap-2 mb-8">
                    <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-blue-500" : "bg-gray-200"}`} />
                    <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-blue-500" : "bg-gray-200"}`} />
                </div>
                
                {/* ── STEP 1 — Role Selection ── */}
                {step === 1 && (
                    <div className="flex flex-col gap-4">

                        {/* Tutor card */}
                        <button
                            onClick={() => handleRoleSelect("tutor")}
                            className="border-2 border-gray-200 rounded-xl p-6 text-left hover:border-blue-500 hover:bg-blue-50 transition-all"
                        >
                            <div className="text-3xl mb-2"></div>
                            <p className="font-semibold text-gray-800">I'm a Tutor</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Manage students, book sessions and track progress
                            </p>
                        </button>

                        {/* Student card */}
                        <button
                            onClick={() => handleRoleSelect("student")}
                            className="border-2 border-gray-200 rounded-xl p-6 text-left hover:border-blue-500 hover:bg-blue-50 transition-all"
                        >
                            <div className="text-3xl mb-2"></div>
                            <p className="font-semibold text-gray-800">I'm a Student</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Access your sessions, assignments and learning stages
                            </p>
                        </button>
                    </div>
                )}
                {/* Step 2 - Registration form */}
                {step === 2 &&(
                    <>
                        {/* Role badge with change button */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                {role === "tutor" ? "Tutor" : "Student"}
                            </span>
                            <button
                                onClick={()=> setStep(1)}
                                className="text-sm text-gray-400 hover:text-gray-600"
                            >
                                Change
                            </button>
                        </div>
                        {/* Error message */}
                        {error && (
                            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            {/* Full name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e)=> setName(e.target.value)}
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
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Minimum 8 characters with a number"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Confirm password */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                            >
                                {isLoading ? "Creating account..." : "Create account"}
                            </button>
                        </form>
                    </>
                )}
                {/* Link to Login */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account? {" "}
                    <Link to ="/login" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register