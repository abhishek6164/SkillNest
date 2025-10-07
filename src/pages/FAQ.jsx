import React, { useState } from 'react'

const faqData = [
    { id: 1, q: 'How do I create an account on the job board?', a: 'Use the signup link in the top-right to register with your email or social accounts. Fill your profile and verify your email to unlock job applications.' },
    { id: 2, q: 'How do I apply for a job through the platform?', a: 'Open the job listing, click Apply and follow the guided steps to submit your resume and optional cover letter.' },
    { id: 3, q: 'How can I track the status of my job applications?', a: 'Visit the Applications section in your dashboard to see submitted, under review and shortlisted statuses with timestamps.' },
    { id: 4, q: 'Is there a cost to use the job board, and what features are free?', a: 'Basic browsing and application submission are free. Premium features like featured listings or priority reviews are paid upgrades.' },
    { id: 5, q: 'Can I edit my application after submission?', a: 'You can edit certain fields before the employer starts review. After review starts, contact support to request changes.' },
]

const FAQItem = ({ item, isOpen, toggle, textColor }) => (
    <div
        className={`relative bg-white/90 ${textColor} backdrop-blur-md rounded-xl p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] ${isOpen ? 'ring-2 ring-indigo-300 shadow-lg' : ''
            }`}
    >
        <button onClick={() => toggle(item.id)} className="w-full text-left flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
                {String(item.id).padStart(2, '0')}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm lg:text-black md:text-base font-medium">{item.q}</h3>
                    <span className="text-indigo-500 text-2xl select-none">{isOpen ? '−' : '+'}</span>
                </div>
                <div
                    className={`mt-3 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <p className="text-sm lg:text-black md:text-base">{item.a}</p>
                </div>
            </div>
        </button>
    </div>
)

const FAQ = () => {
    const [openId, setOpenId] = useState(4)
    const toggle = (id) => setOpenId(openId === id ? null : id)

    // Split data into two columns dynamically
    const mid = Math.ceil(faqData.length / 2)
    const columns = [faqData.slice(0, mid), faqData.slice(mid)]

    // const textColor = 'text-black' // parent se text color set

    return (
        <section className=" flex items-start justify-center py-36 px-6 bg-gradient-to-r from-white to-gray-50">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-black text-center md:text-left">
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {columns.map((col, idx) => (
                        <div key={idx} className="space-y-4">
                            {col.map((item) => (
                                <FAQItem key={item.id} item={item} isOpen={openId === item.id} toggle={toggle} className="text-red" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
