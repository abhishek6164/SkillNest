import React from 'react'

const Join = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24 px-6">
            <div className="w-full max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-60 pointer-events-none" />

                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Join ambitious professionals and unlock your dream career today</h2>
                        <p className="text-gray-500 mb-6">Unlock your true potential and discover opportunities that align with your skills, interests, and aspirations.</p>

                        <form className="flex items-center justify-center gap-4 max-w-xl mx-auto">
                            <label className="relative w-full">
                                <span className="sr-only">Email</span>
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" />
                                    </svg>
                                </div>
                                <input type="email" placeholder="Your mail address" className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                            </label>

                            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Join Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join
