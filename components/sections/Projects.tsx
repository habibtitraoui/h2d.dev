'use client';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, ExternalLink } from 'lucide-react';
import { KeyboardEvent, useMemo, useRef, useState } from 'react';
import { projects } from '../data/portfolio';
import { useI18n } from '../i18n';

const filters = ['All', 'Product', 'Commerce', 'Systems'] as const;
const filterKeys = { All: 'all', Product: 'product', Commerce: 'commerce', Systems: 'systems' } as const;
export function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visibleProjects = useMemo(() => projects.filter((project) => filter === 'All' || (filter === 'Commerce' ? project.type === 'E-commerce' : filter === 'Systems' ? project.type === 'Internal tool' : project.type !== 'E-commerce')), [filter]);
  const title = t('workTitle').split('|');
  return <section className="work-section section-wrap" id="work"><div className="section-heading"><div><p className="eyebrow mono">{t('selectedWork')}</p><h2>{title[0]}<br />{title[1].split(' ').slice(0, -1).join(' ')} <span className="accent">{title[1].split(' ').slice(-1)}</span></h2></div><p className="section-aside">{t('workAside')}</p></div><div className="filter-row" aria-label={t('projectFilters')}>{filters.map((item) => <button key={item} type="button" className={`filter-button ${filter === item ? 'is-active' : ''}`} onClick={() => setFilter(item)}>{t(filterKeys[item])}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0 && filter === 'All'} />)}</div></section>;
}

type Project = {
  number: (typeof projects)[number]['number']; title: string; type: string; description: string; tags: readonly string[]; status: string;
  image?: string; href?: string; code?: string; outcome?: string;
};
function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const { t } = useI18n();
  const statusKey = project.status === 'Local-first' ? 'localFirst' : project.status === 'Case study' ? 'caseStudy' : project.status === 'Live' ? 'live' : 'liveProduct';
  return <article className={`project-card ${featured ? 'project-featured' : ''}`}><div className={`project-visual project-preview preview-${project.number}`}>
    {project.number === '01' ? <FormationGallery /> : project.number === '02' ? <OutreachGallery /> : project.number === '04' ? <MercusGallery /> : project.number === '05' ? <CrmGallery /> : project.image ? <><Image src={project.image} alt={`${project.title} ${t('interface')}`} fill sizes="(max-width: 650px) calc(100vw - 32px), (max-width: 900px) 50vw, 580px" quality={75} loading={project.number === '07' ? 'eager' : 'lazy'} decoding="async" /><span className="preview-label">{t('realScreen')}</span></> : <Preview label={project.title} number={project.number} />}
  </div><div className="project-info"><div className="project-kicker"><span>{project.number} — {t(`projectType${project.number}`).toUpperCase()}</span><span className="project-status"><i />{t(statusKey)}</span></div><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={19} /></div><p>{t(`projectDescription${project.number}`)}</p>{project.outcome && <p className="project-outcome">{t(`projectOutcome${project.number}`)}</p>}<div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{(project.href || project.code) && <div className="project-links">{project.href && <a href={project.href} target="_blank" rel="noreferrer">{t('visit')} <ExternalLink size={13} /></a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">{t('source')} <Code2 size={13} /></a>}</div>}</div></article>;
}
const outreachScreens = [
  ['leads-dashboard.webp', 'Leads overview'], ['lead-list.webp', 'Lead list'], ['email-templates.webp', 'Email templates'], ['activity.webp', 'Activity log'],
] as const;
function OutreachGallery() {
  return <ScreenGallery screens={outreachScreens} directory="outreach-workspace" product="Outreach workspace" label="REAL PRODUCT SCREEN" className="outreach-gallery" />;
}
const formationScreens = [
  ['Screenshot%202026-10-29%20192417.webp', 'Platform home'], ['Screenshot%202026-10-29%20192439.webp', 'Live events'], ['Screenshot%202026-10-29%20192457.webp', 'Learner progress'], ['Screenshot%202026-10-29%20192504.webp', 'Admin dashboard'], ['Screenshot%202026-10-30%20162934.webp', 'Learning paths'], ['Screenshot%202026-10-30%20162954.webp', 'Course management'], ['Screenshot%202026-10-30%20163009.webp', 'Live-event management'], ['Screenshot%202026-10-30%20163019.webp', 'Learner analytics'], ['Screenshot%202026-10-30%20163028.webp', 'Account management'], ['Screenshot%202026-10-30%20163037.webp', 'Certificate settings'], ['Screenshot%202026-10-30%20163055.webp', 'Certificate preview'], ['Screenshot%202026-10-30%20163110.webp', 'My certificates'], ['Screenshot%202026-10-30%20163127.webp', 'Profile settings'],
] as const;
function FormationGallery() {
  return <ScreenGallery screens={formationScreens} directory="formation-agency" product="EduFormation" label="REAL PRODUCT SCREEN" />;
}
const crmScreens = [
  ['Screenshot%202026-10-30%20162557.webp', 'CRM dashboard'], ['Screenshot%202026-10-30%20162608.webp', 'Tasks & content calendar'], ['Screenshot%202026-10-30%20162635.webp', 'Leads management'], ['Screenshot%202026-10-30%20162644.webp', 'Manager dashboard'], ['Screenshot%202026-10-30%20162705.webp', 'Sales Kanban'], ['Screenshot%202026-10-30%20162718.webp', 'Content Kanban'],
] as const;
function CrmGallery() {
  return <ScreenGallery screens={crmScreens} directory="littoral-crm" product="Littoral Immobilier CRM" label="REAL CLIENT WORKFLOW" className="crm-gallery" />;
}
const mercusScreens = [
  ['Screenshot%202026-10-30%20163406.webp', 'Hero & product value'], ['Screenshot%202026-10-30%20163416.webp', 'Problem framing'], ['Screenshot%202026-10-30%20163437.webp', 'AI workforce'], ['Screenshot%202026-10-30%20163510.webp', 'Onboarding flow'], ['Screenshot%202026-10-30%20163540.webp', 'Demo contact flow'],
] as const;
function MercusGallery() {
  return <ScreenGallery screens={mercusScreens} directory="mercus-ai" product="Mercus AI" label="REAL PRODUCT SCREEN" className="mercus-gallery" />;
}
type Screens = readonly (readonly [string, string])[];
function ScreenGallery({ screens, directory, product, label, className = '' }: { screens: Screens; directory: string; product: string; label: string; className?: string }) {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const swipeStart = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const screen = screens[active];
  const select = (direction: number) => setActive((current) => (current + direction + screens.length) % screens.length);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); select(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); select(1); }
  };
  return <div className={`formation-gallery ${className}`} role="region" aria-roledescription={t('carousel')} aria-label={`${product} ${t('screens')}`} tabIndex={0} onKeyDown={onKeyDown} onClick={(event) => { if (event.target instanceof HTMLImageElement && !didSwipe.current) select(1); }} onPointerDown={(event) => { didSwipe.current = false; swipeStart.current = event.clientX; }} onPointerUp={(event) => { if (swipeStart.current === null) return; const distance = event.clientX - swipeStart.current; swipeStart.current = null; if (Math.abs(distance) > 40) { didSwipe.current = true; select(distance > 0 ? -1 : 1); } }}>
    <Image src={`/assets/${directory}/${screen[0]}`} alt={`${product}: ${screen[1]}`} fill sizes="(max-width: 650px) calc(100vw - 32px), (max-width: 900px) 50vw, 580px" quality={75} loading="lazy" decoding="async" draggable={false} />
    <span className="preview-label">{label === 'REAL CLIENT WORKFLOW' ? t('clientWorkflow') : t('realScreen')}</span><span className="gallery-hint" aria-hidden="true">{t('galleryHint')}</span>
    <div className="gallery-toolbar"><button type="button" onClick={() => select(-1)} aria-label={`${t('previous')} ${product}`}><ChevronLeft size={17} /></button><span className="gallery-screen-title"><b>{String(active + 1).padStart(2, '0')}</b> / {String(screens.length).padStart(2, '0')} <em>{screen[1]}</em></span><button type="button" onClick={() => select(1)} aria-label={`${t('next')} ${product}`}><ChevronRight size={17} /></button></div>
    <div className="gallery-dots" role="tablist" aria-label={`${product} ${t('screens')}`}>{screens.map((item, index) => <button key={item[0]} type="button" role="tab" aria-label={`${t('showScreen')} ${item[1]}`} aria-selected={index === active} onClick={() => setActive(index)} />)}</div>
  </div>;
}
function Preview({ label, number }: { label: string; number: string }) { const { t } = useI18n(); return <div className="abstract-preview"><span className="preview-label">{t('projectPreview')}</span><div className="preview-browser"><span /><span /><span /></div><div className="preview-content"><small>H2D / {number}</small><strong>{label}</strong><div className="preview-lines"><i /><i /><i /></div><div className="preview-blocks"><b /><b /><b /></div></div></div>; }
