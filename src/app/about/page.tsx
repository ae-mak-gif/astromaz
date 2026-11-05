import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { images } from '@/lib/images';
import { CtaBand } from '@/components/cta-band';

export const metadata: Metadata = {
  title: 'About Astromaz',
  description: 'Learn about Astromaz Investments and its commercial and residential design, fabrication, installation and property improvement solutions.',
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">ABOUT ASTROMAZ</span>
        <h1>Practical solutions.<br />Considered spaces.</h1>
        <p>Design, fabrication and installation solutions for commercial and residential environments.</p>
      </section>
      <section className="page-body">
        <div className="page-body-inner">
          <div className="split-content">
            <img src={images.detail} alt="Astromaz cabinetry and interior detailing" />
            <div>
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Bringing design and making together.</h2>
              <p>Astromaz Investments is positioned to support commercial and residential projects through a range of aluminium, glass, steel, cabinetry, shopfitting and property improvement services.</p>
              <p>Our public-facing brand, Astromaz, brings these capabilities together under one clear proposition: design, fabrication and installation solutions shaped around the requirements of each space.</p>
              <p>We recognise that every project has its own context. The right approach depends on the intended use, dimensions, material choices, site conditions and agreed scope.</p>
              <Link className="text-link" href="/services">Explore our services <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className="principles">
            <div className="principle"><h3>Design with purpose</h3><p>Consider the function of a space and the details that make it work.</p></div>
            <div className="principle"><h3>Make with care</h3><p>Approach fabrication and material choices in line with the project brief.</p></div>
            <div className="principle"><h3>Fit for the space</h3><p>Keep installation, finishing and practical site requirements in view.</p></div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
