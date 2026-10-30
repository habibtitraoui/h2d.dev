import { ArrowUpRight, Menu, X } from 'lucide-react';
type HeaderProps = { isOpen: boolean; onToggle: () => void; onNavigate: () => void };
export function Header({ isOpen, onToggle, onNavigate }: HeaderProps) {
  return <header className="site-header"><a className="wordmark" href="#top" aria-label="H2D.dev home"><span>H2D</span><i>.</i><small>dev</small></a><button className="nav-toggle" type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls="site-nav" aria-label={isOpen ? 'Close navigation' : 'Open navigation'}>{isOpen ? <X size={18} /> : <Menu size={18} />}</button><nav id="site-nav" className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation"><a onClick={onNavigate} href="#work">Work</a><a onClick={onNavigate} href="#approach">Process</a><a onClick={onNavigate} href="#about">About</a><a onClick={onNavigate} className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a></nav></header>;
}
