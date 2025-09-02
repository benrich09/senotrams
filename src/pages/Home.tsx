import { Link } from 'react-router-dom';
import React from 'react'

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <section className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to SocialTech</h1>
                <p className="text-lg mb-6">We're committed to connecting people and creating a positive impact through innovative technologies.</p>
                <Link to="/news" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Explore Our Innovations</Link>
            </section>
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">AI Glasses</h2>
                    <p>Capture and share moments hands-free with our cutting-edge AI glasses.</p>
                    <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</Link>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Mixed Reality</h2>
                    <p>Dive into immersive experiences with our latest mixed reality headset.</p>
                    <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</Link>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Community Impact</h2>
                    <p>We're dedicated to safety and positive change in digital spaces.</p>
                    <Link to="/news" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;