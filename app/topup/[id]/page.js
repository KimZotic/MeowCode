import TopupForm from "@/components/TopupForm";

const gameData = {
  mlbb: { id: "mlbb", name: "Mobile Legends", icon: "/icons/mlbb.png" },
  ff: { id: "ff", name: "Free Fire", icon: "/icons/ff.png" },
  pubg: { id: "pubg", name: "PUBG Mobile", icon: "/icons/pubg.png" },
};

export default function TopupPage({ params }) {
  const game = gameData[params.id];

  if (!game) {
    return <p className="text-red-500">Game tidak dijumpai.</p>;
  }

  return (
    <section>
      <TopupForm game={game} />
    </section>
  );
}
