import React from 'react'
import img1 from '../assets/Student.png'
import img2 from '../assets/girl.png'
import img3 from '../assets/react.svg'
import img4 from '../assets/Student.png'

const Blog = () => {
    const photos = [img1, img2, img3, img4, img1, img2, img4, img3]

    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-24 px-6 bg-gradient-to-br from-white to-blue-50">
            <div className="max-w-4xl text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Testimonial</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">100k+ HAPPY LEARNER!</h2>
                <p className="text-gray-600 mb-6">Over 100k learners worldwide trust Lab Academy to achieve their goals. Join a growing community where education meets innovation.</p>

                <div className="flex items-center justify-center gap-4">
                    <button className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition">
                        Read Success Stories
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 transition">
                        Explore testimonials
                    </button>
                </div>
            </div>

            <div className="mt-12 w-full max-w-6xl">
                {/* 5-column grid with 2 rows; center column has a single tall tile (row-span-2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-[180px]">
                    {/* col 1 row1 */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-1 lg:row-start-1">
                        <img src={photos[0]} alt="p1" className="w-full h-full object-cover" />
                    </div>

                    {/* col 2 row1 */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-2 lg:row-start-1">
                        <img src={photos[2]} alt="p2" className="w-full h-full object-cover" />
                    </div>

                    {/* col 3 (middle) - tall single tile spanning 2 rows */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-3 lg:row-start-1 lg:row-span-2">
                        <img src={photos[4]} alt="p3" className="w-full h-full object-cover" />
                    </div>

                    {/* col 4 row1 */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-4 lg:row-start-1">
                        <img src={photos[5]} alt="p4" className="w-full h-full object-cover" />
                    </div>

                    {/* col 5 row1 */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-5 lg:row-start-1">
                        <img src={photos[6]} alt="p5" className="w-full h-full object-cover" />
                    </div>

                    {/* second row items - placed so they appear under col1, col2, col4, col5 respectively */}
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-1 lg:row-start-2">
                        <img src={photos[1]} alt="p6" className="w-full h-full object-cover" />
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-2 lg:row-start-2">
                        <img src={photos[3]} alt="p7" className="w-full h-full object-cover" />
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-4 lg:row-start-2">
                        <img src={photos[7]} alt="p8" className="w-full h-full object-cover" />
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition lg:col-start-5 lg:row-start-2">
                        <img src={photos[8] ?? photos[0]} alt="p9" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
