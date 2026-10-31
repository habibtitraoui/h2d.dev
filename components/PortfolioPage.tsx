'use client';

import { useState } from 'react';
import { About } from './sections/About';
import { Approach } from './sections/Approach';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { WhatsAppFloat } from './sections/WhatsAppFloat';
import { LanguageProvider, useI18n } from './i18n';

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <LanguageProvider><PortfolioContent menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} /></LanguageProvider>;
}

function PortfolioContent({ menuOpen, onToggle, onNavigate }: { menuOpen: boolean; onToggle: () => void; onNavigate: () => void }) {
  const { t } = useI18n();
  return <><a className="skip-link" href="#main">{t('skip')}</a><Header isOpen={menuOpen} onToggle={onToggle} onNavigate={onNavigate} /><main id="main"><Hero /><Services /><Projects /><Approach /><About /><Contact /></main><Footer /><WhatsAppFloat /></>;
}
