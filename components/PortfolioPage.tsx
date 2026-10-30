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

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <><a className="skip-link" href="#main">Skip to content</a><Header isOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} /><main id="main"><Hero /><Services /><Projects /><Approach /><About /><Contact /></main><Footer /></>;
}
