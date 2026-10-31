'use client';
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projects } from '../data/portfolio';

const filters = ['All', 'Product', 'Commerce', 'Systems'] as const;
export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visibleProjects = useMemo(() => projects.filter((project) => filter === 'All' || (filter === 'Commerce' ? project.type === 'E-commerce' : filter === 'Systems' ? project.type === 'Internal tool' : project.type !== 'E-commerce')), [filter]);
  return <section className="work-section section-wrap" id="work"><div className="section-heading"><div><p className="eyebrow mono">SELECTED WORK</p><h2>Useful, not<br />just <span className="accent">pretty.</span></h2></div><p className="section-aside">A small selection of products and systems built around real workflows, clear decisions and a better experience for the people using them.</p></div><div className="filter-row" aria-label="Project filters">{filters.map((item) => <button key={item} type="button" className={`filter-button ${filter === item ? 'is-active' : ''}`} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0 && filter === 'All'} />)}</div></section>;
}

type Project = {
  number: string; title: string; type: string; description: string; tags: readonly string[]; status: string;
  image?: string; href?: string; code?: string; outcome?: string;
};
function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return <article className={`project-card ${featured ? 'project-featured' : ''}`}><div className={`project-visual project-preview preview-${project.number}`}>
    {project.number === '01' ? <FormationGallery /> : project.number === '02' ? <OutreachGallery /> : project.number === '04' ? <MercusGallery /> : project.number === '05' ? <CrmGallery /> : project.image ? <><img src={project.image} alt={`${project.title} interface`} /><span className="preview-label">REAL PRODUCT SCREEN</span></> : <Preview label={project.title} number={project.number} />}
  </div><div className="project-info"><div className="project-kicker"><span>{project.number} — {project.type.toUpperCase()}</span><span className="project-status"><i />{project.status}</span></div><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={19} /></div><p>{project.description}</p>{project.outcome && <p className="project-outcome">{project.outcome}</p>}<div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{(project.href || project.code) && <div className="project-links">{project.href && <a href={project.href} target="_blank" rel="noreferrer">Visit project <ExternalLink size={13} /></a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">Source <Code2 size={13} /></a>}</div>}</div></article>;
}
const outreachScreens = [
  ['leads-dashboard.png', 'Leads overview'], ['lead-list.png', 'Lead list'], ['email-templates.png', 'Email templates'], ['activity.png', 'Activity log'],
] as const;
function OutreachGallery() {
  const [active, setActive] = useState(0); const screen = outreachScreens[active];
  const select = (direction: number) => setActive((current) => (current + direction + outreachScreens.length) % outreachScreens.length);
  return <div className="formation-gallery outreach-gallery"><img src={`/assets/outreach-workspace/${screen[0]}`} alt={`Outreach workspace ${screen[1]} screen`} /><span className="preview-label">REAL PRODUCT SCREEN</span><div className="gallery-toolbar"><button type="button" onClick={() => select(-1)} aria-label="Previous Outreach screen"><ChevronLeft size={16} /></button><span><b>{String(active + 1).padStart(2, '0')}</b> / {String(outreachScreens.length).padStart(2, '0')} · {screen[1]}</span><button type="button" onClick={() => select(1)} aria-label="Next Outreach screen"><ChevronRight size={16} /></button></div><div className="gallery-dots" role="tablist" aria-label="Outreach workspace screens">{outreachScreens.map((item, index) => <button key={item[0]} type="button" aria-label={`Show ${item[1]}`} aria-selected={index === active} onClick={() => setActive(index)} />)}</div></div>;
}
const formationScreens = [
  ['Screenshot%202026-10-29%20192417.png', 'Platform home'], ['Screenshot%202026-10-29%20192439.png', 'Live events'], ['Screenshot%202026-10-29%20192457.png', 'Learner progress'], ['Screenshot%202026-10-29%20192504.png', 'Admin dashboard'], ['Screenshot%202026-10-30%20162934.png', 'Learning paths'], ['Screenshot%202026-10-30%20162954.png', 'Course management'], ['Screenshot%202026-10-30%20163009.png', 'Live-event management'], ['Screenshot%202026-10-30%20163019.png', 'Learner analytics'], ['Screenshot%202026-10-30%20163028.png', 'Account management'], ['Screenshot%202026-10-30%20163037.png', 'Certificate settings'], ['Screenshot%202026-10-30%20163055.png', 'Certificate preview'], ['Screenshot%202026-10-30%20163110.png', 'My certificates'], ['Screenshot%202026-10-30%20163127.png', 'Profile settings'],
] as const;
function FormationGallery() {
  const [active, setActive] = useState(0); const screen = formationScreens[active];
  const select = (direction: number) => setActive((current) => (current + direction + formationScreens.length) % formationScreens.length);
  return <div className="formation-gallery"><img src={`/assets/formation-agency/${screen[0]}`} alt={`EduFormation ${screen[1]} screen`} /><span className="preview-label">REAL PRODUCT SCREEN</span><div className="gallery-toolbar"><button type="button" onClick={() => select(-1)} aria-label="Previous product screen"><ChevronLeft size={16} /></button><span><b>{String(active + 1).padStart(2, '0')}</b> / {String(formationScreens.length).padStart(2, '0')} · {screen[1]}</span><button type="button" onClick={() => select(1)} aria-label="Next product screen"><ChevronRight size={16} /></button></div><div className="gallery-dots" role="tablist" aria-label="EduFormation screens">{formationScreens.map((item, index) => <button key={item[0]} type="button" aria-label={`Show ${item[1]}`} aria-selected={index === active} onClick={() => setActive(index)} />)}</div></div>;
}
const crmScreens = [
  ['Screenshot%202026-10-30%20162557.png', 'CRM dashboard'], ['Screenshot%202026-10-30%20162608.png', 'Tasks & content calendar'], ['Screenshot%202026-10-30%20162635.png', 'Leads management'], ['Screenshot%202026-10-30%20162644.png', 'Manager dashboard'], ['Screenshot%202026-10-30%20162705.png', 'Sales Kanban'], ['Screenshot%202026-10-30%20162718.png', 'Content Kanban'],
] as const;
function CrmGallery() {
  const [active, setActive] = useState(0); const screen = crmScreens[active];
  const select = (direction: number) => setActive((current) => (current + direction + crmScreens.length) % crmScreens.length);
  return <div className="formation-gallery crm-gallery"><img src={`/assets/littoral-crm/${screen[0]}`} alt={`Littoral Immobilier CRM ${screen[1]} screen`} /><span className="preview-label">REAL CLIENT WORKFLOW</span><div className="gallery-toolbar"><button type="button" onClick={() => select(-1)} aria-label="Previous CRM screen"><ChevronLeft size={16} /></button><span><b>{String(active + 1).padStart(2, '0')}</b> / {String(crmScreens.length).padStart(2, '0')} · {screen[1]}</span><button type="button" onClick={() => select(1)} aria-label="Next CRM screen"><ChevronRight size={16} /></button></div><div className="gallery-dots" role="tablist" aria-label="Littoral CRM screens">{crmScreens.map((item, index) => <button key={item[0]} type="button" aria-label={`Show ${item[1]}`} aria-selected={index === active} onClick={() => setActive(index)} />)}</div></div>;
}
const mercusScreens = [
  ['Screenshot%202026-10-30%20163406.png', 'Hero & product value'], ['Screenshot%202026-10-30%20163416.png', 'Problem framing'], ['Screenshot%202026-10-30%20163437.png', 'AI workforce'], ['Screenshot%202026-10-30%20163510.png', 'Onboarding flow'], ['Screenshot%202026-10-30%20163540.png', 'Demo contact flow'],
] as const;
function MercusGallery() {
  const [active, setActive] = useState(0); const screen = mercusScreens[active];
  const select = (direction: number) => setActive((current) => (current + direction + mercusScreens.length) % mercusScreens.length);
  return <div className="formation-gallery mercus-gallery"><img src={`/assets/mercus-ai/${screen[0]}`} alt={`Mercus AI ${screen[1]} screen`} /><span className="preview-label">REAL PRODUCT SCREEN</span><div className="gallery-toolbar"><button type="button" onClick={() => select(-1)} aria-label="Previous Mercus screen"><ChevronLeft size={16} /></button><span><b>{String(active + 1).padStart(2, '0')}</b> / {String(mercusScreens.length).padStart(2, '0')} · {screen[1]}</span><button type="button" onClick={() => select(1)} aria-label="Next Mercus screen"><ChevronRight size={16} /></button></div><div className="gallery-dots" role="tablist" aria-label="Mercus AI screens">{mercusScreens.map((item, index) => <button key={item[0]} type="button" aria-label={`Show ${item[1]}`} aria-selected={index === active} onClick={() => setActive(index)} />)}</div></div>;
}
function Preview({ label, number }: { label: string; number: string }) { return <div className="abstract-preview"><span className="preview-label">PROJECT PREVIEW</span><div className="preview-browser"><span /><span /><span /></div><div className="preview-content"><small>H2D / {number}</small><strong>{label}</strong><div className="preview-lines"><i /><i /><i /></div><div className="preview-blocks"><b /><b /><b /></div></div></div>; }
