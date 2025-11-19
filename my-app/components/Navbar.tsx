"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-gray-200/50 dark:border-gray-700/60">
      <div className="container-pad flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          FB
        </Link>

        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden text-xs"
        >
          Scroll ↓
        </motion.div>
      </div>
    </nav>
  );
}
