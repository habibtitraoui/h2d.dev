import { ArrowUpRight, Menu, X } from 'lucide-react';
import { LanguageSwitcher, useI18n } from '../i18n';
type HeaderProps = { isOpen: boolean; onToggle: () => void; onNavigate: () => void };
export function Header({ isOpen, onToggle, onNavigate }: HeaderProps) {
  const { t } = useI18n();
  return <header className="site-header"><a className="wordmark" href="#top" aria-label="H2D.dev home"><span>H2D</span><i>.</i><small>dev</small></a><button className="nav-toggle" type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls="site-nav" aria-label={t(isOpen ? 'closeNav' : 'openNav')}>{isOpen ? <X size={18} /> : <Menu size={18} />}</button><nav id="site-nav" className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label={t('mainNav')}><a onClick={onNavigate} href="#work">{t('work')}</a><a onClick={onNavigate} href="#approach">{t('process')}</a><a onClick={onNavigate} href="#about">{t('about')}</a><LanguageSwitcher /><a onClick={onNavigate} className="nav-contact" href="#contact">{t('talk')} <ArrowUpRight size={14} /></a></nav></header>;
}
