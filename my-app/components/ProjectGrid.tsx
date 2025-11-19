"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";
import Link from "next/link";

export function ProjectGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.projects.map((p, i) => (
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className="card p-5 flex flex-col"
        >
          <h3 className="font-semibold text-lg">{p.name}</h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">
            {p.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          {p.link && (
            <Link
              href={p.link}
              className="mt-4 text-sky-600 hover:underline text-sm"
            >
              View →
            </Link>
          )}
        </motion.article>
      ))}
    </div>
  );
}
