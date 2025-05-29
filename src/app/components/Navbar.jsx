    // Root Next.js App with Tailwind - Bells MarketShop
    // Starting with Navbar, Homepage, Login Page, Product and Categories Section

    // === 1. Navbar Component ===
    // File: components/Navbar.jsx
    import Link from "next/link";

    export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
            Bells MarketShop
            </Link>
            <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">
                Home
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-indigo-600">
                Login
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-indigo-600">
                Register
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-indigo-600">
                Products
            </Link>
            </div>
        </div>
        </nav>
    );
    }


