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
                    <section className="w-full py-20 flex flex-col items-center bg-transparent">
                        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                            {features.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <div
                                        key={i}
                                        className="p-10 rounded-3xl bg-gradient-to-b from-[#C2DBFF]/70 to-[#A9C5FF]/30
                        backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.15)]
                        hover:scale-[1.05] hover:shadow-[0_12px_60px_rgba(0,0,0,0.25)]
                        transition-all duration-500 ease-in-out text-center"
                                    >
                                        <div className="flex justify-center mb-5">
                                            <Icon className="w-12 h-12 text-blue-700" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {f.title}
                                        </h3>
                                        <p className="text-gray-700 text-base leading-relaxed">
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
