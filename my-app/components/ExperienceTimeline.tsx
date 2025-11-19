"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300/70 dark:bg-gray-700/70" />

      <ul className="space-y-8">
        {data.experience.map((exp, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card p-6 pl-10 relative"
          >
            <span className="absolute left-2 top-6 h-3 w-3 rounded-full bg-sky-500 shadow" />

            <div className="text-sm text-gray-500 dark:text-gray-400">
              {exp.period} • {exp.location}
            </div>

            <h3 className="font-semibold text-lg mt-1">
              {exp.title} —{" "}
              <span className="text-sky-600 dark:text-sky-400">
                {exp.company}
              </span>
            </h3>

            <ul className="list-disc ml-5 mt-3 space-y-2 text-sm">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
