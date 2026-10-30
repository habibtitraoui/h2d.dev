import { services } from '../data/portfolio';
export function Services() { return <section className="service-strip section-wrap" aria-label="Services"><p className="strip-label mono">WHAT I CAN HELP WITH</p><div className="service-list">{services.map((service, index) => <span key={service}><b>{String(index + 1).padStart(2, '0')}</b>{service}</span>)}</div></section>; }
