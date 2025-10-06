import Navbar from "../components/Navbar";
import bg from "../assets/bg.jpg";
import Hero from "./Hero";
import FeatureCards from "./FeatureCards";
import Path from './Path'
const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section with background image positioned at the top */}
            <section className="relative pt-16 md:pt-20 overflow-hidden">
                {/* Background only for Hero - positioned to the top */}
                <div
                    className="absolute inset-0 -z-20 bg-cover bg-top brightness-[0.9]"
                    style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'top' }}
                />

                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div
                        className="w-full h-full bg-transparent"
                        style={{
                            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 2px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 2px, transparent 1px)
            `,
                            backgroundSize: "80px 80px",
                        }}
                    />
                </div>

                <Hero className="relative z-10" />

            </section>

            {/* Features (no background here) */}
            <section className="relative z-10 mt-10 md:mt-20 pb-28 bg-transparent">
                <FeatureCards />

            </section>

            <Path />
        </div>
    );
};

export default Home;
