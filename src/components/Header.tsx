import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '../data';
import { useScrolled, useReducedMotion } from '../hooks';
import s from './Header.module.scss';

const NAV_LINKS = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Brands', href: '#brands' },
    { label: 'Contact', href: '#contact' },
] as const;

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrolled = useScrolled(80);
    const reduced = useReducedMotion();

    const closeMenu = () => setMenuOpen(false);

    return (
        <header id="top" className={`${s.header} ${scrolled ? s.scrolled : ''}`} role="banner">
            <div className={s.inner}>
                <a href="#top" className={s.logo} aria-label="Armidale Bicycle Centre — Home">
                    <img src="./logo.png" alt="Armidale Bicycle Centre" className={s.logoImg} />
                </a>

                <nav className={s.nav} aria-label="Main navigation">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className={s.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className={s.actions}>
                    <a href={BUSINESS.phone} className={s.ctaBtn} aria-label={`Call us: ${BUSINESS.phoneDisplay}`}>
                        <Phone size={16} aria-hidden="true" />
                        <span>Call Us</span>
                    </a>
                    <button
                        className={s.hamburger}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className={s.drawer}
                        role="dialog"
                        aria-label="Mobile navigation"
                        initial={reduced ? false : { opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        <nav aria-label="Mobile navigation links">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={s.drawerLink}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <a
                            href={BUSINESS.phone}
                            className={s.drawerCta}
                            onClick={closeMenu}
                            aria-label={`Call us: ${BUSINESS.phoneDisplay}`}
                        >
                            <Phone size={18} aria-hidden="true" />
                            {BUSINESS.phoneDisplay}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
