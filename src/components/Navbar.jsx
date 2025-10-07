import React, { useEffect, useState } from "react";

const Navbar = () => {
    const links = [
        { label: "Home", href: "#home" },
        { label: "Learning Path", href: "#path" },
        { label: "Courses", href: "#courses" },
        { label: "Blogs", href: "#blog" },
    ];

    const [active, setActive] = useState("Home");

    useEffect(() => {
        const ids = links.map((l) => l.href.replace('#', ''));
        const observers = [];

        const onScroll = () => {
            // compute current section in view
            let current = 'Home';
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom > 120) {
                    current = id === 'home' ? 'Home' : (id === 'path' ? 'Learning Path' : id.charAt(0).toUpperCase() + id.slice(1));
                    break;
                }
            }
            setActive(current);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        // run once to set initial active
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-indigo-600 tracking-wide">
                        SkillNest
                    </span>
                </div>

                {/* Links */}
                <nav
                    className="hidden md:flex items-center space-x-4 
          px-6 py-1 rounded-2xl 
          border border-white/30 
          bg-white/10 
          backdrop-blur-2xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_6px_rgba(0,0,0,0.1)]
          transition-all duration-500 hover:bg-white/20 hover:border-white/40"
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setActive(link.label)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                active === link.label ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-800 hover:text-indigo-600 hover:bg-white/40'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Register Button */}
                <div className="hidden md:flex ">
                    <button className="flex items-center gap-2 font-semibold bg-indigo-600 text-white px-5 py-2 rounded-full transition duration-300 hover:bg-indigo-700 shadow-md">
                        Register
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
                </div>
            </div>
        </header>
    );
};

export default Navbar;
