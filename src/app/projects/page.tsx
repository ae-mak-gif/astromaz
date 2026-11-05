import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Our Capabilities',
  description: 'Explore Astromaz capabilities across aluminium and glass, interiors, cabinetry, steel fabrication, ceilings and property improvements.',
};

const gallery = [
  { src: images.commercial, alt: 'Contemporary commercial building exterior', label: 'COMMERCIAL SPACES', shape: 'wide' },
  { src: images.kitchen, alt: 'Modern fitted kitchen and cabinetry', label: 'KITCHEN & INTERIORS', shape: 'tall' },
  { src: images.staircase, alt: 'Architectural staircase and metal detailing', label: 'STAIRCASES & METAL DETAIL', shape: 'normal' },
  { src: images.customCabinetry, alt: 'Custom cabinetry and fitted storage', label: 'CUSTOM CABINETRY', shape: 'normal' },
  { src: images.glassInterior, alt: 'Glass shopfront and commercial interior', label: 'GLASS & SHOPFITTING', shape: 'wide' },
  { src: images.steelWorkshop, alt: 'Metal fabrication and welding work', label: 'STEEL FABRICATION', shape: 'normal' },
  { src: images.ceiling, alt: 'Decorative ceiling installation', label: 'CEILING FINISHES', shape: 'normal' },
  { src: images.renovation, alt: 'Modern residential exterior and landscaped setting', label: 'PROPERTY IMPROVEMENTS', shape: 'wide' },
];

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">OUR CAPABILITIES</span>
        <h1>Materials, details<br />and possibilities.</h1>
        <p>A visual overview of the spaces, finishes and project types that sit within the Astromaz capability range.</p>
      </section>
      <section className="page-body">
        <div className="page-body-inner">
          <div className="capabilities-intro">
            <h2>One team of capabilities. Many ways to shape a space.</h2>
            <p>Explore a selection across commercial and residential environments, interior details and fabrication.</p>
          </div>
          <div className="capability-mosaic">
            {gallery.map((item) => (
              <figure className={`capability-tile capability-tile--${item.shape}`} key={item.label}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="gallery-caption">{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
