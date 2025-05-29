import Navbar from "../app/components/Navbar";

const mockPurchases = [
    { id: 1, item: "Rice Cooker", status: "Delivered" },
    { id: 2, item: "Bluetooth Speaker", status: "Pending" },
    { id: 3, item: "Desk Lamp", status: "Pending" },
];

export default function Purchases() {
    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold text-indigo-700 mb-6">My Purchases</h1>
                <h2 className="text-lg font-semibold mb-2">Pending Orders</h2>
                <ul className="mb-6">
                    {mockPurchases
                        .filter((p) => p.status === "Pending")
                        .map((p) => (
                            <li key={p.id} className="mb-2 p-3 bg-yellow-50 rounded border border-yellow-200">
                                {p.item} <span className="text-yellow-600 font-semibold">({p.status})</span>
                            </li>
                        ))}
                </ul>
                <h2 className="text-lg font-semibold mb-2">All Orders</h2>
                <ul>
                    {mockPurchases.map((p) => (
                        <li key={p.id} className="mb-2 p-3 bg-gray-50 rounded border">
                            {p.item} <span className={p.status === "Pending" ? "text-yellow-600" : "text-green-600"}>({p.status})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}