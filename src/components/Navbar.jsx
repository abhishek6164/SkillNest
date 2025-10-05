import React, { useState } from "react";
const Navbar = () => {
    const links = ["Home", "Learning Path", "Course", "Blogs"];
    const [active, setActive] = useState("Home");

    return (
        // Make the navbar fixed so it stays on top across pages and fully transparent so the background shows through
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex text-lg items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-white nova-square-regular text-3xl tracking-wider">
                            SkillNest
                        </span>
                    </div>

                    {/* Links */}
                    {/* Desktop links: transparent background so navbar shows BG through */}
                    <nav className="hidden md:flex items-center justify-center space-x-2 rounded-full px-2 py-1">
                        {links.map((l) => (
                            <button
                                key={l}
                                onClick={() => setActive(l)}
                                className={`px-5 py-2 rounded-full font-extrabold transition-all duration-300 text-sm 
                          ${active === l
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                {l}
                            </button>
                        ))}
                    </nav>

                    {/* Register Button */}
                    <div className="hidden md:flex items-center">
                        <button className="flex items-center gap-2 font-extrabold bg-blue-600 text-white px-5 py-2 rounded-full transition duration-300 hover:bg-blue-700 shadow-md">
                            Register
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>


    );
};

export default Navbar;
