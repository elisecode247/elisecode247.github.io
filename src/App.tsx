import { useState } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Multi-Service Web App Migration",
      subtitle: "AngularJS → React",
      context: "Legacy production app with growing performance and scalability issues across multiple service teams.",
      role: "Frontend lead, collaborating with PM and backend engineers.",
      decisions: [
        "Chose React over Vue for stronger ecosystem and team familiarity",
        "Implemented Redux Toolkit for predictable global state with minimal boilerplate",
        "Designed incremental migration strategy to avoid big-bang rewrite risks",
        "Built WebSocket manager with reconnection logic and message queuing"
      ],
      impact: [
        "Reduced initial load time by ~40% through code splitting",
        "Enabled independent feature delivery across 3 teams",
        "Improved developer onboarding time from 2 weeks to 3 days"
      ],
      stack: "React, TypeScript, Redux Toolkit, WebSockets, Vite"
    },
    {
      title: "Design System Implementation",
      subtitle: "Component Library & Theming",
      context: "Inconsistent UI patterns across products leading to duplicated code and poor accessibility.",
      role: "Technical lead for design system architecture and rollout.",
      decisions: [
        "Built atomic component structure with composition patterns",
        "Implemented CSS-in-JS with theme provider for consistent theming",
        "Created accessibility-first components with ARIA best practices",
        "Established documentation and contribution guidelines"
      ],
      impact: [
        "Reduced UI bug reports by 60% through standardization",
        "Decreased feature development time by ~30%",
        "Achieved WCAG 2.1 AA compliance across all components"
      ],
      stack: "React, TypeScript, Styled Components, Storybook"
    },
    {
      title: "Real-Time Collaboration Dashboard",
      subtitle: "Multi-User Data Visualization",
      context: "Analytics platform requiring real-time updates for multiple concurrent users viewing shared data.",
      role: "Senior engineer owning frontend architecture and API design collaboration.",
      decisions: [
        "Implemented optimistic updates with conflict resolution",
        "Used React Query for intelligent caching and background sync",
        "Built custom virtualization for large datasets (10k+ rows)",
        "Designed error boundary strategy with graceful degradation"
      ],
      impact: [
        "Maintained 60fps performance with 50+ concurrent users",
        "Reduced API calls by 75% through smart caching",
        "Achieved 99.9% uptime with robust error handling"
      ],
      stack: "React, TypeScript, React Query, D3.js, WebSockets"
    }
  ];

  const capabilities = {
    "Frontend Engineering": [
      "React (Hooks, modern patterns)",
      "JavaScript (ES6+), TypeScript",
      "Component architecture & design systems"
    ],
    "State & Data": [
      "Redux Toolkit, Context API",
      "React Query, async data flows",
      "WebSocket-based updates"
    ],
    "Performance & Reliability": [
      "Code splitting & lazy loading",
      "Render optimization, memoization",
      "Initial load performance tuning"
    ],
    "Accessibility & UX": [
      "Keyboard navigation & focus management",
      "ARIA patterns & screen reader testing",
      "Responsive design & mobile-first"
    ],
    "Tooling & Process": [
      "Vite, Webpack, build optimization",
      "Git workflows & code review",
      "Incremental refactoring strategies"
    ]
  };

  const philosophy = [
    {
      title: "Architecture",
      content: "I favor predictable state flow and clear ownership boundaries. I avoid premature abstraction but refactor aggressively once patterns emerge."
    },
    {
      title: "Performance",
      content: "I optimize only after measuring, focusing on initial load, render frequency, and network behavior. Fast by default beats optimized by exception."
    },
    {
      title: "Product Collaboration",
      content: "I work closely with PMs to clarify requirements early and surface technical constraints before they become delivery risks."
    },
    {
      title: "Code Quality",
      content: "I prioritize readability and maintainability over cleverness, especially in shared code paths. Future developers will thank us."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="text-xl font-semibold">ES</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
            <a href="#approach" className="text-gray-600 hover:text-gray-900 transition-colors">Approach</a>
            <a href="#capabilities" className="text-gray-600 hover:text-gray-900 transition-colors">Capabilities</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-gray-600">Work</a>
              <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-gray-600">Approach</a>
              <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-gray-600">Capabilities</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-600">About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Elise Straub</h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">Senior Frontend Engineer</p>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-10 leading-relaxed">
            I build scalable, maintainable React applications by aligning technical decisions with product goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              View Work
            </a>
            <a href="#" className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 mb-12">Projects demonstrating technical ownership and impact</p>
          
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <article key={idx} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{project.subtitle}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p className="text-gray-700">{project.context}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Role</h4>
                    <p className="text-gray-700">{project.role}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Decisions</h4>
                    <ul className="space-y-2">
                      {project.decisions.map((decision, i) => (
                        <li key={i} className="text-gray-700 pl-4 border-l-2 border-gray-300">
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-gray-700 pl-4 border-l-2 border-blue-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Stack:</span> {project.stack}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="approach" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">How I Think</h2>
          <p className="text-xl text-gray-600 mb-12">My approach to building maintainable software</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(capabilities).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{category}</h3>
                <ul className="space-y-2">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Senior Frontend Engineer — Company X</h3>
              <p className="text-gray-600 mb-4">2021 - Present</p>
              <ul className="space-y-2 text-gray-700">
                <li className="pl-4 border-l-2 border-gray-300">Owned major user-facing features from design to release</li>
                <li className="pl-4 border-l-2 border-gray-300">Partnered with PMs to balance scope, UX, and delivery timelines</li>
                <li className="pl-4 border-l-2 border-gray-300">Led frontend architecture decisions during app scaling</li>
                <li className="pl-4 border-l-2 border-gray-300">Mentored 4 junior engineers on React best practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Frontend Engineer — Company Y</h3>
              <p className="text-gray-600 mb-4">2018 - 2021</p>
              <ul className="space-y-2 text-gray-700">
                <li className="pl-4 border-l-2 border-gray-300">Built core features for SaaS product serving 10k+ users</li>
                <li className="pl-4 border-l-2 border-gray-300">Drove migration from class components to hooks</li>
                <li className="pl-4 border-l-2 border-gray-300">Established testing standards and CI/CD practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <div className="max-w-3xl space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              I'm a pragmatic frontend engineer who enjoys solving real product problems. I care deeply about maintainable code, performance, and building software that's easy for teams to evolve over time.
            </p>
            <p>
              Currently focused on modern React patterns and frontend scalability, with particular interest in state management strategies and real-time collaborative applications.
            </p>
            <p className="text-gray-600 pt-4">
              Open to senior frontend or staff-track roles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-wrap gap-6">
            <a 
              href="mailto:elise@example.com" 
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center text-gray-600">
          <p>© 2025 Elise Straub. Built with React.</p>
        </div>
      </footer>
    </div>
  );
}
