import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useI18n } from '../i18n';

export function Contact() {
  const { t } = useI18n();
  const title = t('contactTitle').split('|');
  return <section className="contact-section" id="contact"><div className="contact-grid section-wrap"><div><p className="eyebrow mono">{t('contactEyebrow')}</p><h2>{title[0]}<br /><span>{title[1]}</span></h2></div><div className="contact-copy"><p>{t('contactText')}</p><a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=${encodeURIComponent(t('emailSubject'))}`}>{t('tellMe')} <ArrowUpRight size={16} /></a><p className="contact-email"><span className="mono">{t('directEmail')}</span><a href={`mailto:${profile.email}`}>{profile.email}</a></p></div></div></section>;
}
