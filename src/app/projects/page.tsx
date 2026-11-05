import type { Metadata } from 'next';
import { CtaBand } from '@/components/cta-band';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'A selection of Astromaz project photographs across aluminium, glass, commercial interiors, cabinetry, steelwork and property improvements.',
};

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">SELECTED PROJECT PHOTOGRAPHY</span>
        <h1>Materials, details<br />and possibilities.</h1>
        <p>A look at selected Astromaz work across commercial and residential spaces.</p>
      </section>
      <section className="page-body">
        <div className="page-body-inner">
          <div className="capabilities-intro">
            <h2>Work shaped around the space.</h2>
            <p>Explore a selection of photographs from the range of work represented by Astromaz.</p>
          </div>
          <div className="capability-gallery">
            <div className="gallery-large">
              <img src={images.aluminium} alt="Aluminium and glass door and window installation by Astromaz" />
              <span className="gallery-caption">ALUMINIUM &amp; GLASS</span>
            </div>
            <div className="gallery-stack">
              <div className="gallery-small"><img src={images.shopfitting} alt="Glass and interior detailing" /><span className="gallery-caption">COMMERCIAL INTERIORS</span></div>
              <div className="gallery-small"><img src={images.cabinetry} alt="Fitted kitchen cupboards and worktop" /><span className="gallery-caption">CUPBOARDS &amp; CABINETRY</span></div>
            </div>
          </div>
          <div className="capability-gallery" style={{ marginTop: 18 }}>
            <div className="gallery-large">
              <img src={images.steel} alt="Decorative steel security gates and metalwork" />
              <span className="gallery-caption">STEEL &amp; METALWORK</span>
            </div>
            <div className="gallery-stack">
              <div className="gallery-small"><img src={images.ceiling} alt="Decorative ceiling installation and lighting" /><span className="gallery-caption">CEILING INSTALLATIONS</span></div>
              <div className="gallery-small"><img src={images.renovation} alt="Completed exterior and poolside property setting" /><span className="gallery-caption">RENOVATIONS &amp; IMPROVEMENTS</span></div>
            </div>
          </div>
          <p className="illustrative-note">This gallery will grow as additional approved project photographs are added.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
