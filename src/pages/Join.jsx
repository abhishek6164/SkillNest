import React from 'react'

const Join = () => {
    return (
        <section className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-white px-6 py-28">
            <div className="w-full max-w-4xl">
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-white to-blue-500 opacity-40 pointer-events-none"></div>

                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                            Join ambitious professionals and unlock your dream career today
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Unlock your true potential and discover opportunities that align with your skills, interests, and aspirations.
                        </p>

                        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                            <label className="relative w-full sm:w-auto flex-1">
                                <span className="sr-only">Email</span>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full sm:w-auto pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
                                />
                            </label>

                            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition">
                                Join Us
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join
