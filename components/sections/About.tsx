import { profile } from '../data/portfolio';
import { useI18n } from '../i18n';

export function About() {
  const { t } = useI18n();
  const title = t('aboutTitle').split('|');
  const stamp = t('independentByDesign').split('|');
  return <section className="about-section section-wrap" id="about"><div className="about-stamp"><span>H</span><i>.</i><small>{stamp[0]}<br />{stamp[1]}</small></div><div className="about-copy"><p className="eyebrow mono">{t('aboutEyebrow')}</p><h2>{title.map((line, index) => <span key={line}>{index > 0 && <br />}{index === title.length - 1 ? <span className="muted-heading">{line}</span> : line}</span>)}</h2><p>{t('aboutText1').replace('Habib Titraoui', profile.name)}</p><p>{t('aboutText2')}</p><div className="language-note"><span className="mono">{t('speak')}</span><b>English <i>·</i> Français <i>·</i> العربية</b></div></div></section>;
}
