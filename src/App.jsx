import React, { useEffect, useRef, useState } from "react";
import {
  Link2, Send, Mail, ExternalLink, Code2, Boxes, Layout, GitBranch,
  Database, Server, Terminal, GraduationCap, ArrowUpRight, Menu, X,
  Sparkles, ShoppingBag, ListChecks, FileText, CheckCircle2, Fingerprint,
  ChevronDown, ChevronUp, MessageCircle, Briefcase, Camera, ZoomIn, ShieldCheck, Cpu
} from "lucide-react";

/* ---------- project screenshots ---------- */
import resumeOSImg from "./assets/resumeos.png";
import taskTrackerImg from "./assets/task-tracker.png";
import shahzadasImg from "./assets/shahzadas-wardrobe.png";

/* ---------- certificate images ---------- */
import aiImg from "./assets/ai.png";
import clubfestImg from "./assets/clubfest.png";
import expressImg from "./assets/express.png";
import internshipImg from "./assets/internship.png";
import itbasicsImg from "./assets/itbasics.png";
import javaImg from "./assets/java.png";
import jsImg from "./assets/js.png";
import mernImg from "./assets/mern.png";
import mongoImg from "./assets/mongo.png";
import nodeImg from "./assets/node.png";
import reactCertImg from "./assets/react.png";
import techfestImg from "./assets/techfest.png";

/* ---------- social links ---------- */
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ShaikManjoorAhmed", icon: Code2, color: "#ECECF4" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaik-manjoor-ahmed-32b681375", icon: Briefcase, color: "#5B9BD5" },
  { label: "WhatsApp", href: "https://wa.me/916309375657", icon: MessageCircle, color: "#45E8C9" },
  { label: "Instagram", href: "https://www.instagram.com/ft.manzoor", icon: Camera, color: "#F5A96B" },
];

/* ---------- global styles & advanced UI effects ---------- */
function GlobalStyles() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <style>{`
      html, body, #root { margin: 0; padding: 0; height: 100%; background: #07080D; scroll-behavior: smooth; }

      .pf-root {
        --bg: #07080D;
        --bg-card: rgba(255, 255, 255, 0.03);
        --glass-border: rgba(255, 255, 255, 0.08);
        --glass-border-hover: rgba(139, 124, 250, 0.4);
        --violet: #8B7CFA;
        --violet-glow: rgba(139, 124, 250, 0.25);
        --cyan: #45E8C9;
        --cyan-glow: rgba(69, 232, 201, 0.2);
        --text: #F1F2F6;
        --muted: #9498AB;
        font-family: 'Plus Jakarta Sans', sans-serif;
        background: var(--bg);
        color: var(--text);
        position: relative;
        overflow-x: hidden;
        min-height: 100vh;
      }

      .pf-mono { font-family: 'JetBrains Mono', monospace; }

      /* Ambient Orbs */
      .pf-orb-1 {
        position: absolute; top: -5%; left: -10%; width: 50vw; height: 50vw;
        background: radial-gradient(circle, rgba(139,124,250,0.12) 0%, transparent 65%);
        filter: blur(80px); pointer-events: none; z-index: 0;
      }
      .pf-orb-2 {
        position: absolute; top: 30%; right: -15%; width: 45vw; height: 45vw;
        background: radial-gradient(circle, rgba(69,232,201,0.08) 0%, transparent 65%);
        filter: blur(80px); pointer-events: none; z-index: 0;
      }
      .pf-orb-3 {
        position: absolute; bottom: 10%; left: 20%; width: 40vw; height: 40vw;
        background: radial-gradient(circle, rgba(139,124,250,0.06) 0%, transparent 70%);
        filter: blur(90px); pointer-events: none; z-index: 0;
      }

      /* Bento Glass Card */
      .pf-bento {
        background: var(--bg-card);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 20px;
        position: relative;
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .pf-bento:hover {
        border-color: var(--glass-border-hover);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px var(--violet-glow);
        transform: translateY(-4px);
      }

      .pf-navbar {
        background: rgba(7, 8, 13, 0.7);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--glass-border);
      }

      .pf-logo-box {
        width: 38px; height: 38px; border-radius: 12px;
        background: linear-gradient(135deg, var(--violet), var(--cyan));
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 0 15px rgba(139,124,250,0.4);
      }

      .pf-btn-primary {
        background: linear-gradient(135deg, #8B7CFA, #6C5FD6);
        color: #fff; border: none; border-radius: 12px; padding: 12px 24px;
        font-size: 14px; font-weight: 600; cursor: pointer;
        display: inline-flex; align-items: center; gap: 8px;
        box-shadow: 0 8px 25px rgba(139,124,250,0.35);
        transition: all 0.25s ease; text-decoration: none;
      }
      .pf-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(139,124,250,0.5); }

      .pf-btn-ghost {
        background: rgba(255,255,255,0.03); color: var(--text);
        border: 1px solid var(--glass-border); border-radius: 12px; padding: 12px 24px;
        font-size: 14px; font-weight: 600; cursor: pointer;
        display: inline-flex; align-items: center; gap: 8px;
        transition: all 0.25s ease; backdrop-filter: blur(10px); text-decoration: none;
      }
      .pf-btn-ghost:hover { background: rgba(255,255,255,0.07); border-color: var(--cyan); color: var(--cyan); }

      /* Compact & Clean Certifications Grid Styles with Polaroid Hover */
      .pf-cert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
      }
      .pf-cert-card {
        padding: 20px 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.025);
        border: 1px solid var(--glass-border);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1;
        min-height: 130px;
      }
      .pf-cert-card:hover {
        border-color: var(--cyan);
        background: rgba(69, 232, 201, 0.04);
        transform: translateY(-4px);
        z-index: 40;
        box-shadow: 0 15px 30px rgba(0,0,0,0.5), 0 0 15px var(--cyan-glow);
      }
      
      /* Polaroid Pop-out Hover Thumbnail */
      .pf-cert-image-pop {
        position: absolute;
        bottom: 60px;
        right: 20px;
        width: 170px;
        height: 110px;
        border-radius: 10px;
        border: 2px solid rgba(255,255,255,0.2);
        background: #0E1017;
        opacity: 0;
        transform: rotate(6deg) scale(0.6) translateY(20px);
        transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
        box-shadow: 0 20px 40px rgba(0,0,0,0.8);
        overflow: hidden;
      }
      .pf-cert-image-pop img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .pf-cert-card:hover .pf-cert-image-pop {
        opacity: 1;
        transform: rotate(-2deg) scale(1) translateY(0);
      }

      /* Full Screen Modal Lightbox */
      .pf-modal-backdrop {
        position: fixed; inset: 0; background: rgba(7, 8, 13, 0.88);
        backdrop-filter: blur(16px); z-index: 1000;
        display: flex; align-items: center; justify-content: center; padding: 20px;
        animation: pf-fadein 0.25s ease;
      }
      @keyframes pf-fadein { from { opacity: 0; } to { opacity: 1; } }

      .pf-modal-content {
        background: #0E1017; border: 1px solid rgba(139, 124, 250, 0.3);
        border-radius: 24px; max-width: 800px; width: 100%; padding: 30px;
        position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.9);
        display: flex; flex-direction: column; gap: 20px;
      }
      .pf-modal-img-container {
        width: 100%; max-height: 480px; border-radius: 14px; overflow: hidden;
        border: 1px solid var(--glass-border); background: #000;
        display: flex; align-items: center; justify-content: center;
      }
      .pf-modal-img-container img {
        width: 100%; height: 100%; object-fit: contain; max-height: 480px;
      }
      .pf-modal-close {
        position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.08);
        border: 1px solid var(--glass-border); color: #fff; border-radius: 50%; width: 40px; height: 40px;
        display: flex; align-items: center; justify-content: center; cursor: pointer;
        transition: all 0.2s;
      }
      .pf-modal-close:hover { background: rgba(255,255,255,0.2); border-color: var(--cyan); }

      /* Browser Frame for Projects */
      .pf-browser {
        border-radius: 14px; overflow: hidden; border: 1px solid var(--glass-border);
        background: rgba(255,255,255,0.015); margin-bottom: 18px;
        transition: all 0.3s ease;
      }
      .pf-bento:hover .pf-browser { border-color: rgba(69,232,201,0.3); }
      .pf-browser-top { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: rgba(255,255,255,0.02); }
      .pf-dot { width: 9px; height: 9px; border-radius: 50%; }
      .pf-url {
        margin-left: 10px; flex: 1; background: rgba(255,255,255,0.03); border-radius: 6px; padding: 4px 10px;
        font-size: 11px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .pf-browser-screen { height: 180px; position: relative; overflow: hidden; }
      .pf-browser-screen img {
        width: 100%; height: 100%; object-fit: cover; object-position: top;
        transition: transform 0.5s ease;
      }
      .pf-bento:hover .pf-browser-screen img { transform: scale(1.05); }

      /* Terminal styling */
      .pf-terminal { background: #040507; border-radius: 16px; border: 1px solid var(--glass-border); overflow: hidden; }
      .pf-terminal-header { display: flex; align-items: center; gap: 7px; padding: 12px 18px; background: rgba(255,255,255,0.02); }
      .pf-terminal-body { padding: 20px; height: 260px; overflow-y: auto; }
      .pf-terminal-line { font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.8; white-space: pre-wrap; }
      .pf-terminal-input-wrap { display: flex; align-items: center; gap: 8px; padding: 0 20px 18px; }
      .pf-terminal-field {
        flex: 1; background: transparent; border: none; outline: none; color: var(--text);
        font-family: 'JetBrains Mono', monospace; font-size: 13px;
      }
      .pf-cursor { display: inline-block; width: 7px; height: 15px; background: var(--cyan); animation: blink 1s step-end infinite; }
      @keyframes blink { 50% { opacity: 0; } }

      .pf-input, .pf-textarea {
        width: 100%; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border);
        border-radius: 12px; padding: 14px 16px; color: var(--text); font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 14px; outline: none; transition: border-color 0.2s ease; box-sizing: border-box;
      }
      .pf-input:focus, .pf-textarea:focus { border-color: var(--violet); box-shadow: 0 0 10px var(--violet-glow); }

      @media(max-width: 768px) {
        .pf-hero-grid { grid-template-columns: 1fr !important; }
        .pf-nav-links { display: none !important; }
      }
    `}</style>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
}

function SectionHeading({ tag, title }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }} />
        <span className="pf-mono" style={{ fontSize: "12px", color: "var(--cyan)", letterSpacing: "1.5px", fontWeight: 700 }}>{tag.toUpperCase()}</span>
      </div>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, margin: 0, letterSpacing: "-0.5px" }}>{title}</h2>
    </div>
  );
}

function IDCard() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`rotateX(${y * -12}deg) rotateY(${x * 12}deg)`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform("rotateX(0deg) rotateY(0deg)}")}
      className="pf-bento"
      style={{ transform, padding: "32px", width: "100%", maxWidth: "380px", margin: "0 auto", transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <span className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "1px" }}>VERIFIED PROFILE</span>
          <p className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", margin: "4px 0 0" }}>ID: 24SDC0407</p>
        </div>
        <div style={{ padding: "6px 10px", borderRadius: "8px", background: "rgba(69,232,201,0.1)", border: "1px solid rgba(69,232,201,0.3)" }}>
          <Fingerprint size={16} color="var(--cyan)" />
        </div>
      </div>

      <div style={{ width: "74px", height: "74px", borderRadius: "18px", background: "linear-gradient(135deg, var(--violet), var(--cyan))", display: "flex", alignItems: "center", justifyCenter: "center", marginBottom: "20px", boxShadow: "0 10px 25px rgba(139,124,250,0.3)" }}>
        <span style={{ fontSize: "24px", fontWeight: 800, color: "#07080D" }}>^~^</span>
      </div>

      <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px" }}>Shaik Manjoor Ahmed</h3>
      <p style={{ fontSize: "14px", color: "var(--muted)", margin: "0 0 24px" }}>BCA Student · MERN Stack Enthusiast</p>

      <div style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "3px", height: "20px", alignItems: "flex-end" }}>
          {[6, 12, 8, 16, 10, 14, 6, 18, 12].map((h, i) => (
            <span key={i} style={{ width: "2px", height: `${h}px`, background: "var(--muted)", opacity: 0.5 }} />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <ShieldCheck size={16} color="var(--cyan)" />
          <span className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)" }}>ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const domain = p.live.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="pf-bento" style={{ padding: "26px", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="pf-browser">
        <div className="pf-browser-top">
          <span className="pf-dot" style={{ background: "#FF5F57" }} />
          <span className="pf-dot" style={{ background: "#FEBC2E" }} />
          <span className="pf-dot" style={{ background: "#28C840" }} />
          <span className="pf-url pf-mono">{domain}</span>
        </div>
        <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
          <div className="pf-browser-screen">
            <img src={p.image} alt={p.title} />
          </div>
        </a>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <span className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)" }}>{p.tag.toUpperCase()}</span>
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="pf-btn-ghost" style={{ padding: "6px 12px", fontSize: "12px" }}>
          Live Demo <ExternalLink size={12} />
        </a>
      </div>

      <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 10px" }}>{p.title}</h3>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "16px" }}>{p.desc}</p>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
        {p.stack.map((t) => (
          <span key={t} className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", background: "rgba(255,255,255,0.03)", border: "1px solid var(--glass-border)", padding: "4px 8px", borderRadius: "6px" }}>{t}</span>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", color: "var(--violet)", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", padding: 0, marginTop: "auto" }}
      >
        Behind the build {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid var(--glass-border)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <span className="pf-mono" style={{ fontSize: "10px", color: "var(--cyan)" }}>PROBLEM:</span>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: "2px 0 0" }}>{p.problem}</p>
          </div>
          <div>
            <span className="pf-mono" style={{ fontSize: "10px", color: "var(--cyan)" }}>APPROACH:</span>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: "2px 0 0" }}>{p.approach}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function PlaygroundTerminal() {
  const [lines, setLines] = useState([{ type: "output", text: "System initialized. Type 'help' for options." }]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  const responses = {
    whoami: "Shaik Manjoor Ahmed — BCA Student & Full Stack Web Developer.",
    skills: "React, Node.js, Express, MongoDB, JavaScript, Python, Git.",
    projects: "ResumeOS, The Shahzada's Wardrobe, Task Tracker.",
    contact: "Drop a message below or email directly at shaikmanjoor@example.com",
    help: "Available commands: whoami, skills, projects, contact, clear",
  };

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const next = [...lines, { type: "input", text: cmd }];
    if (cmd === "clear") { setLines([]); return; }
    next.push({ type: "output", text: responses[cmd] || `Command not found: ${cmd}. Type 'help'` });
    setLines(next);
  };

  return (
    <div className="pf-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="pf-terminal-header">
        <span className="pf-dot" style={{ background: "#FF5F57" }} />
        <span className="pf-dot" style={{ background: "#FEBC2E" }} />
        <span className="pf-dot" style={{ background: "#28C840" }} />
        <span className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", marginLeft: "8px" }}>guest@manzoor-terminal: ~</span>
      </div>
      <div className="pf-terminal-body" ref={bodyRef}>
        {lines.map((l, i) => (
          <div key={i} className="pf-terminal-line" style={{ color: l.type === "input" ? "var(--cyan)" : "var(--muted)" }}>
            {l.type === "input" ? `$ ${l.text}` : l.text}
          </div>
        ))}
      </div>
      <div className="pf-terminal-input-wrap">
        <span className="pf-mono" style={{ color: "var(--cyan)" }}>$</span>
        <input
          ref={inputRef}
          className="pf-terminal-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { runCommand(input); setInput(""); }}}
          placeholder="type 'help'..."
          spellCheck={false}
        />
        <span className="pf-cursor" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeCert, setActiveCert] = useState(null); // Modal state for certificate zoom

  const skills = [
    { name: "React.js", icon: Boxes },
    { name: "JavaScript", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Express.js", icon: Terminal },
    { name: "Git / GitHub", icon: GitBranch },
  ];

  const projects = [
    {
      title: "ResumeOS",
      tag: "MERN · Resume Builder",
      desc: "A modern platform for creating, customizing, and downloading professional resumes.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      image: resumeOSImg,
      live: "https://resume-os-alpha.vercel.app/",
      problem: "Traditional resume builders are clunky and rigid.",
      approach: "Engineered a live-preview builder with instant state synchronization."
    },
    {
      title: "The Shahzada's Wardrobe",
      tag: "MERN · E-Commerce",
      desc: "A boutique-style full stack e-commerce app for premium men's ethnic wear.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      image: shahzadasImg,
      live: "https://the-shahzadas-wardrobe.vercel.app/",
      problem: "Local ethnic stores lack seamless digital catalogs.",
      approach: "Built a complete product inventory, cart, and order workflow."
    },
    {
      title: "Task Tracker",
      tag: "MERN · Productivity",
      desc: "A responsive full-stack task management application with cloud persistence.",
      stack: ["MongoDB Atlas", "Express", "React", "Node.js"],
      image: taskTrackerImg,
      live: "https://task-tracker-mern-tau.vercel.app/",
      problem: "Needed lightweight task management with real cloud persistence.",
      approach: "Implemented full CRUD operations connected to MongoDB Atlas."
    }
  ];

  const certifications = [
    { title: "Master AI for Web Apps", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/jRwjxnPyx6b", image: aiImg },
    { title: "Intro to MongoDB", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/GRmrwFRyx6b", image: mongoImg },
    { title: "Java Programming", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/CFql6nUmn6b", image: javaImg },
    { title: "JavaScript Basics", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/MrrJenPmn6b", image: jsImg },
    { title: "MERN Stack Overview", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/y8hpk9yln6b", image: mernImg },
    { title: "Node.js Essentials", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/I2Aoyw8yx6b", image: nodeImg },
    { title: "Express.js Guide", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/msYxPbazx6b", image: expressImg },
    { title: "ReactJS for Beginners", issuer: "Simplilearn", link: "https://simpli-web.app.link/e/q30Tj4bzx6b", image: reactCertImg },
    { title: "Java Internship", issuer: "Innovation Tech Tree", link: "#", image: internshipImg },
    { title: "IT Basics Course", issuer: "Muppavarapu Found.", link: "#", image: itbasicsImg },
    { title: "Genesis 2.0 Tech Fest", issuer: "Rao's College", link: "#", image: techfestImg },
    { title: "Club Fest Achievement", issuer: "Rao's College", link: "#", image: clubfestImg },
  ];

  const education = [
    { degree: "BCA in Computer Science", place: "Rao's Educational Institutions", period: "2024 – 2027" },
    { degree: "MPC — Intermediate", place: "Rao's Junior College", period: "2022 – 2024" },
    { degree: "SSC", place: "Prathibha EM High School", period: "2023 – 2024" },
  ];

  const navItems = ["About", "Skills", "Projects", "Certifications", "Terminal", "Education", "Contact"];

  const scrollToSection = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="pf-root">
      <GlobalStyles />
      <div className="pf-orb-1" />
      <div className="pf-orb-2" />
      <div className="pf-orb-3" />

      {/* NAVBAR */}
      <nav className="pf-navbar" style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 6%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="pf-logo-box">
            <Cpu size={20} color="#07080D" />
          </div>
          <span style={{ fontWeight: 800, fontSize: "16px", letterSpacing: "-0.5px" }}>MANJOOR.DEV</span>
        </div>
        <div className="pf-nav-links" style={{ display: "flex", gap: "28px" }}>
          {navItems.map((item) => (
            <span key={item} onClick={() => scrollToSection(item)} style={{ color: "var(--muted)", fontSize: "13.5px", fontWeight: 600, cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "var(--text)"} onMouseLeave={(e) => e.target.style.color = "var(--muted)"}>
              {item}
            </span>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="pf-mobile-toggle">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <header style={{ maxWidth: "1150px", margin: "0 auto", padding: "100px 6% 70px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "50px", alignItems: "center", position: "relative", zIndex: 1 }} className="pf-hero-grid">
        <Reveal>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "30px", background: "rgba(139,124,250,0.1)", border: "1px solid rgba(139,124,250,0.3)", marginBottom: "20px" }}>
            <Sparkles size={14} color="var(--violet)" />
            <span className="pf-mono" style={{ fontSize: "12px", color: "var(--violet)", fontWeight: 700 }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-1.5px" }}>
            Code. Create. Build.  <span style={{ background: "linear-gradient(135deg, var(--violet), var(--cyan))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Repeat.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "500px", lineHeight: 1.7, marginBottom: "35px" }}>
            BCA student and passionate MERN Stack developer crafting clean, highly performant web applications with futuristic user interfaces.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button className="pf-btn-primary" onClick={() => scrollToSection("Projects")}>Explore Work <ArrowUpRight size={16} /></button>
            <button className="pf-btn-ghost" onClick={() => scrollToSection("Contact")}>Get in Touch</button>
          </div>
        </Reveal>
        <Reveal delay={150}><IDCard /></Reveal>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" style={{ maxWidth: "1150px", margin: "0 auto", padding: "50px 6%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Introduction" title="Built with code. Driven by ideas." />
          <div className="pf-bento" style={{ padding: "36px" }}>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text)", margin: 0 }}>
              I am pursuing my BCA at Rao's Educational Institutions. My core focus revolves around full-stack architectures, transforming complex requirements into smooth, intuitive, and aesthetic digital experiences. When I'm not coding, I love exploring modern UI/UX design trends and optimizing database structures.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" style={{ maxWidth: "1150px", margin: "0 auto", padding: "30px 6%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Expertise" title="Tech Stack & Tools" />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "16px" }}>
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 50}>
              <div className="pf-bento" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(69,232,201,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <s.icon size={20} color="var(--cyan)" />
                </div>
                <span style={{ fontSize: "15px", fontWeight: 700 }}>{s.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ maxWidth: "1150px", margin: "0 auto", padding: "60px 6%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Portfolio" title="Featured Projects" />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION WITH COMPACT 3-COL GRID & POLAROID HOVER & FULL VIEW MODAL */}
      <section id="certifications" style={{ maxWidth: "1150px", margin: "0 auto", padding: "60px 6%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Credentials" title="Licenses & Certifications" />
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "24px" }}>Hover over any card to preview the certificate, or click to open full-screen view.</p>
        </Reveal>
        
        <div className="pf-cert-grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 60}>
              <div className="pf-cert-card" onClick={() => cert.image && setActiveCert(cert)}>
                {/* Polaroid Pop-out Hover Preview */}
                <div className="pf-cert-image-pop">
                  <img src={cert.image} alt={cert.title} />
                </div>

                <span className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "1px", marginBottom: "6px", fontWeight: 700 }}>
                  {cert.issuer.toUpperCase()}
                </span>
                
                <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.4, color: "var(--text)" }}>
                  {cert.title}
                </h3>
                
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  {cert.link !== "#" ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="pf-btn-ghost" style={{ padding: "5px 10px", fontSize: "11.5px" }} onClick={(e) => e.stopPropagation()}>
                      Verify <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", opacity: 0.7 }}>Verified Offline</span>
                  )}
                  <span className="pf-mono" style={{ fontSize: "10.5px", color: "var(--violet)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <ZoomIn size={12} /> View
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATE FULL VIEW MODAL */}
      {activeCert && (
        <div className="pf-modal-backdrop" onClick={() => setActiveCert(null)}>
          <div className="pf-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pf-modal-close" onClick={() => setActiveCert(null)}>
              <X size={20} />
            </button>
            <div>
              <span className="pf-mono" style={{ fontSize: "12px", color: "var(--cyan)", letterSpacing: "1px" }}>{activeCert.issuer.toUpperCase()}</span>
              <h2 style={{ fontSize: "22px", fontWeight: 800, margin: "4px 0 0" }}>{activeCert.title}</h2>
            </div>
            <div className="pf-modal-img-container">
              <img src={activeCert.image} alt={activeCert.title} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              {activeCert.link !== "#" && (
                <a href={activeCert.link} target="_blank" rel="noopener noreferrer" className="pf-btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }}>
                  Open Credential Link <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TERMINAL PLAYGROUND SECTION */}
      <section id="terminal" style={{ maxWidth: "1150px", margin: "0 auto", padding: "60px 6%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Playground" title="Interactive Terminal" />
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>Type commands like `whoami`, `skills`, `projects` or `help`.</p>
          <PlaygroundTerminal />
        </Reveal>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" style={{ maxWidth: "1150px", margin: "0 auto", padding: "60px 6%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Background" title="Academic Milestones" />
          <div className="pf-bento" style={{ padding: "36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {education.map((ed) => (
                <div key={ed.degree} style={{ position: "relative", paddingLeft: "24px", borderLeft: "2px solid rgba(139,124,250,0.3)" }}>
                  <span className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "1px", fontWeight: 700 }}>{ed.period}</span>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "4px 0 2px" }}>{ed.degree}</h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>{ed.place}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ maxWidth: "1150px", margin: "0 auto", padding: "60px 6% 30px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <SectionHeading tag="Contact" title="Let's Connect" />
          <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "28px" }}>Have an exciting project or want to collaborate? Drop a message.</p>

          <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:shaikmanjoor@example.com?subject=Contact from ${form.name}&body=${form.message}`; setSent(true); }} className="pf-bento" style={{ padding: "36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              <input className="pf-input" placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className="pf-input" placeholder="Your Email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <textarea className="pf-textarea" placeholder="Your Message..." rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ marginBottom: "20px" }} />
            <button type="submit" className="pf-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {sent ? "Launching Mail Client..." : "Send Message"} <Send size={16} />
            </button>
          </form>

          <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="pf-bento" style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "var(--text)", fontSize: "14px", fontWeight: 600 }}>
                <s.icon size={16} color={s.color} />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "50px 6%", borderTop: "1px solid var(--glass-border)", marginTop: "60px", position: "relative", zIndex: 1 }}>
        <p className="pf-mono" style={{ fontSize: "12px", color: "var(--muted)" }}>Designed & Built by Shaik Manjoor Ahmed · 2026</p>
      </footer>
    </div>
  );
}