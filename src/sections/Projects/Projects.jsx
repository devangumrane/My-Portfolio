import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

// --- Data Defined Outside ---
const PROJECTS = [
  {
    id: 1,
    title: "QMS Application",
    category: "Enterprise Backend Architecture",
    icon: FaServer,
    tech: ["Node.js", "Express", "MongoDB"],
    description:
      "A comprehensive Quality Management System focused on modular API design and data integrity. Engineered complex MongoDB aggregation pipelines for audit reporting and implemented hierarchical RBAC for multi-org security compliance.",
    metrics: [
      { label: "Security", value: "JWT/RBAC" },
      { label: "Data", value: "Aggregation" },
      { label: "Arch", value: "Modular" },
    ],
    links: {
      github: "https://github.com/devangumrane",
      live: null,
    },
  },
  {
    id: 2,
    title: "LetsInsurance Platform",
    category: "High-Throughput Services",
    icon: FaCode,
    tech: ["React.js", "Node.js", "Express"],
    description:
      "An insurance comparison engine built for scalability. Developed decoupled backend services to manage insurance flows, integrating complex business logic with modular handlers for seamless service bridging.",
    metrics: [
      { label: "Throughput", value: "High" },
      { label: "Logic", value: "Decoupled" },
      { label: "Stack", value: "MERN" },
    ],
    links: {
      github: "https://github.com/devangumrane",
      live: null,
    },
  },
  {
    id: 3,
    title: "PCMC Divyang System",
    category: "Government API Infrastructure",
    icon: FaServer,
    tech: ["Node.js", "Express.js"],
    description:
      "A security-first backend system managing citizen welfare workflows. Designed and implemented RESTful endpoints focusing on data consistency, validation rules, and reliable transaction handling under PCMC.",
    metrics: [
      { label: "Auth", value: "Stateless" },
      { label: "Reliability", value: "ACID" },
      { label: "Scale", value: "Public" },
    ],
    links: {
      github: null,
      live: null,
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Header Section */}
      <div className="mb-16">
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
            Portfolio Showcase
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Production-ready applications demonstrating full-stack development
          expertise, from mobile interfaces to scalable backends.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ y: -10 }}
            className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 relative"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 4px 20px -2px var(--color-shadow)",
            }}
          >
            {/* Hover Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 96%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 96%) 100%)",
              }}
            />

            {/* Top Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
            />

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-10">
              {/* Title Section */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Project Icon Background */}
                <div
                  className="p-3 rounded-xl transform transition-transform duration-500 group-hover:rotate-12"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary), transparent 90%)",
                    color: "var(--color-primary)",
                  }}
                >
                  <project.icon size={24} />
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 border"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="leading-relaxed mb-8 flex-grow text-sm md:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div
                className="grid grid-cols-3 gap-4 mb-8 pt-6 relative"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center group/metric">
                    <div
                      className="text-lg md:text-xl font-bold mb-1 group-hover/metric:text-gradient transition-all duration-300"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-[10px] md:text-xs uppercase tracking-wider font-medium"
                      style={{
                        color: "var(--color-text-secondary)",
                        opacity: 0.8,
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-auto">


                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      boxShadow: "0 4px 15px -3px var(--color-shadow)",
                    }}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={12} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p
          className="mb-4 text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Curious about the code?
        </p>
        <a
          href="https://github.com/devangumrane"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--color-surface-glass)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-primary)",
          }}
        >
          <FaCode size={16} />
          <span>View More on GitHub</span>
          <FaArrowRight size={12} />
        </a>
      </motion.div>
    </section>
  );
}
