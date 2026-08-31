import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const{user, logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    return(
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-blue-600"> Eduflow </h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                        {user?.is_tutor ? "🎓":"📓"}{user?.full_name}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition colours"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main content */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Tutor dashboard */}
                {user?.is_tutor && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Tutor Dashboard
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Welcome back, {user?.full_name}! Her's your overview.
                        </p>

                        {/* Stats cards */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <p className="text-sm text-gray-500"> Total Students </p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <p className="text-sm text-gray-500"> Session this week </p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <p className="text-sm text-gray-500"> Total Revenue </p>
                                <p className="text-3xl font-bold text-gray-800 mt-1"> £0 </p>
                            </div>
                        </div>

                        {/* Quick actions */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
                            <div className="flex gap-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                    + Add student
                                </button>
                                <button className = "bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                                    + Book Session
                                </button>

                            </div>
                        </div>
                    </>
                )}

                {/* Student Dashboard */}
                {!user?.is_tutor &&(
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            My Learning
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Welcome back, {user?.full_name}!
                        </p>

                        {/* Student stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <p className="text-sm text-gray-500">Current Stage</p>
                                <p className="text-3xl font-bold text-blue-600 mt-1">1</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <p className="text-sm text-gray-500"> Assignments Done </p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <p className="text-sm text-gray-500">Next session</p>
                                <p className="text-lg font-bold text-gray-800 mt-1">TBC</p>
                            </div>
                        </div>

                        {/* Link student to tutor */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h3 className="font-semibold text-blue-800 mb-2">
                                Link to your tutor
                            </h3>
                            <p className="text-sm text-blue-600 mb-4">
                                Enter your tutor email address to get started
                            </p>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter tutor's email"
                                    className="flex-1 border border-blue-200 rounded-lgpx-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                    Find tutor
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Dashboard