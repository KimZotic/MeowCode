"use client";
import { useState } from "react";

const dummyOrders = [
  { id: "A001", user: "0112345678", game: "MLBB", jumlah: "86 Diamonds", status: "Menunggu" },
  { id: "A002", user: "0198765432", game: "PUBG", jumlah: "UC 60", status: "Selesai" },
];

export default function AdminPage() {
  const [orders, setOrders] = useState(dummyOrders);

  const approveOrder = (id) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "Selesai" } : o));
  };

  return (
    <section className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Panel Admin</h2>
      <table className="w-full text-left text-white">
        <thead>
          <tr className="border-b border-gray-700">
            <th>ID</th>
            <th>User</th>
            <th>Game</th>
            <th>Jumlah</th>
            <th>Status</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b border-gray-700">
              <td>{o.id}</td>
              <td>{o.user}</td>
              <td>{o.game}</td>
              <td>{o.jumlah}</td>
              <td>{o.status}</td>
              <td>
                {o.status === "Menunggu" && (
                  <button onClick={() => approveOrder(o.id)} className="bg-primary px-2 py-1 rounded text-sm hover:bg-red-600">
                    Sahkan
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
