"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsCloud } from "@/components/SkillsCloud";
import { data } from "@/lib/data";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 h-1 origin-left bg-sky-500/80 z-40"
      />

      {/* HERO */}
      <section id="home" className="section pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="tag">Hi, I’m</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {data.basics.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {data.basics.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-xl px-5 py-3 bg-sky-500 text-white hover:bg-sky-600 transition shadow-lg"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href={data.links.github}
                target="_blank"
                className="inline-flex items-center rounded-xl px-5 py-3 border hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>

              <Link
                href={data.links.linkedin}
                target="_blank"
                className="inline-flex items-center rounded-xl px-5 py-3 border hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <SkillsCloud />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <ExperienceTimeline />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <ProjectGrid />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-3">Let’s collaborate</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm open to fintech, systems, and full-stack work. Happy to chat :)
          </p>
          <div className="flex gap-3">
            <Link
              href="mailto:faizaan@example.com"
              className="inline-flex items-center rounded-xl px-5 py-3 bg-sky-500 text-white hover:bg-sky-600 transition shadow-lg"
            >
              Email me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
