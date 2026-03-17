import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, TRADING_HOURS } from '../data';
import s from './Contact.module.scss';

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const INITIAL_FORM: FormState = {
    name: '',
    email: '',
    phone: '',
    message: '',
};

export function Contact() {
    const [form, setForm] = useState<FormState>(INITIAL_FORM);
    const [submitted, setSubmitted] = useState(false);

    const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className={s.contact} aria-labelledby="contact-heading">
            <div className={s.inner}>
                <div className={s.sectionHeader}>
                    <p className={s.sectionLabel}>Get In Touch</p>
                    <h2 id="contact-heading" className={s.sectionHeading}>
                        We'd Love to Hear From You
                    </h2>
                    <p className={s.sectionIntro}>
                        Visit us in store or reach out — we're always happy to help.
                    </p>
                </div>

                <div className={s.grid}>
                    {/* Left — contact info */}
                    <div className={s.infoCol}>
                        <a
                            href={BUSINESS.phone}
                            className={s.phoneCta}
                            aria-label={`Call us: ${BUSINESS.phoneDisplay}`}
                        >
                            <Phone size={22} aria-hidden="true" />
                            {BUSINESS.phoneDisplay}
                        </a>

                        <div className={s.contactDetails}>
                            <div className={s.detailItem}>
                                <div className={s.detailIcon} aria-hidden="true">
                                    <Mail size={16} />
                                </div>
                                <div className={s.detailContent}>
                                    <span className={s.detailLabel}>Email</span>
                                    <a
                                        href={`mailto:${BUSINESS.email}`}
                                        className={s.detailValue}
                                    >
                                        {BUSINESS.email}
                                    </a>
                                </div>
                            </div>

                            <div className={s.detailItem}>
                                <div className={s.detailIcon} aria-hidden="true">
                                    <MapPin size={16} />
                                </div>
                                <div className={s.detailContent}>
                                    <span className={s.detailLabel}>Address</span>
                                    <span className={s.detailValue}>{BUSINESS.address}</span>
                                    <span className={s.detailNote}>{BUSINESS.locationNote}</span>
                                </div>
                            </div>

                            <div className={s.detailItem}>
                                <div className={s.detailIcon} aria-hidden="true">
                                    <Clock size={16} />
                                </div>
                                <div className={s.detailContent}>
                                    <span className={s.detailLabel}>Trading Hours</span>
                                    <table className={s.hoursTable}>
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
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className={s.formCol}>
                        {submitted ? (
                            <div className={s.successMsg} role="alert" aria-live="polite">
                                <p className={s.successTitle}>Message Sent</p>
                                <p className={s.successBody}>
                                    Thanks for reaching out — we'll be in touch soon.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className={s.form}
                                noValidate
                                aria-label="Contact enquiry form"
                            >
                                <div className={s.fieldGroup}>
                                    <label htmlFor="name" className={s.label}>
                                        Name <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className={s.input}
                                        value={form.name}
                                        onChange={update('name')}
                                        placeholder="Your full name"
                                        required
                                        autoComplete="name"
                                    />
                                </div>

                                <div className={s.fieldRow}>
                                    <div className={s.fieldGroup}>
                                        <label htmlFor="email" className={s.label}>
                                            Email <span aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className={s.input}
                                            value={form.email}
                                            onChange={update('email')}
                                            placeholder="you@example.com"
                                            required
                                            autoComplete="email"
                                        />
                                    </div>

                                    <div className={s.fieldGroup}>
                                        <label htmlFor="phone" className={s.label}>
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            className={s.input}
                                            value={form.phone}
                                            onChange={update('phone')}
                                            placeholder="04XX XXX XXX"
                                            autoComplete="tel"
                                        />
                                    </div>
                                </div>

                                <div className={s.fieldGroup}>
                                    <label htmlFor="message" className={s.label}>
                                        Message <span aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={`${s.input} ${s.textarea}`}
                                        value={form.message}
                                        onChange={update('message')}
                                        placeholder="Tell us what you're looking for..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit" className={s.submitBtn}>
                                    Send Enquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Map */}
                <div className={s.mapWrap}>
                    {/* NOTE: Replace the src URL if the embed does not render correctly */}
                    <iframe
                        src="https://www.google.com/maps?q=2/244+Beardy+St,+Armidale+NSW+2350&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Armidale Bicycle Centre location — 2/244 Beardy St, Armidale NSW 2350"
                        className={s.map}
                    />
                </div>
            </div>
        </section>
    );
}
