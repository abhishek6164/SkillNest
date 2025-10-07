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
            <section id="home" className="relative overflow-hidden pt-16 md:pt-36 h-[90vh] md:h-[100vh]">
                <div className="relative z-10 flex items-center justify-center h-full">
                    <Hero />
                </div>
            </section>


            {/* Feature Cards */}
            <section id="features" className="relative z-10 mt-10 md:mt-20 pb-28 bg-transparent">
                <FeatureCards />
            </section>

            {/* Remaining Sections */}
            <section id="path"><Path /></section>
            <section id="courses"><Courses /></section>
            <section id="blog"><Blog /></section>
            <FAQ />
            <Join />
            <Footer />
        </div>
    );
};

export default Home;
