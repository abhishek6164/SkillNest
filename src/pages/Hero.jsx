import girl from "../assets/girlimage.png";

const Hero = () => {
    return (
        <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 md:px-16 lg:px-28 py-16 overflow-hidden bg-gradient-to-br from-blue-600 to-white animate-gradientBackground">

            {/* Animated layered blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute -top-32 -left-44 w-72 h-72 bg-blue-800/40 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-10 w-64 h-64 bg-white/25 rounded-full blur-2xl animate-blob animate-delay-2000"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-800/35 rounded-full blur-3xl animate-blob animate-delay-4000"></div>

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 2px, transparent 78px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 2px, transparent 78px)
            `,
                        backgroundSize: "80px 80px",
                        backdropFilter: "blur(2px)",
                    }}
                />
            </div>

            {/* Left Content */}
            <div className="flex flex-col justify-center text-white max-w-xl md:max-w-2xl space-y-6">
                <span className="bg-white/20 text-white px-5 py-1.5 rounded-full text-sm backdrop-blur-sm w-fit tracking-wide shadow-md">
                    🎓 Transforming Skills Into Success
                </span>

                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.5)]">
                    SHAPING MINDS, <br /> BUILDING FUTURES <br /> THROUGH SMARTER LEARNING
                </h1>

                <p className="text-white/90 text-base lg:text-lg leading-relaxed drop-shadow-sm">
                    Join a new era of education where innovation meets knowledge. Discover
                    expert-led courses, practical skills, and limitless opportunities to
                    achieve your goals.
                </p>

                {/* Search Box */}
                <div className="flex items-center mt-6 bg-white/20 backdrop-blur-lg rounded-full px-2 py-1.5 shadow-lg w-full max-w-md border border-white/30 hover:border-white/50 transition-all duration-300">
                    <input
                        type="email"
                        placeholder="Type your email here..."
                        className="flex-grow bg-transparent text-white placeholder-white/70 px-4 py-2 focus:outline-none"
                    />
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:scale-105">
                        Search
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center relative">
                <div className="absolute w-[440px] h-[440px] bg-blue-400/20 rounded-full blur-2xl -z-10 animate-blob"></div>
                <img
                    src={girl}
                    alt="Student"
                    className="w-[420px] sm:w-[400px] lg:w-[720px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Tailwind custom animations */}
            <style>
                {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.05); }
            66% { transform: translate(-20px, 30px) scale(0.95); }
          }
          .animate-blob {
            animation: blob 15s infinite;
          }
          .animate-delay-2000 { animation-delay: 2s; }
          .animate-delay-4000 { animation-delay: 4s; }
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientBackground {
            background-size: 200% 200%;
            animation: gradientBackground 30s ease infinite;
          }
        `}
            </style>
        </section>
    );
};

export default Hero;
