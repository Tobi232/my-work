// === 5. Product List Component ===
// File: components/ProductList.jsx

const products = [
    { id: 1, name: "Rice Cooker", price: 12000, image: "/rice-cooker.jpeg" },
    { id: 2, name: "Used Textbooks", price: 3000, image: "/text-book.jpeg" },
    { id: 3, name: "Power Bank", price: 8500, image: "/power.jpeg" },
    { id: 4, name: "Electronics", price: 50000, image: "/console.jpeg" },
    { id: 5, name: "Bluetooth Speaker", price: 7000, image: "/bluetooth speaker.jpeg" },
    { id: 6, name: "Backpack", price: 4500, image: "/back pack.jpeg" },
    { id: 7, name: "Desk Lamp", price: 2500, image: "/desk lamp.jpg" },
    { id: 8, name: "Headphones", price: 15000, image: "/beats.jpeg" },
    { id: 9, name: "Water Bottle", price: 1200, image: "/water bottle.jpeg" }
];

export default function ProductList() {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Products for Sale</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center">
                        <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded mb-2 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="object-contain h-full w-full"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 text-center">{item.name}</h3>
                        <p className="text-indigo-600 font-bold text-center">₦{item.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}