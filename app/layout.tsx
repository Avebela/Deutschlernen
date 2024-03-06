import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CategoryProvider } from "@/context/CategoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Подготовка к экзамену",
  description: "Start Deutsch A1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto max-w-screen-lg px-2">
          <CategoryProvider>
            <div className="flex min-h-screen flex-col items-center">
              <Navbar />
              {children}
            </div>
          </CategoryProvider>
        </main>
      </body>
    </html>
  );
}
