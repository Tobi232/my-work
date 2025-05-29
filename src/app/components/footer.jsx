
    // File: components/Footer.jsx
    export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12">
        <div className="container mx-auto">
            &copy; {new Date().getFullYear()} Bells MarketShop. All rights reserved.
        </div>
        </footer>
    );
    }