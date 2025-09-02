import React from 'react'
const Leadership: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Meet Our Leadership</h1>
            <p className="text-lg mb-6">Our leaders are guiding SocialTech as mixed reality and AI evolve, shaping the future of digital connection.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Ben Rich</h2>
                    <p className="text-gray-600">CEO</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Benson</h2>
                    <p className="text-gray-600">CTO</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Richard</h2>
                    <p className="text-gray-600">Head of Innovation</p>
                </div>
            </div>
        </div>
    );
};

export default Leadership;