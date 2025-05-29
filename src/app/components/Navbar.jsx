import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-indigo-700 text-white">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold">
                    Bells MarketShop
                </Link>
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-indigo-200">Home</Link>
                    <Link href="/login" className="hover:text-indigo-200">Login</Link>
                    <Link href="/register" className="hover:text-indigo-200">Register</Link>
                    <Link href="/products" className="hover:text-indigo-200">Products</Link>
                </div>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-indigo-700">
                    <Link href="/" className="block hover:text-indigo-200">Home</Link>
                    <Link href="/login" className="block hover:text-indigo-200">Login</Link>
                    <Link href="/register" className="block hover:text-indigo-200">Register</Link>
                    <Link href="/products" className="block hover:text-indigo-200">Products</Link>
                </div>
            )}
        </nav>
    );
}