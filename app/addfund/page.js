"use client";
import { useState } from "react";

export default function AddFundPage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Permintaan tambah nilai sebanyak RM${amount} telah dihantar kepada admin.`);
  };

  return (
    <section className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Tambah Nilai (Manual)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Masukkan jumlah (contoh: 10)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-red-600 transition">
          Hantar Permintaan
        </button>
      </form>
    </section>
  );
            }
