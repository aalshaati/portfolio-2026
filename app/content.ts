import type { LucideIcon } from "lucide-react";
import { Cpu, CircuitBoard, Terminal } from "lucide-react";

export const site = {
  name: "Abdullah Alshaati",
  url: "https://portfolio-2026-umber-psi.vercel.app",
  email: "aalshaati0@gmail.com",
  linkedin: "https://linkedin.com/in/abdullah-alshaati-89a9a0256",
  role: "Computer Engineering · PSU '27",
  tagline:
    "Building at the intersection of embedded systems, automation, and software.",
  description:
    "Computer engineering student at Portland State University with hands-on experience in embedded systems, industrial automation, and software at Boeing and Genentech.",
  status: "Currently: Automation Systems Intern @ Genentech",
};

export const navLinks = [
  "about",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export const about = {
  paragraphs: [
    "I'm a Computer Engineering student at Portland State University with hands-on industry experience at Boeing and Genentech. I specialize in embedded systems, industrial automation, and building tools that solve real engineering problems.",
    "From redesigning HMI interfaces on 737 test stands to supporting digital manufacturing in cell therapy production, I bring a low-level hardware mindset to every layer of the stack — from registers and PLCs to SQL dashboards and Python pipelines.",
  ],
  stats: [
    { value: "3.4", label: "GPA at PSU" },
    { value: "2", label: "Industry Internships" },
    { value: "4", label: "Engineering Projects" },
    { value: "2027", label: "Graduation Year" },
  ],
};

export interface Job {
  role: string;
  company: string;
  location: string;
  date: string;
  current?: boolean;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    role: "Automation Systems Intern",
    company: "Genentech",
    location: "Hillsboro, OR",
    date: "Mar 2026 – Sep 2026",
    current: true,
    bullets: [
      "Supported automation systems and digital manufacturing within cell therapy production in a regulated environment",
      "Contributed to MES (Rockwell PharmaSuite) and real-time process monitoring",
      "Built data pipelines and Streamlit tools to improve process visibility and data digitization",
    ],
  },
  {
    role: "Production Engineering Intern",
    company: "Boeing",
    location: "Portland, OR",
    date: "Jun 2025 – Dec 2025",
    bullets: [
      "Redesigned HMI interface for a 737 torque break test stand with real-time status and cancel-test feature, saving hours of operator time annually",
      "Analyzed PLC ladder logic and tag structures; used PLC trending to validate system behavior and improve maintenance traceability",
      "Built SQL (Teradata) and Power Query dashboards tracking ~400 time-sensitive manufacturing parts, reducing scrap risk",
      "Developed Excel/VBA tools to replace manual data entry and enable automated lifecycle tracking of induction hardened components",
    ],
  },
  {
    role: "MECOP Student Ambassador",
    company: "Portland State University",
    location: "Portland, OR",
    date: "Mar 2026 – Present",
    current: true,
    bullets: [
      "Represent the MECOP program through student engagement, networking events, and industry outreach",
      "Mentor peers through the internship search and professional development process",
    ],
  },
];

export interface Project {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}

export const featuredProject = {
  eyebrow: "Featured Project",
  title: "Engineering Hub",
  subtitle: "Personal AI Dashboard",
  desc: "A web app I use every day — one dashboard that pulls my engineering life into a single place, powered by Claude through the Vercel AI SDK, with Upstash Redis storage and Recharts visualizations. Deployed on Vercel.",
  features: [
    "Daily briefing",
    "Hardware project log",
    "Obsidian-synced notes",
    "AI chat",
    "Halal investing tracker",
    "Apple Health coaching",
  ],
  tags: ["Next.js 16", "React 19", "Claude API", "AI SDK", "Redis", "Tailwind v4"],
  liveUrl: "https://engineering-hub-one.vercel.app",
  repoUrl: "https://github.com/aalshaati/engineering-hub",
};

export const projects: Project[] = [
  {
    icon: Cpu,
    title: "Cache Simulator with MESI Protocol",
    desc: "Designed a 4-way set associative cache simulator with LRU replacement and full MESI cache coherence modeling. Built a simulation driver to process memory traces and compute performance metrics including hit rate and miss counts.",
    tags: ["C", "Git", "Systems", "Cache Design"],
  },
  {
    icon: CircuitBoard,
    title: "Assembly System — BeagleBone Black",
    desc: "Built a low-level I2C driver in ARMv7-A assembly to control stepper motors via PCA9685. Configured AM335x registers for PWM output and validated timing signals using an oscilloscope.",
    tags: ["ARMv7-A", "Assembly", "I2C", "Embedded"],
  },
  {
    icon: Terminal,
    title: "Embedded Systems — Linux/Unix",
    desc: "Developed Unix system programs using fork(), execvp(), waitpid(), and signals for process control. Automated builds with Makefiles and debugged complex process handling in a Linux environment.",
    tags: ["C", "Linux", "Unix", "Makefile"],
  },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "Verilog", "SQL", "VB.NET", "Excel / VBA"],
  },
  {
    category: "Controls & Automation",
    skills: [
      "PLC (Allen-Bradley)",
      "HMI Development",
      "Studio 5000",
      "Rockwell PharmaSuite",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "Teradata",
      "Streamlit",
      "Visual Studio",
      "CATIA V5",
      "Power Query",
    ],
  },
];
