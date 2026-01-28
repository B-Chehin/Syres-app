import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Landing = () => {
    useEffect(() => {
        // Check if URL has hash, scroll to it
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="landing-page">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;
