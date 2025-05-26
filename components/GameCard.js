import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <Link href={`/topup/${game.id}`} className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg hover:border-primary border border-transparent transition-all">
      <img src={game.icon} alt={game.name} className="w-20 h-20 mx-auto mb-3" />
      <h3 className="text-lg font-semibold text-white text-center">{game.name}</h3>
    </Link>
  );
}
