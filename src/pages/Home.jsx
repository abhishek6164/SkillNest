import Navbar from "../components/Navbar";
import bg from "../assets/bg.jpg";
import Hero from "./Hero";
import FeatureCards from "./FeatureCards";
import Path from "./PathPage";
import Courses from "./Courses";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Join from "./Join";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section with background image positioned at the top */}
            <section className="relative overflow-hidden pt-16 md:pt-36 h-[90vh] md:h-[100vh]">
                {/* Background Image (only for Hero) */}
                <div
                    className="absolute inset-0 -z-20 bg-cover bg-top brightness-[0.9]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundPosition: "top center",
                    }}
                />

                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none bg-transparent"
                    style={{
                        backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.05) 3px, transparent 2px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 3px, transparent 2px)
      `,
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Hero Section */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <Hero />
                </div>
            </section>


            {/* Feature Cards */}
            <section className="relative z-10 mt-10 md:mt-20 pb-28 bg-transparent">
                <FeatureCards />
            </section>

            {/* Remaining Sections */}
            <Path />
            <Courses />
            <Blog />
            <FAQ />
            <Join />
            <Footer />
        </div>
    );
};

export default Home;
