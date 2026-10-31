import { services } from '../data/portfolio';
import { useI18n } from '../i18n';

export function Services() {
  const { t } = useI18n();
  return <section className="service-strip section-wrap" aria-label={t('serviceLabel')}><p className="strip-label mono">{t('services')}</p><div className="service-list">{services.map((_, index) => <span key={index}><b>{String(index + 1).padStart(2, '0')}</b>{t(`service${index + 1}`)}</span>)}</div></section>;
}
