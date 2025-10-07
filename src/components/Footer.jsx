import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Brand + Contact */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-extrabold text-indigo-600 mb-4">
                            SkillNest
                        </h3>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-indigo-100 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">Contact us</p>
                                    <p className="text-gray-500 text-sm">
                                        contact@company.com
                                        <br />
                                        +91 99999 99999
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-indigo-100 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243 4.243"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">Location</p>
                                    <p className="text-gray-500 text-sm">Pune, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                Company
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>Projects</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>About us</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                Services
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>Web Development</li>
                                <li>UI Design</li>
                                <li>Testing</li>
                                <li>Cloud Apps</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                Workflow
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>Startup</li>
                                <li>Scaling</li>
                                <li>Transformation</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                Technology
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>React</li>
                                <li>Node</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} SkillNest. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
