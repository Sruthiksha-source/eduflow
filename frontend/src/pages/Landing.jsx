import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">EduFlow</h1>
                <p className="text-gray-500 mb-8">Manage your tutoring business, effortlessly.</p>
                <div className="flex gap-4 justify-center">
                    <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-200 hover:bg-blue-50">
                        Sign in
                    </Link>
                    <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Get started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing