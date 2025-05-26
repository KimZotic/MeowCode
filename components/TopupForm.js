"use client";
import { useState } from "react";

export default function TopupForm({ game }) {
  const [form, setForm] = useState({ userID: "", server: "", jumlah: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesanan dihantar untuk ${game.name} (${form.jumlah})`);
    // Di sini boleh sambung ke API atau save ke database
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-xl space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white text-center mb-4">Topup {game.name}</h2>
      
      <input
        type="text"
        placeholder="User ID"
        value={form.userID}
        onChange={(e) => setForm({ ...form, userID: e.target.value })}
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="text"
        placeholder="Server (jika perlu)"
        value={form.server}
        onChange={(e) => setForm({ ...form, server: e.target.value })}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <select
        value={form.jumlah}
        onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
        required
        className="w-full p-2 rounded bg-gray-800 text-white"
      >
        <option value="">Pilih Jumlah</option>
        <option value="86 Diamonds - RM5">86 Diamonds - RM5</option>
        <option value="172 Diamonds - RM10">172 Diamonds - RM10</option>
        <option value="257 Diamonds - RM15">257 Diamonds - RM15</option>
      </select>
      <button type="submit" className="bg-primary w-full p-2 rounded hover:bg-red-600 transition">
        Hantar Pesanan
      </button>
    </form>
  );
          }
