import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { process } from '../data/portfolio';
import { useI18n } from '../i18n';

export function Approach() {
  const { t } = useI18n();
  const title = t('approachTitle').split('|');
  return <section className="approach-section" id="approach"><div className="section-wrap approach-inner"><div className="approach-heading"><p className="eyebrow mono">{t('approachEyebrow')}</p><h2>{title[0]}<br />{title[1].replace(/\.$/, '')}<span className="accent">.</span></h2><p>{t('approachText')}</p><a className="text-link" href="#contact">{t('projectFit')} <ArrowUpRight size={14} /></a></div><div className="steps-list">{process.map(([number]) => <article key={number}><span className="step-number">{number}</span><div><h3>{t(`step${Number(number)}Title`)}</h3><p>{t(`step${Number(number)}Text`)}</p></div><CheckCircle2 className="step-symbol" size={18} /></article>)}</div></div></section>;
}
