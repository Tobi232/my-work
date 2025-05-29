
    // === 5. Product List Component ===
    // File: components/ProductList.jsx

    const products = [
    { id: 1, name: "Rice Cooker", price: 12000, image: "/rice-cooker.jpeg" },
    { id: 2, name: "Used Textbooks", price: 3000, image: "/text-book.jpeg" },
    { id: 3, name: "Power Bank", price: 8500, image: "/power.jpeg" },
    ];
    
    export default function ProductList() {
    return (
        <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Products for Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg">
                <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                <p className="text-indigo-600 font-bold">₦{item.price.toLocaleString()}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }