import "./globals.css";

export const metadata = {
  title: "FoyerBéni - Rencontre Chrétienne & Mariage",
  description: "Plateforme de rencontre fondée sur les valeurs de la foi chrétienne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
