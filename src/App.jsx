import React, { useEffect, useRef, useState } from "react";
import {
  Link2, Send, Mail, ExternalLink, Code2, Boxes, Layout, GitBranch,
  Database, Server, Terminal, GraduationCap, ArrowUpRight, Menu, X,
  Sparkles, ShoppingBag, ListChecks, FileText, CheckCircle2, Fingerprint,
  ChevronDown, ChevronUp, PlayCircle, MessageCircle, Briefcase, Camera
} from "lucide-react";

/* ---------- project screenshots ----------
   Save the 3 screenshots into src/assets/ with these exact names,
   then these imports will resolve automatically. */
import resumeOSImg from "./assets/resumeos.png";
import taskTrackerImg from "./assets/task-tracker.png";
import shahzadasImg from "./assets/shahzadas-wardrobe.png";

/* ---------- social links — edit these if anything changes ---------- */
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ShaikManjoorAhmed", icon: Code2, color: "#ECECF4" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaik-manjoor-ahmed-32b681375", icon: Briefcase, color: "#5B9BD5" },
  { label: "WhatsApp", href: "https://wa.me/916309375657", icon: MessageCircle, color: "#45E8C9" },
  { label: "Instagram", href: "https://www.instagram.com/ft.manzoor", icon: Camera, color: "#F5A96B" },
];

/* ---------- font + global style injection ---------- */
function GlobalStyles() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <style>{`
      html, body, #root { margin: 0; padding: 0; height: 100%; background: #0A0B10; }

      .pf-root {
        --bg: #0A0B10;
        --bg-2: #0E1017;
        --glass: rgba(255,255,255,0.045);
        --glass-strong: rgba(255,255,255,0.09);
        --border: rgba(255,255,255,0.09);
        --border-strong: rgba(255,255,255,0.2);
        --violet: #8B7CFA;
        --violet-dim: #6C5FD6;
        --cyan: #45E8C9;
        --text: #ECECF4;
        --muted: #8A8D9F;
        font-family: 'Inter', sans-serif;
        background: var(--bg);
        color: var(--text);
        position: relative;
        overflow-x: hidden;
        min-height: 100vh;
        width: 100%;
      }
      .pf-display { font-family: 'Space Grotesk', sans-serif; }
      .pf-mono { font-family: 'JetBrains Mono', monospace; }

      .pf-glow-a {
        position: absolute; top: -10%; left: -10%; width: 45vw; height: 45vw;
        background: radial-gradient(circle, rgba(139,124,250,0.16) 0%, transparent 70%);
        filter: blur(40px); pointer-events: none;
      }
      .pf-glow-b {
        position: absolute; top: 20%; right: -15%; width: 40vw; height: 40vw;
        background: radial-gradient(circle, rgba(69,232,201,0.10) 0%, transparent 70%);
        filter: blur(40px); pointer-events: none;
      }
      .pf-glow-c {
        position: absolute; bottom: 0%; left: 30%; width: 35vw; height: 35vw;
        background: radial-gradient(circle, rgba(139,124,250,0.08) 0%, transparent 70%);
        filter: blur(50px); pointer-events: none;
      }

      .pf-glass {
        background: var(--glass);
        border: 1px solid var(--border);
        backdrop-filter: blur(18px) saturate(140%);
        -webkit-backdrop-filter: blur(18px) saturate(140%);
        border-radius: 16px;
        position: relative;
      }
      .pf-glass:hover { border-color: var(--border-strong); }

      .pf-card-top {
        position: absolute; top: 0; left: 20px; right: 20px; height: 1px;
        background: linear-gradient(90deg, transparent, var(--violet), transparent);
        opacity: 0; transition: opacity 0.3s ease;
      }
      .pf-glass:hover .pf-card-top { opacity: 0.7; }

      .pf-navbar {
        background: rgba(10,11,16,0.45);
        backdrop-filter: blur(20px) saturate(160%);
        -webkit-backdrop-filter: blur(20px) saturate(160%);
        border-bottom: 1px solid var(--border);
      }

      .pf-logo-badge {
        width: 34px; height: 34px; border-radius: 10px; position: relative;
        background: linear-gradient(135deg, var(--violet), var(--cyan));
        display: flex; align-items: center; justify-content: center;
      }
      .pf-logo-pulse {
        position: absolute; top: -3px; right: -3px; width: 9px; height: 9px; border-radius: 50%;
        background: var(--cyan); box-shadow: 0 0 8px var(--cyan);
        animation: pf-pulse 2s ease-in-out infinite;
      }
      @keyframes pf-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(1.3); }
      }

      .pf-barcode { display: flex; align-items: flex-end; gap: 2px; height: 22px; }
      .pf-barcode span { display: block; width: 2px; background: var(--muted); opacity: 0.5; }

      .pf-section-tag { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
      .pf-section-tag .pf-mini-bar { display: flex; gap: 2px; }
      .pf-section-tag .pf-mini-bar span { display: block; width: 2px; height: 10px; background: var(--violet); opacity: 0.5; }

      .pf-nav-link { color: var(--muted); text-decoration: none; font-size: 14px; transition: color 0.2s ease; cursor: pointer; }
      .pf-nav-link:hover { color: var(--text); }

      .pf-btn-primary {
        background: linear-gradient(135deg, var(--violet), var(--violet-dim));
        color: #fff; border: none; border-radius: 10px; padding: 12px 22px;
        font-size: 14px; font-weight: 600; cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center; gap: 8px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .pf-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(139,124,250,0.4); }

      .pf-btn-ghost {
        background: rgba(255,255,255,0.03); color: var(--text); border: 1px solid var(--border-strong);
        border-radius: 10px; padding: 12px 22px; font-size: 14px; font-weight: 600; cursor: pointer;
        display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; backdrop-filter: blur(10px);
      }
      .pf-btn-ghost:hover { background: var(--glass-strong); }

      .pf-btn-small {
        background: rgba(255,255,255,0.04); color: var(--text); border: 1px solid var(--border);
        border-radius: 8px; padding: 8px 14px; font-size: 12.5px; font-weight: 600; cursor: pointer;
        display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s ease; text-decoration: none;
      }
      .pf-btn-small:hover { border-color: var(--cyan); color: var(--cyan); }

      .pf-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .pf-reveal.pf-visible { opacity: 1; transform: translateY(0); }

      .pf-tilt-card { transition: transform 0.15s ease-out; transform-style: preserve-3d; }

      .pf-project-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
      .pf-project-card:hover { transform: translateY(-6px); border-color: var(--border-strong); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }

      .pf-browser-frame {
        border-radius: 10px; overflow: hidden; border: 1px solid var(--border);
        background: rgba(255,255,255,0.02); margin-bottom: 16px; transition: border-color 0.25s ease, transform 0.25s ease;
      }
      .pf-project-card:hover .pf-browser-frame { border-color: rgba(69,232,201,0.4); transform: scale(1.01); }
      .pf-browser-topbar { display: flex; align-items: center; gap: 6px; padding: 8px 10px; background: rgba(255,255,255,0.03); }
      .pf-browser-dot { width: 7px; height: 7px; border-radius: 50%; }
      .pf-browser-url {
        margin-left: 8px; flex: 1; background: rgba(255,255,255,0.04); border-radius: 5px; padding: 3px 8px;
        font-size: 10.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .pf-browser-body {
        height: 150px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;
      }
      .pf-browser-body img {
        width: 100%; height: 100%; object-fit: cover; object-position: top;
        transition: transform 0.45s ease;
      }
      .pf-project-card:hover .pf-browser-body img { transform: scale(1.06); }
      .pf-live-overlay {
        position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 12px;
        background: linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%);
        opacity: 0; transition: opacity 0.3s ease; pointer-events: none;
      }
      .pf-project-card:hover .pf-live-overlay { opacity: 1; }

      .pf-social-pill {
        display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 10px;
        text-decoration: none; color: var(--text); font-size: 13px; font-weight: 600; transition: all 0.25s ease;
      }
      .pf-social-pill:hover { transform: translateY(-3px); }

      .pf-skill-chip {
        background: var(--glass); border: 1px solid var(--border); border-radius: 12px; padding: 16px;
        display: flex; align-items: center; gap: 12px; transition: all 0.25s ease; backdrop-filter: blur(14px);
      }
      .pf-skill-chip:hover { border-color: var(--cyan); background: rgba(69,232,201,0.06); transform: translateY(-3px); }
      .pf-skill-icon-wrap {
        width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center;
        background: rgba(69,232,201,0.1); flex-shrink: 0;
      }

      .pf-timeline-item { position: relative; padding-left: 30px; }
      .pf-timeline-item::before {
        content: ''; position: absolute; left: 5px; top: 6px; width: 10px; height: 10px;
        border-radius: 50%; background: var(--violet); box-shadow: 0 0 0 4px rgba(139,124,250,0.15);
      }
      .pf-timeline-item::after {
        content: ''; position: absolute; left: 9px; top: 20px; bottom: -36px; width: 1px;
        background: linear-gradient(to bottom, var(--border-strong), transparent);
      }
      .pf-timeline-item:last-child::after { display: none; }

      .pf-input, .pf-textarea {
        width: 100%; background: rgba(255,255,255,0.03); border: 1px solid var(--border);
        border-radius: 10px; padding: 13px 14px; color: var(--text); font-family: 'Inter', sans-serif;
        font-size: 14px; outline: none; transition: border-color 0.2s ease; box-sizing: border-box;
      }
      .pf-input:focus, .pf-textarea:focus { border-color: var(--violet); }
      .pf-input::placeholder, .pf-textarea::placeholder { color: var(--muted); }

      .pf-contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
      .pf-contact-full { grid-column: 1 / -1; }

      .pf-id-chip {
        width: 30px; height: 22px; border-radius: 4px;
        background: linear-gradient(135deg, rgba(69,232,201,0.5), rgba(139,124,250,0.5));
        display: flex; align-items: center; justify-content: center;
      }

      @keyframes pf-scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(280%); }
      }
      .pf-scanline {
        position: absolute; left: 0; right: 0; height: 40%;
        background: linear-gradient(to bottom, transparent, rgba(69,232,201,0.06), transparent);
        animation: pf-scan 4s linear infinite; pointer-events: none;
      }

      .pf-terminal { background: #060709; border-radius: 14px; border: 1px solid var(--border); overflow: hidden; }
      .pf-terminal-top { display: flex; align-items: center; gap: 7px; padding: 12px 16px; background: rgba(255,255,255,0.03); }
      .pf-terminal-body { padding: 18px 20px; height: 260px; overflow-y: auto; }
      .pf-terminal-line { font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.9; white-space: pre-wrap; word-break: break-word; }
      .pf-terminal-input-row { display: flex; align-items: center; gap: 8px; padding: 0 20px 16px; }
      .pf-terminal-input {
        flex: 1; background: transparent; border: none; outline: none; color: var(--text);
        font-family: 'JetBrains Mono', monospace; font-size: 13px;
      }
      .pf-cursor-blink { display: inline-block; width: 7px; height: 15px; background: var(--cyan); margin-left: 2px; animation: pf-blink 1s step-end infinite; vertical-align: middle; }
      @keyframes pf-blink { 50% { opacity: 0; } }

      @media (max-width: 768px) {
        .pf-hero-grid { grid-template-columns: 1fr !important; }
        .pf-nav-links { display: none !important; }
      }
    `}</style>
  );
}

/* ---------- scroll reveal hook ---------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`pf-reveal ${visible ? "pf-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionTag({ label }) {
  return (
    <div className="pf-section-tag">
      <div className="pf-mini-bar">
        {[8, 14, 10, 16, 6].map((h, i) => <span key={i} style={{ height: `${h}px` }} />)}
      </div>
      <p className="pf-mono" style={{ color: "var(--violet)", fontSize: "12px", letterSpacing: "2px", margin: 0 }}>
        {label.toUpperCase()}
      </p>
    </div>
  );
}

function Barcode({ seed = 14 }) {
  const bars = Array.from({ length: seed }, (_, i) => (i * 7 + 3) % 5 + 3);
  return (
    <div className="pf-barcode">
      {bars.map((h, i) => <span key={i} style={{ height: `${h * 2}px` }} />)}
    </div>
  );
}

/* ---------- logo ---------- */
function Logo() {
  return (
    <span className="pf-logo-badge">
      <span className="pf-display" style={{ fontWeight: 700, fontSize: "13px", color: "#0A0B10" }}>{"</>"}</span>
      <span className="pf-logo-pulse" />
    </span>
  );
}

/* ---------- hero ID card with tilt ---------- */
function IDCard() {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`rotateX(${y * -10}deg) rotateY(${x * 10}deg)`);
  };
  const handleLeave = () => setTransform("rotateX(0deg) rotateY(0deg)");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="pf-glass pf-tilt-card"
      style={{ transform, padding: "28px", width: "100%", maxWidth: "360px", margin: "0 auto", overflow: "hidden" }}
    >
      <div className="pf-scanline" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", position: "relative" }}>
        <div>
          <p className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "1.5px", margin: 0 }}>
            STUDENT · DEVELOPER
          </p>
          <p className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", margin: "4px 0 0" }}>
            ID / 24SDC0407
          </p>
        </div>
        <div className="pf-id-chip"><Fingerprint size={13} color="#0A0B10" /></div>
      </div>

      <div style={{ width: "68px", height: "68px", borderRadius: "16px", position: "relative", background: "linear-gradient(135deg, var(--violet), var(--cyan))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
        <span className="pf-display" style={{ fontSize: "22px", fontWeight: 700, color: "#0A0B10", letterSpacing: "0.5px" }}>￣ヘ￣</span>
        <div style={{ position: "absolute", inset: "-3px", borderRadius: "19px", border: "1px solid var(--border-strong)", pointerEvents: "none" }} />
      </div>

      <h3 className="pf-display" style={{ fontSize: "21px", fontWeight: 600, margin: "0 0 4px", position: "relative" }}>Shaik Manjoor Ahmed</h3>
      <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 18px", position: "relative" }}>BCA Student · Sanjeevani Degree College</p>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <Barcode />
        <CheckCircle2 size={16} color="var(--cyan)" />
      </div>
    </div>
  );
}

/* ---------- project card with browser mockup + behind-the-build toggle ---------- */
function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const domain = p.live.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="pf-glass pf-project-card" style={{ padding: "22px", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="pf-card-top" />

      <div className="pf-browser-frame">
        <div className="pf-browser-topbar">
          <span className="pf-browser-dot" style={{ background: "#FF5F57" }} />
          <span className="pf-browser-dot" style={{ background: "#FEBC2E" }} />
          <span className="pf-browser-dot" style={{ background: "#28C840" }} />
          <span className="pf-browser-url pf-mono">{domain}</span>
        </div>
        <a href={p.live} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
          <div className="pf-browser-body">
            <img src={p.image} alt={`${p.title} preview`} />
            <div className="pf-live-overlay">
              <span className="pf-mono" style={{ fontSize: "11px", color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
                View Live <ExternalLink size={11} />
              </span>
            </div>
          </div>
        </a>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <p className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "1px", margin: 0 }}>{p.tag.toUpperCase()}</p>
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="pf-btn-small">
          Live Demo <ExternalLink size={12} />
        </a>
      </div>

      <h3 className="pf-display" style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 10px" }}>{p.title}</h3>
      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "14px" }}>{p.desc}</p>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
        {p.stack.map((t) => (
          <span key={t} className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: "6px", padding: "4px 8px" }}>{t}</span>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", color: "var(--violet)", fontSize: "12.5px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", padding: 0, marginTop: "auto" }}
      >
        Behind the build {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {open && (
        <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <p className="pf-mono" style={{ fontSize: "10.5px", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 3px" }}>PROBLEM</p>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{p.problem}</p>
          </div>
          <div>
            <p className="pf-mono" style={{ fontSize: "10.5px", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 3px" }}>APPROACH</p>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{p.approach}</p>
          </div>
          <div>
            <p className="pf-mono" style={{ fontSize: "10.5px", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 3px" }}>CHALLENGE</p>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{p.challenge}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- terminal playground ---------- */
function PlaygroundTerminal() {
  const [lines, setLines] = useState([
    { type: "output", text: "Welcome. Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  const responses = {
    whoami: "Shaik Manjoor Ahmed — BCA student & MERN stack developer.",
    skills: "React · JavaScript · HTML/CSS · Node.js/Express · MongoDB · Python · Git/GitHub",
    projects: "1)ResumeOS   2) The Shahzada's Wardrobe  3) Task Tracker — scroll to Projects for live links.",
    education: "BCA CS @ Rao's Educational Institutions (2024–2027) · MPC @ Rao's Junior College · SSC @ Prathibha EM High School",
    contact: "Scroll down to the Contact section, or use the form to reach me directly.",
    help: "Available: whoami, skills, projects, education, contact, clear",
  };

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const next = [...lines, { type: "input", text: cmd }];
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const output = responses[cmd] || `command not found: ${cmd} — type 'help'`;
    next.push({ type: "output", text: output });
    setLines(next);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div className="pf-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="pf-terminal-top">
        <span className="pf-browser-dot" style={{ background: "#FF5F57" }} />
        <span className="pf-browser-dot" style={{ background: "#FEBC2E" }} />
        <span className="pf-browser-dot" style={{ background: "#28C840" }} />
        <span className="pf-mono" style={{ fontSize: "11px", color: "var(--muted)", marginLeft: "8px" }}>guest@manjoor-portfolio: ~</span>
      </div>
      <div className="pf-terminal-body" ref={bodyRef}>
        {lines.map((l, i) => (
          <div key={i} className="pf-terminal-line" style={{ color: l.type === "input" ? "var(--cyan)" : "var(--muted)" }}>
            {l.type === "input" ? `guest@manjoor-portfolio:~$ ${l.text}` : l.text}
          </div>
        ))}
      </div>
      <div className="pf-terminal-input-row">
        <span className="pf-mono" style={{ fontSize: "13px", color: "var(--cyan)" }}>$</span>
        <input
          ref={inputRef}
          className="pf-terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help' and press enter"
          spellCheck={false}
        />
        <span className="pf-cursor-blink" />
      </div>
    </div>
  );
}

/* ---------- main component ---------- */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const skills = [
    { name: "React", icon: Boxes },
    { name: "JavaScript", icon: Code2 },
    { name: "HTML / CSS", icon: Layout },
    { name: "Node.js / Express", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Python", icon: Terminal },
    { name: "Git / GitHub", icon: GitBranch },
  ];

  const projects = [
    {
      title: "ResumeOS",
      tag: "MERN · Resume Builder",
      desc: "A modern resume builder that lets users create, customize, manage, and download professional resumes.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      icon: FileText,
      accent: "#F5A96B",
      image: resumeOSImg,
      live: "https://resume-os-alpha.vercel.app/",
      problem: "Most resume builders are either too rigid or too complex for quick edits.",
      approach: "Built a MERN app letting users create, customize, and export resumes through a simple, responsive editor.",
      challenge: "Designing a live-preview system that updates instantly as users edit fields, without lag.",
    },
    {
      title: "The Shahzada's Wardrobe",
      tag: "MERN · E-Commerce",
      desc: "A full-stack MERN e-commerce platform for premium men's ethnic wear — Kurtas, Sherwanis, Pathani Suits and Waistcoats.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      icon: ShoppingBag,
      accent: "#8B7CFA",
      image: shahzadasImg,
      live: "https://the-shahzadas-wardrobe.vercel.app/",
      problem: "Local ethnic wear sellers had no clean way to showcase inventory or take orders online.",
      approach: "Built a full MERN commerce flow — product catalog, cart, and order handling — with a boutique-style UI.",
      challenge: "Structuring a flexible MongoDB product schema for variants like size, fabric, and category without over-complicating queries.",
    },
    {
      title: "Task Tracker",
      tag: "MERN · Productivity App",
      desc: "A responsive full-stack task management app with complete CRUD operations, backed by MongoDB Atlas.",
      stack: ["MongoDB Atlas", "Express", "React", "Node.js"],
      icon: ListChecks,
      accent: "#45E8C9",
      image: taskTrackerImg,
      live: "https://task-tracker-mern-tau.vercel.app/",
      problem: "Needed a lightweight way to manage day-to-day tasks with real persistence, not just local state.",
      approach: "Built CRUD operations end-to-end on the MERN stack, connected to MongoDB Atlas for cloud-hosted data.",
      challenge: "Keeping the UI in sync with the database in real time without over-fetching on every action.",
    },
    
  ];

  const education = [
    { degree: "BCA in Computer Science", place: "Rao's Educational Institutions", period: "2024 – 2027" },
    { degree: "MPC — Intermediate", place: "Rao's Junior College", period: "2022 – 2024" },
    { degree: "SSC", place: "Prathibha EM High School", period: "2023 – 2024" },
  ];

  const nav = ["About", "Skills", "Projects", "Playground", "Education", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pf-root">
      <GlobalStyles />
      <div className="pf-glow-a" />
      <div className="pf-glow-b" />
      <div className="pf-glow-c" />

      {/* NAV */}
      <nav className="pf-navbar" style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 6%" }}>
        <Logo />
        <div className="pf-nav-links" style={{ display: "flex", gap: "26px" }}>
          {nav.map((item) => <span key={item} className="pf-nav-link" onClick={() => scrollTo(item)}>{item}</span>)}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer" }} className="pf-mobile-toggle">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "90px 6% 60px", display: "grid", gridTemplateColumns: "1.3fr 0.9fr", gap: "48px", alignItems: "center" }} className="pf-hero-grid">
        <Reveal>
          <p className="pf-mono" style={{ color: "var(--cyan)", fontSize: "13px", letterSpacing: "2px", marginBottom: "18px" }}>HELLO, I'M</p>
          <h1 className="pf-display" style={{ fontSize: "clamp(38px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.05, margin: "0 0 20px" }}>Manjoor Ahmed</h1>
          <p style={{ fontSize: "17px", color: "var(--muted)", maxWidth: "480px", lineHeight: 1.7, marginBottom: "32px" }}>
            BCA student wiling to become a MERN stack developer. I build full-stack products — from e-commerce platforms to productivity tools — with an eye for clean, considered interfaces.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button className="pf-btn-primary" onClick={() => scrollTo("Projects")}>View my work <ArrowUpRight size={16} /></button>
            <button className="pf-btn-ghost" onClick={() => scrollTo("Contact")}>Get in touch</button>
          </div>
        </Reveal>
        <Reveal delay={150}><IDCard /></Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 6%" }}>
        <Reveal>
          <SectionTag label="About" />
          <div className="pf-glass" style={{ padding: "36px" }}>
            <div className="pf-card-top" />
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text)", margin: 0 }}>
              I'm currently pursuing my BCA in Computer Science at Rao's Educational Institutions. Most of my time goes into building full-stack MERN applications — I like taking an idea from a database schema all the way to a polished, working interface. Outside of coursework, I enjoy picking apart how systems, technical or otherwise, are structured.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: "1100px", margin: "0 auto", padding: "30px 6%" }}>
        <Reveal>
          <SectionTag label="Skills" />
          <h2 className="pf-display" style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 24px" }}>What I work with</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="pf-skill-chip">
                <div className="pf-skill-icon-wrap"><s.icon size={17} color="var(--cyan)" /></div>
                <span style={{ fontSize: "14px", fontWeight: 500 }}>{s.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 6%" }}>
        <Reveal>
          <SectionTag label="Projects" />
          <h2 className="pf-display" style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 24px" }}>Selected work</h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </section>

      {/* PLAYGROUND */}
      <section id="playground" style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 6%" }}>
        <Reveal>
          <SectionTag label="Playground" />
          <h2 className="pf-display" style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 8px" }}>Try the terminal</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "22px" }}>A tiny interactive shell — type a command and press enter.</p>
          <PlaygroundTerminal />
        </Reveal>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 6%" }}>
        <Reveal>
          <SectionTag label="Education" />
          <h2 className="pf-display" style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 26px" }}>Academic background</h2>
        </Reveal>
        <div className="pf-glass" style={{ padding: "32px" }}>
          <div className="pf-card-top" />
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 100}>
                <div className="pf-timeline-item">
                  <p className="pf-mono" style={{ fontSize: "11px", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 4px" }}>{ed.period}</p>
                  <h3 className="pf-display" style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 4px" }}>{ed.degree}</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>{ed.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 6% 20px" }}>
        <Reveal>
          <SectionTag label="Contact" />
          <h2 className="pf-display" style={{ fontSize: "26px", fontWeight: 600, margin: "0 0 8px" }}>Let's talk</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px" }}>Open to internships, project collaborations, and anything interesting.</p>

          <form onSubmit={handleSubmit} className="pf-glass" style={{ padding: "30px" }}>
            <div className="pf-card-top" />
            <div className="pf-contact-grid">
              <input className="pf-input" placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className="pf-input" placeholder="you@email.com" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea className="pf-textarea pf-contact-full" placeholder="Say something..." rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="pf-btn-primary pf-contact-full">{sent ? "Opening your email..." : "Send message"} <Send size={15} /></button>
            </div>
          </form>

          <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="pf-glass pf-social-pill">
                <s.icon size={16} color={s.color} />
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer style={{ textAlign: "center", padding: "40px 6% 40px", borderTop: "1px solid var(--border)", marginTop: "40px" }}>
        <p className="pf-mono" style={{ fontSize: "12px", color: "var(--muted)" }}>Built with React · Manjoor Ahmed © 2026</p>
      </footer>
    </div>
  );
}