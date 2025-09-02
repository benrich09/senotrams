import { Link } from 'react-router-dom';

const News: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Latest News</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">SocialTech Connect 2025</h2>
                <p className="mb-4">Join us virtually on September 17 - 18 for the Connect livestream. Explore our latest innovations in AI glasses, metaverse technologies, and more.</p>
                <Link to="#" className="text-blue-600 hover:underline">Register Now</Link>
            </div>
        </div>
    );
};

export default News;