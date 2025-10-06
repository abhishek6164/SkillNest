import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white/60 backdrop-blur-sm py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-1">
                        <div className="text-indigo-600 font-bold text-lg mb-4">SKILLNEST</div>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-indigo-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-gray-800">Contact us</div>
                                    <div className="text-gray-500 text-sm">contact@company.com<br />020 - 245 4500</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-indigo-50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243 4.243" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-gray-800">Location</div>
                                    <div className="text-gray-500 text-sm">Warsaw, Poland</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 grid grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Company</h4>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li>Projects</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>About us</li>
                                <li>Pricing</li>
                                <li>Partners</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Service</h4>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li>Products</li>
                                <li>Visual Design</li>
                                <li>Web Development</li>
                                <li>User Testing</li>
                                <li>Quality Assurance</li>
                                <li>Cloud Application</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Workflow</h4>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li>Startup</li>
                                <li>Scaling</li>
                                <li>Transformation</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Technology</h4>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li>React</li>
                                <li>Node</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
