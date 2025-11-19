import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faizaan Bhemat — Portfolio",
  description: "Systems Developer Intern • Full-stack, security & fintech focused.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="fixed right-4 top-4 z-50">
          <ThemeToggle />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
