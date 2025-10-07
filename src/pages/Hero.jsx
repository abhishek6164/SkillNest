import girl from "../assets/girl.png";

const Hero = () => {
    return (
        <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 md:px-16 lg:px-28 py-10 md:py-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-white max-w-xl md:max-w-2xl space-y-6">
                <span className="bg-white/10 text-gray-400 px-5 py-1.5 rounded-full text-sm backdrop-blur-sm w-fit tracking-wide">
                    🎓 Transforming Skills Into Success
                </span>

                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                    SHAPING MINDS, <br /> BUILDING FUTURES <br /> THROUGH SMARTER LEARNING
                </h1>

                <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                    Join a new era of education where innovation meets knowledge. Discover
                    expert-led courses, practical skills, and limitless opportunities to
                    achieve your goals.
                </p>

                {/* Search Box */}
                <div className="flex items-center mt-6 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1.5 shadow-lg w-full max-w-md border border-white/20 hover:border-white/30 transition-all duration-300">
                    <input
                        type="email"
                        placeholder="Type your email here..."
                        className="flex-grow bg-transparent text-white placeholder-gray-300 px-4 py-2 focus:outline-none"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
                        Search
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
                <img
                    src={girl}
                    alt="Student"
                    className="w-[320px] sm:w-[400px] lg:w-[520px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500"
                />
            </div>
        </section>
    );
};

export default Hero;
