"use client"

import { motion } from "framer-motion"
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
} from "lucide-react"

const innerSkills = [
  { icon: Github, color: "#ffffff", name: "GitHub" },
  { icon: Code, color: "#61dafb", name: "React" },
  { icon: Zap, color: "#f7df1e", name: "JavaScript" },
  { icon: Terminal, color: "#3c873a", name: "MongoDB" },
  { icon: Cloud, color: "#ff9900", name: "AWS" },
  { icon: Cpu, color: "#1572b6", name: "CSS" },
]

const outerSkills = [
  { icon: Database, color: "#336791", name: "PostgreSQL" },
  { icon: Server, color: "#68a063", name: "Node.js" },
  { icon: Globe, color: "#e34f26", name: "HTML" },
  { icon: Layers, color: "#ff6b6b", name: "Redis" },
  { icon: GitBranch, color: "#326ce5", name: "Docker" },
  { icon: Smartphone, color: "#61dafb", name: "React Native" },
  { icon: Activity, color: "#22d3ee", name: "Linux" },
  { icon: BookOpen, color: "#a855f7", name: "Docs" },
]

export function SkillsAnimation() {
  return (
    <div className="relative w-[550px] h-[550px] mx-auto flex items-center justify-center">

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl z-0" />

      {/* Center Text */}
      <motion.div
        className="absolute z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-4xl font-bold text-blue-100 tracking-wider">Hafiz</h3>
      </motion.div>

      {/* Orbit Background Rings */}
      <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-blue-400/20 z-0" />
      <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-purple-400/20 z-0" />

      {/* Inner Ring - Icons stay upright */}
      <motion.div
        className="absolute w-full h-full z-10 origin-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 25,
          ease: "linear",
        }}
      >
        {innerSkills.map((skill, index) => {
          const radius = 140
          const angle = (index / innerSkills.length) * 2 * Math.PI - Math.PI / 2
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)
          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -360,
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.5, delay: index * 0.1 },
                rotate: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 0 20px ${skill.color}60`,
                }}
                className="w-14 h-14 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 flex items-center justify-center shadow-lg transition-all duration-300"
                style={{
                  borderColor: skill.color + "40",
                  boxShadow: `0 0 10px ${skill.color}20`,
                }}
              >
                <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Outer Ring - Icons stay upright */}
      <motion.div
        className="absolute w-full h-full z-10 origin-center"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 40,
          ease: "linear",
        }}
      >
        {outerSkills.map((skill, index) => {
          const radius = 200
          const angle = (index / outerSkills.length) * 2 * Math.PI - Math.PI / 4
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)
          return (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 360,
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                scale: { duration: 0.5, delay: 0.5 + index * 0.1 },
                rotate: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  boxShadow: `0 0 25px ${skill.color}60`,
                }}
                className="w-14 h-14 rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 flex items-center justify-center shadow-lg transition-all duration-300"
                style={{
                  borderColor: skill.color + "40",
                  boxShadow: `0 0 10px ${skill.color}20`,
                }}
              >
                <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <SkillsAnimation />
    </div>
  )
}