import { Link } from "react-router-dom"
import { useState } from "react"

// Pages listed in the menu and the feature cards
const featurePages = [
    { to: "/features/session-booking", title: "Session Booking", desc: "Plan lessons and manage your schedule in one place." },
    { to: "/features/student-profiles", title: "Student Profiles & Stages", desc: "Track progress, milestones, and learning goals." },
    { to: "/features/payments", title: "Payment Processing", desc: "Create invoices and collect payments without friction." },
    { to: "/features/analytics", title: "Analytics Dashboard", desc: "Monitor revenue, sessions, and student progress." },
]

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen font-serif">

            {/* Navbar */}
            <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between sticky top-0 z-50">
                <Link to="/" className="text-xl font-bold text-brand-600">
                    EduFlow
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm text-stone-500 hover:text-brand-600 transition-colors">Features</a>
                    <a href="#how-it-works" className="text-sm text-stone-500 hover:text-brand-600 transition-colors">How it works</a>
                    <a href="#testimonials" className="text-sm text-stone-500 hover:text-brand-600 transition-colors">Reviews</a>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/login" className="text-sm text-brand-600 px-4 py-2 rounded-lg border border-brand-200 hover:bg-brand-50 transition-colors">
                        Sign in
                    </Link>
                    <Link to="/register" className="text-sm bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors">
                        Get Started
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        className="ml-1 p-2 rounded-lg hover:bg-brand-50 flex flex-col gap-1.5 transition-colors"
                    >
                        <span className="block w-5 h-0.5 bg-stone-700" />
                        <span className="block w-5 h-0.5 bg-stone-700" />
                        <span className="block w-5 h-0.5 bg-stone-700" />
                    </button>
                </div>
                {/* Dropdown menu */}
                {menuOpen && (
                    <div className="absolute right-4 sm:right-8 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white border border-stone-200 rounded-xl shadow-lg p-2">
                        <p className="px-3 pt-2 pb-1 text-xs font-medium uppercase tracking-wider text-stone-400">
                            Explore EduFlow
                        </p>
                        {featurePages.map((page) => (
                            <Link
                                key={page.to}
                                to={page.to}
                                onClick={() => setMenuOpen(false)}
                                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-brand-50 transition-colors"
                            >
                                {page.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero */}
            <section className="bg-brand-50 px-8 py-24">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-12">

                    {/* Left side */}
                    <div className="flex-1">
                        <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-6">
                            Tutoring management
                        </p>
                        <h1 className="text-5xl font-bold text-stone-800 leading-tight mb-4">
                            Manage your tutoring{" "}
                            <span className="text-brand-600">business, effortlessly.</span>
                        </h1>
                        <p className="text-lg text-stone-500 mb-8 leading-relaxed">
                            EduFlow brings session booking, student profiles, invoicing,
                            payment processing and analytics into one platform.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link to="/register" className="bg-brand-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-700 transition-colors">
                                Start for free
                            </Link>
                            <a href="#how-it-works" className="bg-white text-brand-600 px-6 py-3 rounded-xl font-medium border border-brand-200 hover:bg-brand-50 transition-colors">
                                See how it works
                            </a>
                        </div>
                    </div>

                    {/* Right side — mock dashboard card */}
                    <div className="flex-1 hidden lg:block">
                        <div className="bg-white rounded-2xl shadow-xl p-6">

                            {/* Card header */}
                            <div className="bg-brand-600 rounded-xl px-4 py-3 mb-4">
                                <p className="text-white font-semibold text-sm">Dashboard Overview</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[
                                    { label: "Students", value: "24" },
                                    { label: "Sessions", value: "8" },
                                    { label: "Revenue", value: "£640" },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-brand-50 rounded-xl p-3">
                                        <p className="text-xl font-bold text-brand-600">{stat.value}</p>
                                        <p className="text-xs text-stone-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Sessions */}
                            <p className="text-xs font-semibold text-stone-500 mb-2">Upcoming Sessions</p>
                            {[
                                { name: "Emma Johnson", subject: "Maths · Level 3", time: "Today, 2:00 PM", color: "bg-brand-500" },
                                { name: "James Wilson", subject: "Physics · Level 2", time: "Today, 4:30 PM", color: "bg-brand-400" },
                                { name: "Sarah Brown", subject: "Biology · Level 4", time: "Tomorrow, 10:00 AM", color: "bg-brand-300" },
                            ].map((session) => (
                                <div key={session.name} className="flex items-center gap-3 border border-stone-100 rounded-lg px-3 py-2 mb-2">
                                    <div className={`w-2 h-2 rounded-full ${session.color}`} />
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-stone-700">{session.name}</p>
                                        <p className="text-xs text-stone-400">{session.subject}</p>
                                    </div>
                                    <p className="text-xs text-brand-500">{session.time}</p>
                                </div>
                            ))}

                            {/* Progress */}
                            <p className="text-xs font-semibold text-stone-500 mt-4 mb-2">Student Progress</p>
                            {[
                                { name: "Emma J.", level: "Level 3", pct: 78 },
                                { name: "James W.", level: "Level 2", pct: 52 },
                            ].map((student) => (
                                <div key={student.name} className="mb-2">
                                    <div className="flex justify-between mb-1">
                                        <p className="text-xs text-stone-600">{student.name}</p>
                                        <p className="text-xs text-brand-500">{student.level}</p>
                                    </div>
                                    <div className="w-full bg-stone-100 rounded-full h-1.5">
                                        <div className="bg-brand-500 h-1.5 rounded-full" style={{ width: `${student.pct}%` }} />
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
                        <h2 className="text-4xl font-bold text-stone-800 mb-4">
                            Everything you need to run your practice
                        </h2>
                        <p className="text-lg text-stone-500">
                            Designed for tutors who want to focus on teaching, not admin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featurePages.map((feature) => (
                            <Link
                                key={feature.to}
                                to={feature.to}
                                className="block bg-brand-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-semibold text-stone-800 mb-2">{feature.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
                                <p className="mt-4 text-sm font-medium text-brand-600">See example</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="bg-brand-50 px-8 py-24 scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-stone-800 mb-4">
                            Up and running in minutes
                        </h2>
                        <p className="text-lg text-stone-500">
                            Three simple steps to managing your tutoring business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                number: "01",
                                title: "Create your account",
                                desc: "Sign up free in under a minute. No credit card required to get started."
                            },
                            {
                                number: "02",
                                title: "Add your students",
                                desc: "Build profiles, set subjects, track homework and unlock learning levels."
                            },
                            {
                                number: "03",
                                title: "Book, invoice, grow",
                                desc: "Schedule sessions, generate invoices automatically and get paid via Stripe."
                            },
                        ].map((step, index, steps) => (
                            <div key={step.number}>
                                {/* Badge + connector line */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 shrink-0 bg-brand-600 text-white font-bold rounded-xl flex items-center justify-center">
                                        {step.number}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block flex-1 h-0.5 bg-brand-200" />
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold text-stone-800 mb-2">{step.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}

            {/* CTA Banner */}

            {/* Footer */}

        </div>
    )
}

export default Landing
