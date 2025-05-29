
// === 2. Home Page ===
// File: pages/index.js
import Navbar from "../app/components/Navbar";
import Categories from "../app/components/Categories";
import ProductList from "../app/components/ProductList";
import Footer from "../app/components/footer";


export default function Home() {
return (
    <div>
    <Navbar />
    <main className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-700 mb-4">
        Welcome to Bells MarketShop
        </h1>
        <p className="text-gray-600 mb-6">
        Buy and sell easily within the university community!
        </p>

        <Categories />
        <ProductList />
        <Footer />
    </main>
    </div>
);
}