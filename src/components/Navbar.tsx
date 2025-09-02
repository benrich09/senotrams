import { NavLink } from 'react-router-dom';
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold">SENOTRAMS</NavLink>
                <div className="space-x-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>Products</NavLink>
                    <NavLink to="/news" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>News</NavLink>
                    <NavLink to="/leadership" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}>Leadership</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;