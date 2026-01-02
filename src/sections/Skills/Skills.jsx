import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaStripe,
  FaLayerGroup,
  FaCubes,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaCreditCard,
} from "react-icons/fa";
import {
  SiDart,
  SiJavascript,
  SiFlutter,
  SiAndroid,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiAuth0,
  SiPostman,
  SiRazorpay,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDevices, MdSync } from "react-icons/md";

// --- Data Defined Outside ---
const SKILL_CATEGORIES = [
  {
    id: "lang",
    title: "Programming Languages",
    icon: FaCode,
    description: "Core languages I use for development",
    items: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Dart", icon: <SiDart />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 },
      { name: "SQL", icon: <FaDatabase />, level: 75 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Frontend",
    icon: FaMobileAlt,
    description: "Building beautiful user interfaces",
    items: [
      { name: "Flutter", icon: <SiFlutter />, level: 90 },
      { name: "Android SDK", icon: <SiAndroid />, level: 85 },
      { name: "RESTful APIs", icon: <TbApi />, level: 88 },
      { name: "Responsive UI", icon: <MdDevices />, level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: FaServer,
    description: "Server-side development expertise",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "MySQL", icon: <SiMysql />, level: 82 },
      { name: "Firebase", icon: <SiFirebase />, level: 88 },
      { name: "OAuth2", icon: <SiAuth0 />, level: 75 },
    ],
  },
  {
    id: "tools",
    title: "State & Tools",
    icon: FaTools,
    description: "Development tools and workflows",
    items: [
      { name: "Riverpod", icon: <FaLayerGroup />, level: 85 },
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "Docker", icon: <FaDocker />, level: 75 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
      { name: "Hive", icon: <FaDatabase />, level: 78 },
    ],
  },
  {
    id: "payment",
    title: "Integrations",
    icon: FaCreditCard,
    description: "Third-party services and APIs",
    items: [
      { name: "Razorpay", icon: <SiRazorpay />, level: 80 },
      { name: "Stripe", icon: <FaStripe />, level: 75 },
      { name: "Realtime Sync", icon: <MdSync />, level: 82 },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
      id="skills"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-primary), transparent 90%)",
              color: "var(--color-primary)",
              border: "1px solid var(--color-border)",
            }}
          >
            What I Bring to the Table
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A comprehensive skill set built through hands-on experience and
            continuous learning
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {SKILL_CATEGORIES.map((cat, index) => {
          const isSelected = selectedCategory === index;

          return (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(isSelected ? null : index)}
              className="relative group cursor-pointer"
            >
              <motion.div
                layout
                className="h-full p-6 rounded-3xl border transition-all duration-300 overflow-hidden relative"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: isSelected
                    ? "var(--color-primary)"
                    : "var(--color-border)",
                  boxShadow: isSelected
                    ? "0 0 30px -10px var(--color-shadow)"
                    : "none",
                }}
              >
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
                  }}
                />

                {/* Card Header */}
                <motion.div
                  layout
                  className="relative z-10 flex items-start justify-between mb-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-primary), transparent 90%)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <cat.icon size={20} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {cat.items.length} Skills
                      </p>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: isSelected ? 180 : 0 }}
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Content Area */}
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {!isSelected ? (
                      // Collapsed: Tag Cloud
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-2"
                      >
                        {cat.items.slice(0, 4).map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-1 rounded-md border flex items-center gap-1.5"
                            style={{
                              backgroundColor: "var(--color-surface-glass)",
                              borderColor: "var(--color-border)",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            <span style={{ color: "var(--color-primary)" }}>
                              {item.icon}
                            </span>
                            {item.name}
                          </span>
                        ))}
                        {cat.items.length > 4 && (
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-md border"
                            style={{
                              borderColor: "transparent",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            +{cat.items.length - 4} more
                          </span>
                        )}
                      </motion.div>
                    ) : (
                      // Expanded: Proficiency Bars
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 mt-2"
                      >
                        {cat.items.map((item, i) => (
                          <div key={i} className="group/skill">
                            <div className="flex justify-between text-sm mb-1.5">
                              <span
                                className="flex items-center gap-2 font-medium"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                <span style={{ color: "var(--color-primary)" }}>
                                  {item.icon}
                                </span>
                                {item.name}
                              </span>
                              <span
                                style={{ color: "var(--color-text-secondary)" }}
                              >
                                {item.level}%
                              </span>
                            </div>
                            <div
                              className="h-1.5 rounded-full overflow-hidden"
                              style={{
                                backgroundColor: "var(--color-surface-accent)",
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.level}%` }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                  delay: i * 0.1,
                                }}
                                className="h-full rounded-full relative"
                                style={{
                                  background:
                                    "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                                }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
