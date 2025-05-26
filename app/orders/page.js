"use client";
import { useState } from "react";

export default function OrdersPage() {
  const [orderID, setOrderID] = useState("");
  const [result, setResult] = useState(null);

  const checkOrder = (e) => {
    e.preventDefault();
    // Simulasi result
    setResult({
      id: orderID,
      game: "Mobile Legends",
      status: "Selesai",
      amount: "172 Diamonds",
      date: "26/05/2025",
    });
  };

  return (
    <section className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Semak Pesanan</h2>
      <form onSubmit={checkOrder} className="space-y-4">
        <input
          type="text"
          placeholder="Masukkan ID Pesanan"
          value={orderID}
          onChange={(e) => setOrderID(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-red-600 transition">
          Semak Status
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-800 p-4 rounded">
          <p><strong>ID:</strong> {result.id}</p>
          <p><strong>Game:</strong> {result.game}</p>
          <p><strong>Jumlah:</strong> {result.amount}</p>
          <p><strong>Status:</strong> <span className="text-green-400">{result.status}</span></p>
          <p><strong>Tarikh:</strong> {result.date}</p>
        </div>
      )}
    </section>
  );
      }
