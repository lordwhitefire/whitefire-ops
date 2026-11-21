import { ArrowUpRight, Linkedin } from "lucide-react";
import type { ReactNode } from "react";
import { LINKEDIN_COMPANY_URL } from "./config";

const steps = [
  { n: "01", title: "FIND THE FRICTION", body: "Spot the operational gaps in your business." },
  { n: "02", title: "DESIGN THE FIX", body: "Plan the right software solution." },
  { n: "03", title: "PUT IT TO WORK", body: "Bring the solution to life with precision." },
];
const capabilities = [
  "Internal tools & systems",
  "Workflow automation",
  "APIs & integrations",
  "Purpose-built applications",
];

function ContactLink({ children, className = "" }: {
  children: ReactNode; className?: string;
}) {
  return <a className={`contact-link ${className}`} href={LINKEDIN_COMPANY_URL}
    target="_blank" rel="noopener noreferrer">
    <span>{children}</span><ArrowUpRight size={17} aria-hidden="true" />
  </a>;
}

function Header() {
  return <header className="header wrap">
    <div className="brand"><b aria-hidden="true">W</b><span>WHITEFIRE OPS</span></div>
    <ContactLink className="header-link">Start a Conversation</ContactLink>
  </header>;
}

function Hero() {
  return <section className="hero wrap">
    <div className="hero-copy">
      <div className="eyebrow">INDEPENDENT SOFTWARE OPERATIONS STUDIO <i /></div>
      <h1>Make the work<br />work <span>better.</span></h1>
      <p>Software-based operational tools<br className="desktop" /> for small and mid-sized businesses.</p>
      <ContactLink className="hero-link">Talk to Whitefire Ops</ContactLink>
    </div>
    <div className="hero-image" aria-hidden="true">
      <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85" alt="" fetchPriority="high" />
      <div className="image-shade" />
      <small>STRUCTURE / SYSTEM / SOLUTION</small>
    </div>
  </section>;
}

function Approach() {
  return <section className="approach wrap">
    <div className="section-label">OUR APPROACH <i /></div>
    <h2>Every business has a way of working.<br /><em>Not every part works as it should.</em></h2>
    <div className="steps">
      {steps.map(s => <article key={s.n}>
        <div className="step-number">{s.n}<i /></div>
        <h3>{s.title}</h3><p>{s.body}</p>
      </article>)}
    </div>
  </section>;
}

function Capabilities() {
  return <section className="capabilities wrap">
    <h2>Built around<br />the gap.</h2>
    <div className="capability-list">
      {capabilities.map(item => <div key={item}>{item}</div>)}
    </div>
  </section>;
}

function Closing() {
  return <section className="closing wrap">
    <h2>Something in the operation<br /><em>needs to work better?</em></h2>
    <ContactLink>Start a Conversation</ContactLink>
  </section>;
}

function Footer() {
  return <footer className="footer wrap">
    <div className="brand"><b aria-hidden="true">W</b><span>WHITEFIRE OPS</span></div>
    <i className="divider" />
    <p>Software-based operational tools for small and mid-sized businesses.</p>
    <a className="linkedin" href={LINKEDIN_COMPANY_URL} target="_blank"
      rel="noopener noreferrer" aria-label="Visit Whitefire Ops on LinkedIn">
      <Linkedin size={22} aria-hidden="true" />
    </a>
  </footer>;
}

export default function App() {
  return <><div className="ambient" aria-hidden="true" /><Header />
    <main><Hero /><Approach /><Capabilities /><Closing /></main><Footer /></>;
}