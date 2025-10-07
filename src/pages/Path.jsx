import student from "../assets/boy.png";

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
            title: "Mobile-Friendly",
            desc: "Enjoy a seamless learning experience on any device, anytime, anywhere.",
        },
    ];

    return (
        <section className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28 overflow-hidden">
            {/* Soft background aura */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent blur-2xl -z-10" />

            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div className="max-w-xl">
                        <p className="text-sm uppercase text-indigo-600 font-semibold mb-2 tracking-wide">
                            Learning Path
                        </p>

                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Shape Your Career With Curated Learning Pathways
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            Follow structured paths designed by industry experts. Experience
                            hands-on projects, personalized mentorship, and continuous
                            progress tracking to accelerate your growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-5">
                            <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-700 transition-all duration-300">
                                Start Learning
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 17L17 7M7 7h10v10"
                                    />
                                </svg>
                            </button>

                            <a
                                href="#features"
                                className="text-indigo-600 font-semibold hover:underline transition-all"
                            >
                                See features
                            </a>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div
                        id="features"
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-xl 
                border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
                hover:-translate-y-1 hover:border-indigo-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative flex justify-center">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-200/60 to-blue-200/40 backdrop-blur-lg border border-white/30">
                        <img
                            src={student}
                            alt="Student"
                            className="w-full h-full object-contain mix-blend-normal scale-105 hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Glow Element */}
                    <div className="absolute -top-8 right-10 w-44 h-28 bg-gradient-to-r from-indigo-400/50 to-purple-400/50 opacity-40 rounded-full blur-3xl animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Path;
