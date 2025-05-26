"use client";
import GameCard from "@/components/GameCard";

const games = [
  { id: "mlbb", name: "Mobile Legends", icon: "/icons/mlbb.png" },
  { id: "ff", name: "Free Fire", icon: "/icons/ff.png" },
  { id: "pubg", name: "PUBG Mobile", icon: "/icons/pubg.png" },
];

export default function GameList() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-primary">Pilih Permainan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
