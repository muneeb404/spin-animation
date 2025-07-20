"use client";

import { motion } from "framer-motion";
import {
  Github,
  Database,
  Server,
  Code,
  Zap,
  Globe,
  Cpu,
  Terminal,
  Layers,
  Cloud,
  GitBranch,
  Smartphone,
  Activity,
  BookOpen,
} from "lucide-react";

const innerSkills = [
  { icon: Github, color: "#ffffff", name: "GitHub" },
  { icon: Code, color: "#61dafb", name: "React" },
  { icon: Zap, color: "#f7df1e", name: "JavaScript" },
  { icon: Terminal, color: "#3c873a", name: "MongoDB" },
  { icon: Cloud, color: "#ff9900", name: "AWS" },
  { icon: Cpu, color: "#1572b6", name: "CSS" },
];

const outerSkills = [
  { icon: Database, color: "#336791", name: "PostgreSQL" },
  { icon: Server, color: "#68a063", name: "Node.js" },
  { icon: Globe, color: "#e34f26", name: "HTML" },
  { icon: Layers, color: "#ff6b6b", name: "Redis" },
  { icon: GitBranch, color: "#326ce5", name: "Docker" },
  { icon: Smartphone, color: "#61dafb", name: "React Native" },
  { icon: Activity, color: "#22d3ee", name: "Linux" },
  { icon: BookOpen, color: "#a855f7", name: "Docs" },
];

export function SkillsAnimation() {
  return (
    <div className="relative w-full h-full max-w-[90vw] max-h-[90vw] aspect-square mx-auto flex items-center justify-center overflow-hidden">
      {/* Center Text */}
      <motion.div
        className="absolute z-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-[2rem] sm:text-4xl font-bold text-blue-100 tracking-wider">
          Hafiz
        </h3>
      </motion.div>

      {/* Orbit Circles */}
      <div className="absolute w-[53%] h-[53%] rounded-full border border-dashed border-blue-400/20 z-0" />
      <div className="absolute w-[83%] h-[83%] rounded-full border border-dashed border-purple-400/20 z-0" />

      {/* Inner Ring */}
      <motion.div
        className="absolute w-full h-full z-10 origin-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {innerSkills.map((skill, index) => {
          const radiusPercent = 26.5;
          const angle =
            (index / innerSkills.length) * 2 * Math.PI - Math.PI / 2;
          const x = radiusPercent * Math.cos(angle);
          const y = radiusPercent * Math.sin(angle);
          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.25,
                  boxShadow: `0 0 16px ${skill.color}80`,
                }}
                className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-[#0f172a]/80 backdrop-blur-sm border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: skill.color + "66",
                  boxShadow: `0 0 8px ${skill.color}40`,
                }}
              >
                <skill.icon
                  className="w-3 h-3 sm:w-6 sm:h-6"
                  style={{ color: skill.color }}
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="absolute w-full h-full z-10 origin-center"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {outerSkills.map((skill, index) => {
          const radiusPercent = 41.5;
          const angle =
            (index / outerSkills.length) * 2 * Math.PI - Math.PI / 2;
          const x = radiusPercent * Math.cos(angle);
          const y = radiusPercent * Math.sin(angle);
          return (
            <div
              key={skill.name}
              className="absolute"
              style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.25,
                  boxShadow: `0 0 20px ${skill.color}80`,
                }}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0f172a]/80 backdrop-blur-sm border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: skill.color + "66",
                  boxShadow: `0 0 8px ${skill.color}40`,
                }}
              >
                <skill.icon
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: skill.color }}
                />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Page() {
  return (
    <section className="min-h-screen w-full bg-[#0a0e1a] flex items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-7xl">
        {/* Left Hero Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm Hafiz 👋
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-6">
            I’m a Full Stack Developer building modern, scalable web & mobile
            applications.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition duration-300 text-lg font-semibold">
            View Projects
          </button>
        </div>

        {/* Right Skills Animation */}
        <div className="flex-1 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] aspect-square">
          <SkillsAnimation />
        </div>
      </div>
    </section>
  );
}
