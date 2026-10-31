import { MessageCircle } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useI18n } from '../i18n';

export function WhatsAppFloat() {
  const { t } = useI18n();

  return (
    <a
      className="whatsapp-float"
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsappChat')}
    >
      <MessageCircle size={21} strokeWidth={2.2} aria-hidden="true" />
      <span>{t('whatsapp')}</span>
    </a>
  );
}
