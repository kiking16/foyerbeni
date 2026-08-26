export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent mb-4">
        FoyerBéni
      </h1>
      <p className="text-slate-300 max-w-md text-lg mb-8">
        Bâtissez un foyer selon le cœur de Dieu. Rencontres sérieuses axées sur le mariage.
      </p>
      <button className="glow-gold bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-8 rounded-full text-lg transition-all">
        Créer un profil
      </button>
    </main>
  );
}
