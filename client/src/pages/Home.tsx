/*
 * SHADOW GFX STUDIOS / Printed Signal
 * Editorial portfolio page: ink-black type, paper-white space, registration-purple signals,
 * asymmetric artwork-led layouts, and restrained motion that reveals craft.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Check, ChevronRight, Headphones, Instagram, Mail, MapPin, Menu, Pause, Phone, Play, Plus, X,
} from "lucide-react";

const storage = "/assets/images/";
const audioStorage = "/assets/audio/";

const projects = [
  { id: "01", title: "Color / 01", category: "Color system & poster art", image: `${storage}shadow-gfx-color-posters_8f653086.jpg`, color: "purple" },
  { id: "02", title: "Identity / 01", category: "Brand identity system", image: `${storage}fallback-identity-board_1d87fd48.jpg`, color: "ink" },
  { id: "03", title: "Faces / 03", category: "Illustration study", image: `${storage}shadow-gfx-color-portrait_bb576b2e.png`, color: "violet" },
  { id: "04", title: "Motion / 04", category: "Abstract illustration", image: `${storage}shadow-gfx-color-shapes_f9d2d3ab.jpg`, color: "orange" },
  { id: "05", title: "Forms / 05", category: "Illustration series", image: `${storage}shadow-gfx-color-campaign_d1ced427.jpg`, color: "purple" },
  { id: "06", title: "Spectrum / 06", category: "Colorful vector illustration", image: `${storage}fallback-purple-lines_7e3837b1.jpg`, color: "cyan" },
];

const services = ["Banner design", "Poster design", "Business & visiting cards", "Social media posts", "Menu design", "Photo editing", "Product mockups", "Flyers & more"];
const reasons = ["Creative, professional work", "Fast work completion", "Affordable pricing", "Minimal charges for changes", "Excellent brand presentation"];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { setActiveProject(null); setMenuOpen(false); } };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) { try { await audio.play(); setIsPlaying(true); } catch { setIsPlaying(false); } }
    else { audio.pause(); setIsPlaying(false); }
  };
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <div className="site-shell">
      <audio ref={audioRef} loop preload="metadata" src={`${audioStorage}Steam Tech Music.wav`} onEnded={() => setIsPlaying(false)} />
      <header className="topbar">
        <button className="brand-lockup" onClick={() => scrollTo("top")} aria-label="Go to top"><img className="brand-logo" src={`${storage}shadow-gfx-glow-logo_d099eedc.png`} alt="SHADOW GFX STUDIOS glowing SG logo" /></button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <button onClick={() => scrollTo("work")}>Work <span>01</span></button><button onClick={() => scrollTo("services")}>Services <span>02</span></button><button onClick={() => scrollTo("studio")}>Studio <span>03</span></button><button onClick={() => scrollTo("contact")}>Contact <span>04</span></button>
        </nav>
        <div className="topbar-actions"><button className={`audio-pill ${isPlaying ? "is-playing" : ""}`} onClick={toggleAudio} aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}><span className="audio-bars" aria-hidden="true"><i /><i /><i /></span><span>{isPlaying ? "Sound on" : "Play sound"}</span>{isPlaying ? <Pause size={13} strokeWidth={2.5} /> : <Play size={13} fill="currentColor" />}</button><button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-rail"><span className="rail-index">00 / 04</span><span className="rail-line" /><span className="rail-copy">RAIPUR · CG · INDIA</span></div>
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Independent graphic design studio</p><h1 id="hero-title">Make them stop.<br /><em>Then make them look again.</em></h1><div className="hero-bottomline"><p>Visual identities, posters, edits, and social work for people building something worth noticing.</p><button className="circle-link" onClick={() => scrollTo("work")} aria-label="Explore selected work"><ArrowDownRight size={24} /></button></div></div>
          <div className="hero-art" aria-label="Abstract editorial graphic design composition by SHADOW GFX STUDIOS"><img className="hero-art-bg" src={`${storage}fallback-purple-poster_4de1767a.jpg`} alt="Abstract black, white, and purple graphic design composition with paper texture" /><div className="hero-art-overlay" /><div className="hero-stamp"><span>SG</span><small>EST. 2024<br />ACHAL SONI</small></div><div className="hero-caption"><span>FIG. 00</span><span>VISUAL SYSTEM / 001</span></div></div>
          <div className="hero-footer-note"><span>Scroll to explore</span><span className="footer-note-line" /></div>
        </section>
        <section className="marquee-band" aria-label="Studio services"><div className="marquee-track"><span>GRAPHIC DESIGN</span><b>✳</b><span>PHOTO EDITING</span><b>✳</b><span>VISUAL STORIES</span><b>✳</b><span>GRAPHIC DESIGN</span><b>✳</b><span>PHOTO EDITING</span><b>✳</b></div></section>
        <section className="work-section page-section" id="work" aria-labelledby="work-title">
          <div className="section-aside"><span className="section-number">01</span><span className="section-rule" /><span>SELECTED WORK</span></div>
          <div className="section-main"><div className="section-heading-row"><div><p className="eyebrow purple-text">Selected output / 2024—25</p><h2 id="work-title">A little <span>louder</span><br />than the brief.</h2></div><p className="section-intro">A rotating cut of posters, identity systems, illustrations, and campaign-ready visuals. Click any frame to view it larger.</p></div>
            <div className="work-grid">{projects.map((project, index) => <button key={project.id} className={`project-card project-${index + 1} ${project.color}`} onClick={() => setActiveProject(project)} aria-label={`View ${project.title}`}><span className="project-image-wrap"><img src={project.image} alt={project.title} loading={index > 1 ? "lazy" : "eager"} /></span><span className="project-meta"><span><b>{project.id}</b> / {project.title}</span><small>{project.category}</small><ArrowUpRight size={16} /></span></button>)}</div>
            <div className="work-footer"><span>More work available on request</span><a href="mailto:shadow.gfx04@gmail.com?subject=Portfolio%20request">Request the full cut <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
        <section className="services-section page-section" id="services" aria-labelledby="services-title"><div className="section-aside white-aside"><span className="section-number">02</span><span className="section-rule" /><span>WHAT I DO</span></div><div className="services-main"><div className="services-heading"><p className="eyebrow">Built for the moment before the scroll</p><h2 id="services-title">The studio<br /><span>toolkit.</span></h2></div><div className="services-content"><div className="service-list">{services.map((service, index) => <div className="service-row" key={service}><span className="service-index">0{index + 1}</span><span>{service}</span><ChevronRight size={17} /></div>)}</div><div className="why-card"><div className="why-card-top"><span>WHY SHADOW GFX</span><span>✓</span></div><h3>Sharp visuals.<br /><em>Zero drama.</em></h3><div className="reason-list">{reasons.map((reason) => <p key={reason}><Check size={15} />{reason}</p>)}</div></div></div><div className="software-strip"><span>Tools on the desk</span><strong>CorelDRAW</strong><i>·</i><strong>Adobe Photoshop CC</strong><i>·</i><span>plus a little stubbornness</span></div></div></section>
        <section className="studio-section page-section" id="studio" aria-labelledby="studio-title"><div className="section-aside"><span className="section-number">03</span><span className="section-rule" /><span>THE STUDIO NOTE</span></div><div className="studio-main"><div className="studio-copy"><p className="eyebrow purple-text">From the desk of Achal Soni</p><h2 id="studio-title">Designed in the<br /><span>real world.</span></h2><p className="studio-paragraph">SHADOW GFX STUDIOS is my freelance graphic design practice for brands, creators, and local businesses that want work with a little more point of view. I keep the process clear, the turnaround focused, and the final artwork ready to be seen.</p><div className="studio-profile"><img className="studio-avatar" src={`${storage}achal-soni-avatar_a561170b.png`} alt="Illustrated avatar of Achal Soni" /><div className="studio-signature"><span>Achal Soni</span><small>Freelance Graphic Designer</small></div></div><a className="text-link" href="https://www.instagram.com/shadow.gfx.studios" target="_blank" rel="noreferrer">See the day-to-day <ArrowUpRight size={15} /></a></div><button className="flyer-frame" onClick={() => setActiveProject({ id: "03", title: "Studio Flyer", category: "Original studio flyer", image: `${storage}SGS A3 flyer copy.jpg`, color: "purple" })} aria-label="Open the original SHADOW GFX STUDIOS flyer"><img src={`${storage}SGS A3 flyer copy.jpg`} alt="SHADOW GFX STUDIOS flyer with services and portfolio samples" loading="lazy" /><span className="frame-label">SOURCE / 001 · OPEN</span></button></div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-grid-line" /><div className="contact-kicker"><span>04</span><span>LET'S MAKE SOMETHING<br />WORTH REMEMBERING</span></div><div className="contact-main"><p className="eyebrow">Have a brief? Send it over.</p><h2 id="contact-title">Bring the brief.<br /><span>Leave sharper.</span></h2><a className="contact-cta" href="mailto:shadow.gfx04@gmail.com?subject=New%20design%20brief"><span>Start a conversation</span><ArrowUpRight size={28} /></a></div><div className="contact-details"><a href="mailto:shadow.gfx04@gmail.com"><Mail size={17} />shadow.gfx04@gmail.com</a><a href="tel:+919131681080"><Phone size={17} />+91 91316 81080</a><span><MapPin size={17} />Raipur, Chhattisgarh</span><a href="https://www.instagram.com/shadow.gfx.studios" target="_blank" rel="noreferrer"><Instagram size={17} />@shadow.gfx.studios</a></div></section>
      </main>
      <footer className="footer"><div><span>Independent graphic design studio</span></div><span>© {new Date().getFullYear()} Achal Soni</span><button onClick={() => scrollTo("top")}>Back to top <ArrowUpRight size={14} /></button></footer>
      <div className="audio-dock" role="region" aria-label="Background music control"><div className={`audio-art ${isPlaying ? "is-playing" : ""}`}><Headphones size={15} /></div><div className="audio-copy"><strong>Studio atmosphere</strong><small>{isPlaying ? "Now playing · ambient cut 01" : "Optional background audio"}</small></div><button onClick={toggleAudio} aria-label={isPlaying ? "Pause background music" : "Play background music"}>{isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}</button></div>
      {activeProject && <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={() => setActiveProject(null)}><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setActiveProject(null)} aria-label="Close project preview"><X size={21} /></button><div className="lightbox-image"><img src={activeProject.image} alt={activeProject.title} /></div><div className="lightbox-meta"><span>{activeProject.id} / {activeProject.category}</span><h3>{activeProject.title}</h3><p>Selected graphic design work from the SHADOW GFX archive.</p></div></div></div>}
      <div className="mobile-additional"><Plus size={13} /> scroll for more</div>
    </div>
  );
}
