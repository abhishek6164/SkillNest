import React from 'react'
import img1 from '../assets/blue1.jpeg'
import img2 from '../assets/blue2.jpeg'
import img3 from '../assets/blue3.jpeg'
import img4 from '../assets/blue4.jpeg'
import img5 from '../assets/girlblue1.jpeg'
import img6 from '../assets/girlblue2.jpg'

const Blog = () => {
    const photos = [img1, img2, img3, img4, img5, img6, img2, img4]

    // Define the layout for each photo (col-start, row-start, row-span)
    const layout = [
        { col: 1, row: 1 },
        { col: 2, row: 2 },
        { col: 2, row: 1 },
        { col: 4, row: 2 },
        { col: 3, row: 1, rowSpan: 2 }, // tall tile
        { col: 4, row: 1 },
        { col: 4, row: 1 },
        { col: 5, row: 1 },
        { col: 1, row: 2 },
        { col: 5, row: 2 },
    ]

    return (
        <section className="min-h-screen flex flex-col items-center justify-start py-24 px-6 bg-gradient-to-br from-white to-blue-100 ">
            {/* Header */}
            <div className="max-w-4xl text-center">
                <span className="inline-block px-3 py-1 mb-4 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                    Testimonial
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    100k+ HAPPY LEARNER!
                </h2>
                <p className="text-gray-600 mb-6">
                    Over 100k learners worldwide trust Lab Academy to achieve their goals. Join a growing community where education meets innovation.
                </p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <button className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
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

            {/* Photo Grid */}
            <div className="mt-12 w-full max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-[180px]">
                    {photos.map((photo, idx) => {
                        const { col, row, rowSpan } = layout[idx] || {}
                        return (
                            <div
                                key={idx}
                                className={`rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105`}
                                style={{
                                    gridColumnStart: col,
                                    gridRowStart: row,
                                    gridRowEnd: rowSpan ? `span ${rowSpan}` : undefined,
                                }}
                            >
                                <img src={photo} alt={`photo-${idx}`} className="w-full h-full object-cover" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blog
