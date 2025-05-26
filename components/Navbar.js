import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-dark border-b border-gray-800 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/" className="text-primary font-bold text-xl">
          MeowCode
        </Link>
        <div className="space-x-4">
          <Link href="/games" className="text-white hover:text-primary">Game</Link>
          <Link href="/addfund" className="text-white hover:text-primary">Topup</Link>
          <Link href="/orders" className="text-white hover:text-primary">Pesanan</Link>
          <Link href="/admin" className="text-white hover:text-primary">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
