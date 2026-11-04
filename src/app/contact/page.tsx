import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description:
    'Contact Astromaz Investments in Harare to discuss aluminium, glass, steel, shopfitting, cabinetry, ceilings and renovation enquiries.',
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">CONTACT ASTROMAZ</span>
        <h1>
          Let&apos;s talk about
          <br />
          your next project.
        </h1>
        <p>
          Tell us what you have in mind. Share the details and we can start
          with a conversation about the scope.
        </p>
      </section>

      <section className="page-body">
        <div className="page-body-inner contact-layout">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Start with a conversation.</h2>
            <p>
              For commercial and residential enquiries, reach Astromaz using
              the details below or send a project enquiry through the form.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">
                  <MapPin size={18} />
                </span>
                <div>
                  <small>VISIT US</small>
                  <p>{site.address}</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">
                  <Mail size={18} />
                </span>
                <div>
                  <small>EMAIL</small>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">
                  <Phone size={18} />
                </span>
                <div>
                  <small>CALL US</small>
                  {site.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replaceAll(' ', '')}`}
                      style={{ display: 'block' }}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <small>WHATSAPP</small>
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                      'Hello Astromaz, I would like to enquire about a project.',
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Start a WhatsApp conversation
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
