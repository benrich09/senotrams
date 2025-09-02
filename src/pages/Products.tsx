import React from 'react'
const Products: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">Ray-Ban SocialTech AI Glasses</h2>
                    <p className="mb-4">Capture, share, and stay in the moment completely hands-free with our AI-powered glasses.</p>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Shop Now</a>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4">SocialTech Quest 3S</h2>
                    <p className="mb-4">Experience the wonder of mixed reality with our advanced Quest 3S headset.</p>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Shop Now</a>
                </div>
            </div>
        </div>
    );
};

export default Products;