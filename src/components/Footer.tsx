import { Phone, Mail } from 'lucide-react';
import { BUSINESS, TRADING_HOURS } from '../data';
import s from './Footer.module.scss';

const NAV_LINKS = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Brands', href: '#brands' },
    { label: 'Contact', href: '#contact' },
] as const;

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={s.footer} role="contentinfo">
            <div className={s.inner}>
                <div className={s.top}>
                    {/* Brand */}
                    <div className={s.brand}>
                        <a href="#top" aria-label="Armidale Bicycle Centre — Back to top">
                            <img src="./logo.png" alt="Armidale Bicycle Centre" className={s.logo} />
                        </a>
                        <p className={s.abn}>ABN {BUSINESS.abn}</p>
                    </div>

                    {/* Quick Links */}
                    <div className={s.col}>
                        <h3 className={s.colHeading}>Quick Links</h3>
                        <nav aria-label="Footer navigation">
                            <ul className={s.linkList}>
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className={s.link}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className={s.col}>
                        <h3 className={s.colHeading}>Contact</h3>
                        <ul className={s.contactList}>
                            <li>
                                <a
                                    href={BUSINESS.phone}
                                    className={s.contactLink}
                                    aria-label={`Phone: ${BUSINESS.phoneDisplay}`}
                                >
                                    <Phone size={14} aria-hidden="true" />
                                    {BUSINESS.phoneDisplay}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${BUSINESS.email}`}
                                    className={s.contactLink}
                                    aria-label={`Email: ${BUSINESS.email}`}
                                >
                                    <Mail size={14} aria-hidden="true" />
                                    {BUSINESS.email}
                                </a>
                            </li>
                            <li className={s.address}>{BUSINESS.address}</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className={s.col}>
                        <h3 className={s.colHeading}>Hours</h3>
                        <table className={s.hours}>
                            <tbody>
                                {TRADING_HOURS.map((row) => (
                                    <tr key={row.day}>
                                        <td className={s.hoursDay}>{row.day}</td>
                                        <td className={s.hoursTime}>{row.hours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={s.bottom}>
                    <p>
                        &copy; {year} {BUSINESS.name}. All rights reserved.
                    </p>
                    <p className={s.attribution}>Website by JBM Web Co</p>
                </div>
            </div>
        </footer>
    );
}
