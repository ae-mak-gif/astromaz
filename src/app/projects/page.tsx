import type { Metadata } from 'next';

import { CtaBand } from '@/components/cta-band';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Our Capabilities',
  description:
    'An illustrative overview of the types of architectural, fabrication and interior work Astromaz is positioned to undertake.',
};

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">OUR CAPABILITIES</span>
        <h1>
          Materials, details
          <br />
          and possibilities.
        </h1>
        <p>
          A visual introduction to the types of work Astromaz is positioned
          to undertake across commercial and residential spaces.
        </p>
      </section>

      <section className="page-body">
        <div className="page-body-inner">
          <div className="capabilities-intro">
            <h2>A capabilities showcase — not a completed project portfolio.</h2>
            <p>
              These photographs are illustrative stock imagery. They are not
              represented as work completed by Astromaz.
            </p>
          </div>

          <div className="capability-gallery">
            <div className="gallery-large">
              <img
                src={images.aluminium}
                alt="Architectural aluminium and glass design – illustrative stock photograph"
              />
              <span className="gallery-caption">
                ALUMINIUM &amp; GLASS · ILLUSTRATIVE
              </span>
            </div>
            <div className="gallery-stack">
              <div className="gallery-small">
                <img
                  src={images.shopfitting}
                  alt="Retail interior design – illustrative stock photograph"
                />
                <span className="gallery-caption">
                  COMMERCIAL INTERIORS · ILLUSTRATIVE
                </span>
              </div>
              <div className="gallery-small">
                <img
                  src={images.cabinetry}
                  alt="Custom cabinetry and interior storage – illustrative stock photograph"
                />
                <span className="gallery-caption">
                  CABINETRY · ILLUSTRATIVE
                </span>
              </div>
            </div>
          </div>

          <div className="capability-gallery" style={{ marginTop: 18 }}>
            <div className="gallery-large">
              <img
                src={images.steel}
                alt="Steel fabrication process – illustrative stock photograph"
              />
              <span className="gallery-caption">
                STEEL &amp; METALWORK · ILLUSTRATIVE
              </span>
            </div>
            <div className="gallery-stack">
              <div className="gallery-small">
                <img
                  src={images.ceiling}
                  alt="Contemporary interior ceiling – illustrative stock photograph"
                />
                <span className="gallery-caption">
                  CEILING FINISHES · ILLUSTRATIVE
                </span>
              </div>
              <div className="gallery-small">
                <img
                  src={images.renovation}
                  alt="Renovated residential interior – illustrative stock photograph"
                />
                <span className="gallery-caption">
                  RENOVATIONS · ILLUSTRATIVE
                </span>
              </div>
            </div>
          </div>

          <p className="illustrative-note">
            Photography note: All images on this page are illustrative
            references to service categories. They are not client commissions,
            completed Astromaz projects or evidence of specific past work.
            This page can be updated with approved project photography as it
            becomes available.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
