import student from "../assets/boy.png"; // student's image

const Path = () => {
    const features = [
        {
            title: "Guided by Specialists",
            desc: "Our instructors are field experts guiding learners with practical knowledge and mentorship.",
        },
        {
            title: "Interactive Tools",
            desc: "Engage with hands-on resources that make learning practical, fun, and effective.",
        },
        {
            title: "Progress Tracking",
            desc: "Track your progress with real-time insights and personalized feedback.",
        },
        {
            title: "Mobile - Friendly",
            desc: "Enjoy a seamless learning experience on any device, anytime, anywhere.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Left: Content */}
                <div className="flex-1">
                    <div className="max-w-xl">
                        <p className="text-sm uppercase text-indigo-600 font-semibold mb-3">Learning Path</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Shape your career with curated learning pathways
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Follow a structured path designed by industry experts. Hands-on projects,
                            progress tracking and mentorship to help you reach your goals faster.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
                                Start Learning
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </button>

                            <a href="#features" className="text-indigo-600 font-medium hover:underline">See features</a>
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div id="features" className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="p-5 bg-white/60 backdrop-blur rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                        {/* simple icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 relative w-full max-w-md">
                    {/* Container with controlled height */}
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-blue-100 h-64 md:h-[80vh]">
                        <img
                            src={student}
                            alt="Student"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Decorative gradient blob */}
                    <div className="absolute -top-6 right-6 w-40 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 rounded-lg blur-3xl pointer-events-none" />
                </div>

            </div>
        </section>
    );
}

export default Path;
