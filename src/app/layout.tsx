// layout.tsx
// Root layout wrapping all pages with navigation, footer, and basic styles.

import "./globals.css"; // Import global styles (Tailwind reset and custom classes)
import { ReactNode } from "react"; // Import typing for React children

// 🏗️ Root layout component
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Top navigation bar */}
        <header className="p-4 shadow-md bg-white">
          <nav className="flex gap-6">
            <a href="/ideas" className="hover:underline">Ideas</a>
            <a href="/submit" className="hover:underline">Submit Idea</a>
          </nav>
        </header>

        {/* Main content */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 p-4">
          Public Idea Bank &copy; 2025
        </footer>
      </body>
    </html>
  );
}
