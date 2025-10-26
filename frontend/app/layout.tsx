import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Music",
  description: "Official music website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Your Name
              </Link>

              <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
                <Link href="/albums" className="hover:text-blue-600 transition">
                  Albums
                </Link>
                <Link href="/shows" className="hover:text-blue-600 transition">
                  Shows
                </Link>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About
                </Link>
                <Link
                  href="/webcasts"
                  className="hover:text-blue-600 transition"
                >
                  Webcasts
                </Link>
              </div>

              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <div className="flex gap-4 justify-center mt-4">
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400">
                Spotify
              </a>
              <a href="#" className="hover:text-blue-400">
                YouTube
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
