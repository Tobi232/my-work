

export default function Footer() {
    return (
        <footer className="mt-12 bg-gray-800 text-gray-200 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    &copy; {new Date().getFullYear()} MarketShop. All rights reserved.
                </div>
                <div className="flex space-x-4 justify-center">
                    <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-indigo-400 transition">Terms of Service</a>
                    <a href="#" className="hover:text-indigo-400 transition">Contact</a>
                </div>
            </div>
        </footer>
    );
}