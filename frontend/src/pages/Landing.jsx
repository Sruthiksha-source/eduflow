import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className="min-h-screen font-sans">

            {/* Navbar */}
            <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between sticky top-0 z-50">
                <Link to="/" className="text-xl font-bold text-blue-600">
                    EduFlow
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#how-it-works" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">How it works</a>
                    <a href="#testimonials" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Reviews</a>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/login" className="text-sm text-blue-600 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                        Sign in
                    </Link>
                    <Link to="/register" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-8 py-24">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-12">

                    {/* Left side */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
                            ✦ The smarter platform for modern tutors
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                            Manage your tutoring
                            <span className="text-blue-600"> business, effortlessly.</span>
                        </h1>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            EduFlow brings session booking, student profiles, invoicing,
                            payment processing and analytics into one beautiful platform.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                                Start for free →
                            </Link>
                            <a href="#how-it-works" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium border border-blue-200 hover:bg-blue-50 transition-colors">
                                See how it works
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">Trusted by 500+ tutors across the UK</p>
                    </div>

                    {/* Right side — mock dashboard card */}
                    <div className="flex-1 hidden lg:block">
                        <div className="bg-white rounded-2xl shadow-xl p-6">

                            {/* Card header */}
                            <div className="bg-blue-600 rounded-xl px-4 py-3 mb-4">
                                <p className="text-white font-semibold text-sm">Dashboard Overview</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[
                                    { label: "Students", value: "24" },
                                    { label: "Sessions", value: "8" },
                                    { label: "Revenue", value: "£640" },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-blue-50 rounded-xl p-3">
                                        <p className="text-xl font-bold text-blue-600">{stat.value}</p>
                                        <p className="text-xs text-gray-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Sessions */}
                            <p className="text-xs font-semibold text-gray-500 mb-2">Upcoming Sessions</p>
                            {[
                                { name: "Emma Johnson", subject: "Maths · Level 3", time: "Today, 2:00 PM", color: "bg-blue-500" },
                                { name: "James Wilson", subject: "Physics · Level 2", time: "Today, 4:30 PM", color: "bg-indigo-400" },
                                { name: "Sarah Brown", subject: "Biology · Level 4", time: "Tomorrow, 10:00 AM", color: "bg-green-400" },
                            ].map((session) => (
                                <div key={session.name} className="flex items-center gap-3 border border-gray-100 rounded-lg px-3 py-2 mb-2">
                                    <div className={`w-2 h-2 rounded-full ${session.color}`} />
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-gray-700">{session.name}</p>
                                        <p className="text-xs text-gray-400">{session.subject}</p>
                                    </div>
                                    <p className="text-xs text-blue-500">{session.time}</p>
                                </div>
                            ))}

                            {/* Progress */}
                            <p className="text-xs font-semibold text-gray-500 mt-4 mb-2">Student Progress</p>
                            {[
                                { name: "Emma J.", level: "Level 3", pct: 78 },
                                { name: "James W.", level: "Level 2", pct: 52 },
                            ].map((student) => (
                                <div key={student.name} className="mb-2">
                                    <div className="flex justify-between mb-1">
                                        <p className="text-xs text-gray-600">{student.name}</p>
                                        <p className="text-xs text-blue-500">{student.level}</p>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${student.pct}%` }} />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            {/* Features */}
            <section id="features" className="bg-white px-8 py-24 scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Everything you need to run your practice
                        </h2>
                        <p className="text-lg text-gray-500">
                            Designed for tutors who want to focus on teaching, not admin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            {
                                icon: "🗓️",
                                title: "Session Booking",
                                desc: "Recurring weekly sessions automatically scheduled. Students and tutors always know when they meet — no more chasing dates."
                            },
                            {
                                icon: "👤",
                                title: "Student Profiles & Stages",
                                desc: "Track homework, classwork and extra coursework. Students unlock new levels as they complete milestones — keeping them motivated."
                            },
                            {
                                icon: "💳",
                                title: "Payment Processing",
                                desc: "Stripe-powered payments with automatic invoice generation. Pre-session payment reminders sent 24 hours before every session."
                            },
                            {
                                icon: "📊",
                                title: "Analytics Dashboard",
                                desc: "See hours taught, revenue trends and student progress at a glance. Know your business inside out."
                            },
                        ].map((feature) => (
                            <div key={feature.title} className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}

            {/* Testimonials */}

            {/* CTA Banner */}

            {/* Footer */}

        </div>
    )
}

export default Landing