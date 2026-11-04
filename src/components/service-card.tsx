import Link from 'next/link'; import { ArrowUpRight } from 'lucide-react';
import type { services as allServices } from '@/lib/services';
type Service = (typeof allServices)[number];
export function ServiceCard({service}:{service:Service}){return <Link className="service-card" href={`/services/${service.slug}`}><div className="service-image"><img src={service.image} alt={`${service.title} – illustrative architectural photography`} loading="lazy"/><span className="image-note">ILLUSTRATIVE IMAGE</span><span className="service-number">{service.number}</span></div><div className="service-card-copy"><div><h3>{service.title}</h3><p>{service.short}</p></div><span className="round-arrow"><ArrowUpRight size={18}/></span></div></Link>}
