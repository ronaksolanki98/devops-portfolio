import React from "react";
import { PERSONAL_INFO, SKILLS, PROJECTS } from "./constants";
import { Section, Heading } from "./components/Layout";

// Simple Lucide-style SVG Components
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const TerminalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-cyan-400"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const App: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="mono font-bold text-xl text-cyan-400 tracking-tighter">
            RS{" "}
            <span className="text-slate-500 text-sm font-normal">.devops</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm mono text-slate-400">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="hover:text-cyan-400 transition-colors"
            >
              Stack
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-cyan-400 transition-colors"
            >
              Mindset
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs mono uppercase tracking-widest">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mono leading-tight">
            {PERSONAL_INFO.name}
            <br />
            <span className="text-cyan-400">{PERSONAL_INFO.role}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all transform hover:-translate-y-1"
            >
              View Case Studies
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              className="px-8 py-3 border border-slate-800 hover:border-cyan-500/50 rounded-lg transition-all flex items-center gap-2"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <Section id="skills" className="bg-slate-950/50">
        <Heading>Core Infrastructure Stack</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-900 bg-slate-900/20 hover:border-cyan-500/20 transition-all"
            >
              <h3 className="mono text-cyan-400 mb-4 font-bold">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-slate-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-1.5 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Problem Solving / Mindset */}
      <Section id="about">
        <Heading>DevOps Mindset & Strategy</Heading>
        <div className="bg-slate-900/30 border border-slate-900 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-8">
              <div className="text-cyan-400 mono text-sm mb-4 uppercase tracking-tighter font-bold">
                Problem
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>• Slow manual deployments</li>
                <li>• Region-wide failure risk</li>
                <li>• Zero visibility into errors</li>
                <li>• Configuration drift</li>
              </ul>
            </div>
            <div className="p-8 bg-cyan-500/5">
              <div className="text-cyan-400 mono text-sm mb-4 uppercase tracking-tighter font-bold">
                Architected Solution
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>• CI/CD via CodePipeline</li>
                <li>• Multi-region DR architecture</li>
                <li>• CloudWatch Alarms + SNS</li>
                <li>• Infrastructure as Code (Terraform)</li>
              </ul>
            </div>
            <div className="p-8">
              <div className="text-emerald-400 mono text-sm mb-4 uppercase tracking-tighter font-bold">
                Business Result
              </div>
              <ul className="space-y-3 text-slate-400 text-sm font-medium">
                <li>• 30% reduction in deploy time</li>
                <li>• High Availability guaranteed</li>
                <li>• Faster MTTR (Repair Time)</li>
                <li>• Reliable, reproducible systems</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <Heading>Featured Case Studies</Heading>
        <div className="space-y-24">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="group relative">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <span className="mono text-cyan-500 text-sm mb-2 block">
                      Project 0{idx + 1}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider mono">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[10px] mono bg-slate-900 text-slate-400 rounded border border-slate-800 uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mono text-sm transition-all border-b border-transparent hover:border-cyan-300 pb-1"
                    >
                      View Architecture & Source <ExternalIcon />
                    </a>
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-900/20 p-6 rounded-xl border border-slate-900">
                      <h4 className="mono text-xs text-rose-400 uppercase font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />{" "}
                        The Problem
                      </h4>
                      <ul className="space-y-3">
                        {project.problem.map((p, i) => (
                          <li
                            key={i}
                            className="text-slate-400 text-sm leading-relaxed italic"
                          >
                            "{p}"
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/20 p-6 rounded-xl border border-slate-900">
                      <h4 className="mono text-xs text-cyan-400 uppercase font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />{" "}
                        The Solution
                      </h4>
                      <ul className="space-y-3">
                        {project.solution.map((s, i) => (
                          <li
                            key={i}
                            className="text-slate-400 text-sm leading-relaxed"
                          >
                            • {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-500/5 p-8 rounded-xl border border-emerald-500/20">
                    <h4 className="mono text-xs text-emerald-400 uppercase font-bold mb-4">
                      Measured Impact
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.impact.map((imp, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <p className="text-slate-300 text-sm">{imp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Monitoring Section */}
      <Section className="bg-slate-950">
        <div className="text-center mb-16">
          <TerminalIcon />
          <h2 className="text-3xl font-bold mt-4 mb-4 mono">
            Observability & Reliability
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My projects are never "fire and forget". I implement full lifecycle
            monitoring and logging to ensure systems are resilient and
            audit-ready.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-900/30 rounded-2xl border border-slate-900">
            <div className="text-cyan-400 text-4xl font-bold mb-2">30%</div>
            <div className="text-slate-400 text-sm mono">
              Average Deployment Speedup
            </div>
          </div>
          <div className="text-center p-8 bg-slate-900/30 rounded-2xl border border-slate-900">
            <div className="text-cyan-400 text-4xl font-bold mb-2">&lt;15m</div>
            <div className="text-slate-400 text-sm mono">
              Recovery Point Objective (RPO)
            </div>
          </div>
          <div className="text-center p-8 bg-slate-900/30 rounded-2xl border border-slate-900">
            <div className="text-cyan-400 text-4xl font-bold mb-2">100%</div>
            <div className="text-slate-400 text-sm mono">
              IaC Reproducibility
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            className="group flex items-center gap-4 px-10 py-5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all"
          >
            <div className="text-left">
              <div className="text-slate-500 text-xs mono mb-1 group-hover:text-cyan-400 transition-colors">
                DOGFOODING DEV OPS
              </div>
              <div className="text-xl font-bold flex items-center gap-3">
                View Production-Grade GitHub <ExternalIcon />
              </div>
            </div>
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="text-2xl font-bold mono mb-2 text-cyan-400">
              Ronak Solanki
            </div>
            <p className="text-slate-500 text-sm">
              Building the future of reliable systems.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon />
            </a>
          </div>
          <div className="text-sm mono text-slate-500">
            I earn because someone hardcoded credentials in production.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
