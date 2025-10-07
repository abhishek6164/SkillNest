import { GraduationCap, Users, Sparkles } from "lucide-react";

const features = [
    {
        icon: GraduationCap,
        title: "1,000+ Knowledge Paths",
        desc: "Gain practical knowledge through curated courses that lead to real-world impact.",
    },
    {
        icon: Users,
        title: "Empowered Learning",
        desc: "Personalized, interactive, and self-paced learning for continuous growth.",
    },
    {
        icon: Sparkles,
        title: "Thriving Community",
        desc: "A space where learners and educators support, motivate, and grow together.",
    },
];

const FeatureCards = () => {
    return (
        <section className="relative w-full py-24 flex flex-col items-center overflow-hidden">
            {/* Subtle gradient glow background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-transparent to-transparent blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {features.map((f, i) => {
                    const Icon = f.icon;
                    return (
                        <div
                            key={i}
                            className="group relative p-10 rounded-3xl bg-white/10 backdrop-blur-xl 
              border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.1)]
              hover:shadow-[0_15px_60px_rgba(0,0,0,0.2)] 
              hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer"
                        >
                            {/* Gradient hover ring */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 to-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                            {/* Icon */}
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/40 group-hover:to-indigo-600/40 transition-all duration-500">
                                    <Icon className="w-10 h-10 text-indigo-700 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wide group-hover:text-indigo-700 transition-colors duration-300">
                                {f.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-700/90 text-base leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeatureCards;
