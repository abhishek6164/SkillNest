import React, { useState } from 'react'

const faqData = [
    { id: 1, q: 'How do I create an account on the job board?', a: 'Use the signup link in the top-right to register with your email or social accounts. Fill your profile and verify your email to unlock job applications.' },
    { id: 2, q: 'How do I apply for a job through the platform?', a: 'Open the job listing, click Apply and follow the guided steps to submit your resume and optional cover letter.' },
    { id: 3, q: 'How can I track the status of my job applications?', a: 'Visit the Applications section in your dashboard to see submitted, under review and shortlisted statuses with timestamps.' },
    { id: 4, q: 'Is there a cost to use the job board, and what features are free?', a: 'Basic browsing and application submission are free. Premium features like featured listings or priority reviews are paid upgrades.' },
    { id: 5, q: 'Can I edit my application after submission?', a: 'You can edit certain fields before the employer starts review. After review starts, contact support to request changes.' },
]

const FAQ = () => {
    const [openId, setOpenId] = useState(4)

    return (
        <section className="min-h-screen flex items-start justify-center py-24 px-6 bg-gradient-to-r from-white to-gray-50">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Frequently asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        {faqData.slice(0, 3).map(item => (
                            <div key={item.id} className={`relative bg-white rounded-xl p-4 shadow-sm transition ${openId === item.id ? 'ring-2 ring-indigo-200' : 'hover:shadow-md'}`}>
                                <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full text-left flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">{String(item.id).padStart(2, '0')}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm md:text-base font-medium text-gray-800">{item.q}</h3>
                                            <span className="text-indigo-500 text-xl">{openId === item.id ? '−' : '+'}</span>
                                        </div>
                                        {openId === item.id && (
                                            <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        {faqData.slice(3).map(item => (
                            <div key={item.id} className={`relative bg-white rounded-xl p-4 shadow-sm transition ${openId === item.id ? 'ring-2 ring-indigo-200' : 'hover:shadow-md'}`}>
                                <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full text-left flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">{String(item.id).padStart(2, '0')}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm md:text-base font-medium text-gray-800">{item.q}</h3>
                                            <span className="text-indigo-500 text-xl">{openId === item.id ? '−' : '+'}</span>
                                        </div>
                                        {openId === item.id && (
                                            <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
