import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className="min-h-screen font-sans">
            {/* Navbar */}
            <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between sticky top-0 z-50">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    EduFlow
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        How it works
                    </a>
                    <a href="#testimonials" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                        Reviews
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="text-sm text-blue-600 px-4 py-2 rounded-lg border border-blue-50 hover:bg-blue-50 transition-colors">
                            Sign in
                        </Link>
                        <Link
                            to="/register"
                            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                </div>
            </nav>
            {/* Hero */}
            {/* Features */}
            {/* How it works */}
            {/* Testimonials */}
            {/* CTA Banner */}
            {/* Footer */}
        </div>
    )
}