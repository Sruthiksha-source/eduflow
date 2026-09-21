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
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-8 py-24">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-12">

                    {/* Test content*/}
                    <div className="flex-1">
                        <div className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                            The smarter platform for tutors
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Manage your tutoring
                            <span className="text-blue-600">
                                business, effortlessly.
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            EduFlow brings session booking, student profiles, invoicing, payment processing and analytics into one platform
                        </p>

                        {/* CTA buttons */}
                        <div className="flex items-center gap-4 mb-8">
                            <Link
                                to="/register"
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                                    Start for free →
                            </Link>
                            <a
                                href="#how-it-works"
                                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium border border-blue-200 hover:bg-blue-50 transition-colors"
                            >
                                See how it works
                            </a>
                        </div>
                        {/* social Proof */}
                        <p className="text-sm text-gray-400">
                            Trusted by 500+ tutors across the UK
                        </p>
                    </div>

                    {/* Right : mock dashboard */}
                    <div className="bg-blue-600 rounded-xl px-4 py-3 mb-4">
                        <p className="text-white font-semibold text-sm">
                            Dashboard Overview
                        </p>
                    </div>
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                            {label: "Students", value: "24"},
                            {label: "Sessions", value: "8"},
                            {label: "Revenue", value: "£640"}
                        ].map((stat)=>(
                            <div key={stat.label} className="g-blue-50 rounded-xl p-3">
                                <p className="text-xl font-bold text-blue-600">{stat.value}</p>
                                <p className="text-xs text-gray-400">{stat.label}</p>
                            </div>
                        ))}

                        {/* Session List */}
                        <p className="text-xs font-semibold text-gray-500 mb-2">
                            Upcoming sessions
                        </p>
                        {[
                            {name: "Emma Johnson", subject: "Maths • Level 3", time: "Today, 2:00 PM", color:"bg-blue-500"},
                            {name: "James Wilson", subject: "Physics • Level 2", time: "Today, 4:30 PM", color:"bg-indigo-400"},
                            {name: "Sarah Brown", subject: "Biology • Level 4", time: "Tomorrow, 10:00 PM", color: "bg-green-400"}
                        ].map((session)=> (
                            <div key={session.name} className="flex items-centergap-3 border border-gray-100 rounded-lg px-3 py-2 mb-2">
                                <div className={`w-2 h-2 rounded-full ${session.color}`}/>
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-gra-700">{session.name}</p>
                                    <p className="text-xs text-gray-400">{session.subject}</p>
                                </div>
                                <p className="text-xs text-blue-500">{session.time}</p>
                            </div>
                        ))}
                    {/* Progress bars */}
                    <p className="text-xs font-semibold text-gray-500 mt-4 mb-2">
                        Student Progress
                    </p>
                    {[
                        {name: "Emma J.", level:"Level 3", pct: 78},
                        {name: "James W.", level: "Level 2", pct: 52}
                    ].map((student)=>(
                        <div key={student.name}className="mb-2">
                            <div className="flex justify-between mb-1">
                                <p className="text-xs text-gray-600">{student.name}</p>
                                <p className="text-xs text-blue-500">{student.level}</p>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                                <div
                                    className="bg-blue-500 h-1.5 rounded-full"
                                    style={{width: `${student.pct}%`}}
                                />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            {/* Features */}
            {/* How it works */}
            {/* Testimonials */}
            {/* CTA Banner */}
            {/* Footer */}
        </div>
    )
}