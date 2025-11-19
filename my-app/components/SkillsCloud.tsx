"use client";

import { motion } from "framer-motion";
import { data } from "@/lib/data";

export function SkillsCloud() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
      {data.skills.map((s, i) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: i * 0.04 }}
          className="tag justify-center"
        >
          {s}
        </motion.div>
      ))}
    </div>
  );
}
