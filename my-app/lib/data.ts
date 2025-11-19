export const data = {
  basics: {
    name: "Faizaan Bhemat",
    tagline:
      "Systems Analyst/Developer Intern @ Ontario Public Service • CS @ UofT • Full-stack & security curious",
  },

  links: {
    github: "https://github.com/bhematfa",
    linkedin: "https://www.linkedin.com/in/faizaan-bhemat-b58437223/",
  },

  skills: [
    "Java",
    "C/C++",
    "Python",
    "Assembly",
    "Bash",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "PostgreSQL",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Prisma",
    "Docker",
    "REST APIs",
    "Git",
    "PyTorch",
    "NumPy",
    "Pandas",
  ],

  experience: [
    {
      title: "Systems Analyst/Developer Co-op Intern",
      company: "Ontario Public Service (MPBSDP)",
      period: "May 2025 – Present",
      location: "Toronto, ON",
      points: [
        "Developed 15+ automated Playwright test scripts in Python hooked into Azure DevOps pipelines.",
        "Customized Oracle IAM 12c create/modify forms with event listeners & validators.",
        "Built Spring utility using Oracle APIs to bulk create/delete 500+ user accounts in <7s.",
      ],
    },
    {
      title: "Teaching Assistant — CSC207 Software Design",
      company: "University of Toronto Mississauga",
      period: "Aug 2024 – Dec 2024",
      location: "Mississauga, ON",
      points: [
        "Helped 500+ students understand OOP, design patterns, and tooling.",
        "Constructive feedback loops on Piazza reduced common student errors by ~20%.",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company: "Tech Wishes Solutions",
      period: "Feb 2023 – Apr 2023",
      location: "Kolkata, India",
      points: [
        "Improved website performance by 25% using optimized JS techniques.",
        "Designed responsive UI for 4 client sites with iterative feedback cycles.",
      ],
    },
  ],

  projects: [
    {
      name: "FlyNext",
      description:
        "Full-stack travel booking platform with 30+ endpoints, JWT auth, hotel-owner tools, and a responsive Next.js UI.",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "JWT",
        "Docker",
      ],
      link: "",
    },
    {
      name: "AdventureEditorPro W",
      description:
        "JavaFX game creator with MVC, accessibility support, and real-time scene editing tools.",
      tech: ["Java", "JavaFX", "FXML", "FreeTTS", "Git"],
      link: "",
    },
    {
      name: "User-Level Threading Library",
      description:
        "Custom threading library with cooperative + preemptive scheduling, priority logic, and race-free locking.",
      tech: ["C", "ucontext", "Linux Signals", "GDB"],
      link: "",
    },
    {
      name: "Malware Analysis & RE",
      description:
        "Static/dynamic analysis of 10+ malware binaries with Python, Wireshark traces & intel reporting.",
      tech: ["Python", "C", "Bash", "GDB", "Wireshark"],
      link: "",
    },
  ],
} as const;
