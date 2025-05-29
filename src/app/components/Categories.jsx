
    // === 6. Categories Component ===
    // File: components/Categories.jsx

    const categories = ["Foodstuff", "Electronics", "Books", "Fashion", "Appliances"];

    export default function Categories() {
    return (
        <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Shop by Category</h2>
        <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
            <span
                key={index}
                className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-indigo-200"
            >
                {cat}
            </span>
            ))}
        </div>
        </div>
    );
    }