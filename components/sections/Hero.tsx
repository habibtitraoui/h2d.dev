import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n';

export function Hero() {
  const { t } = useI18n();
  const title = t('heroTitle').split('|');
  const problem = t('realProblem').split('|');
  const outcome = t('works').split('|');

  return <section className="hero section-wrap" id="top"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{t('availability')}</p><h1>{title[0]}<br />{title[1]} <span className="accent-word">{title[2]}</span></h1><p className="hero-intro">{t('heroIntro')}</p><div className="hero-actions"><a className="button button-primary" href="#work">{t('seeWork')} <ArrowDown size={16} /></a><a className="text-link" href="#contact">{t('problem')} <ArrowUpRight size={14} /></a></div><div className="hero-footnote"><span className="mono">H2D / 01</span><span>{t('footnote')}</span></div></div><div className="hero-art" aria-label={t('heroArt')}><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-note note-idea"><span className="note-label">{t('start')}</span><b>{problem[0]}<br />{problem[1]}</b></div><div className="art-connector connector-one" /><div className="art-node"><span>H2D</span><i>.</i></div><div className="art-connector connector-two" /><div className="art-note note-result"><span className="note-label">{t('outcome')}</span><b>{outcome[0]}<br />{outcome[1]}</b><span className="mini-terminal"><i /><i /><i /></span></div><span className="art-index mono">{t('ideaSoftware')}</span><span className="art-caption">{t('lessNoise')}</span></div></section>;
}
