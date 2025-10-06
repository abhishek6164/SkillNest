import { useState } from "react";
import { FaBolt, FaVideo, FaLayerGroup, FaCogs } from "react-icons/fa";

const categories = [
    "See all",
    "Animation",
    "Illustration",
    "Communication",
    "Digital Marketing",
    "Health",
];

const subjects = {
    Animation: [
        { title: "Motion Capture", icon: FaBolt, duration: "6w", students: 1200 },
        { title: "3D Animation", icon: FaVideo, duration: "8w", students: 980 },
        { title: "Rotoscope Animation", icon: FaLayerGroup, duration: "4w", students: 430 },
        { title: "Mechanical Animation", icon: FaCogs, duration: "10w", students: 670 },
    ],
    Illustration: [
        { title: "Digital Sketching", icon: FaBolt, duration: "3w", students: 540 },
        { title: "Vector Art", icon: FaVideo, duration: "5w", students: 310 },
    ],
    Communication: [
        { title: "Speech Design", icon: FaBolt, duration: "2w", students: 210 },
    ],
    "Digital Marketing": [
        { title: "SEO Strategies", icon: FaLayerGroup, duration: "4w", students: 810 },
    ],
    Health: [
        { title: "Wellness Coaching", icon: FaCogs, duration: "6w", students: 450 },
    ],
};

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState("Animation");
    const [query, setQuery] = useState("");

    const filtered = (activeCategory === "See all"
        ? Object.values(subjects).flat()
        : (subjects[activeCategory] || [])
    ).filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold">Explore Courses</h2>
                    <p className="text-gray-600 mt-1">Browse by category or search to find the right course.</p>
                </div>

                <div className="w-full md:w-1/3">
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search courses..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 outline-none"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6">
                {categories.map((c) => (
                    <button
                        key={c}
                        onClick={() => setActiveCategory(c)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === c ? 'bg-indigo-600 text-white' : 'bg-white/60 text-gray-700 hover:bg-indigo-50'}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((course, i) => {
                    const Icon = course.icon;
                    return (
                        <article key={i} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center">
                                    <Icon className="text-indigo-600 text-xl" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{course.duration} • {course.students} students</p>
                                </div>
                                <div>
                                    <button className="text-indigo-600 font-medium">Enroll</button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-4">A practical course focused on real-world projects and hands-on learning.</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Courses;
