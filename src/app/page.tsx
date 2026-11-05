import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { images } from '@/lib/images';
import { services } from '@/lib/services';
import { ServiceCard } from '@/components/service-card';
import { SectionHeading } from '@/components/section-heading';
import { CtaBand } from '@/components/cta-band';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={images.hero} alt="Astromaz glass-fronted building project" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow">ASTROMAZ INVESTMENTS · HARARE</span>
          <h1>Spaces shaped<br />with <em>precision.</em></h1>
          <p className="hero-copy">From aluminium and steel fabrication to shopfitting and interior solutions, Astromaz brings design, craftsmanship and practical execution together.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/contact">Request a quote <ArrowUpRight size={17} /></Link>
            <Link className="button button-outline" href="/services">Explore our services <ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-foot"><span>Commercial & residential solutions</span><span className="hero-index">01 / 06 — Built around your brief</span></div>
      </section>
      <div className="intro-strip"><span>Design</span><span>Fabrication</span><span>Supply</span><span>Installation</span><span>Repairs & maintenance</span><span>Renovations</span></div>
      <section className="section">
        <div className="section-inner about-grid">
          <div className="about-image-wrap">
            <img className="about-image" src={images.detail} alt="Astromaz custom shelving and cabinetry detail" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">A PRACTICAL, DESIGN-LED APPROACH</span>
            <h2>Good spaces start with the right details.</h2>
            <p>Astromaz works across commercial and residential environments, bringing together design thinking, fabrication capability and on-site execution. Whether the brief involves a new installation, a made-to-measure element or an existing space that needs attention, the focus is on understanding the requirement and shaping a practical response.</p>
            <p>From individual components to coordinated interior work, each enquiry starts with the space, the intended use and the scope of work.</p>
            <Link className="text-link" href="/about">Discover Astromaz <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="section-inner">
          <SectionHeading eyebrow="WHAT WE DO" title="Solutions for the spaces you use every day." copy="Explore our core service areas across aluminium, glass, commercial interiors, cabinetry, metalwork and property improvements." />
          <div className="services-grid">{services.map(s => <ServiceCard key={s.slug} service={s} />)}</div>
          <div style={{ textAlign: 'center', marginTop: 48 }}><Link className="button button-dark" href="/services">View all services <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>
      <section className="capability-band">
        <div className="capability-photo"><img src={images.staircase} alt="Contemporary staircase and interior detailing" /></div>
        <div className="capability-copy">
          <span className="eyebrow">OUR CAPABILITIES</span>
          <h2>From the first detail to the final fit.</h2>
          <p>Explore a broader selection of materials, interior details and spaces that reflect the range of work Astromaz can undertake.</p>
          <div className="capability-list"><span>Aluminium & glass</span><span>Commercial interiors</span><span>Custom cabinetry</span><span>Steel fabrication</span><span>Ceiling installations</span><span>Renovations & upkeep</span></div>
          <Link className="text-link" href="/projects" style={{ color: '#fff' }}>Explore our work <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="HOW WE APPROACH THE WORK" title="Clear thinking. Considered execution." copy="A straightforward approach that keeps the brief, practical requirements and intended outcome in view." />
          <div className="approach-grid">
            <div className="approach-item"><strong>01</strong><h3>Understand</h3><p>We begin by understanding the space, the requirement and what a successful outcome needs to achieve.</p></div>
            <div className="approach-item"><strong>02</strong><h3>Plan the scope</h3><p>We consider the design, materials, fabrication or installation requirements appropriate to the brief.</p></div>
            <div className="approach-item"><strong>03</strong><h3>Deliver the work</h3><p>Agreed work is carried out with attention to fit, finish and the practical needs of the space.</p></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
