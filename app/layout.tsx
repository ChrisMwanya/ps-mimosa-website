import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parole du Salut Mimosa | Découvrez Jésus. Vivez la famille.",
  description: "À Parole du Salut Mimosa, nous croyons qu'une rencontre avec Jésus peut transformer une vie. Rejoignez-nous pour nos cultes, événements et ministères.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${jakartaSans.variable} h-full antialiased scroll-smooth`}>
      <body
        className={`${jakartaSans.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="lg:mx-12">
            <main className="min-h-screen">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
