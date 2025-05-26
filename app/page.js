import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-10">
      <h1 className="text-4xl font-bold text-primary mb-4">Selamat Datang ke MeowCode</h1>
      <p className="text-gray-300 mb-6">Topup game murah, pantas dan boleh dipercayai.</p>
      <Link href="/games">
        <button className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-red-600 transition">
          Lihat Senarai Game
        </button>
      </Link>
    </section>
  );
}
