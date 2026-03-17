import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bike, Wrench, SlidersHorizontal, TrendingUp } from 'lucide-react';
import { SERVICES } from '../data';
import type { Service } from '../data';
import { useReducedMotion } from '../hooks';
import s from './Services.module.scss';

const ICONS = [
    <Bike size={28} aria-hidden="true" />,
    <Wrench size={28} aria-hidden="true" />,
    <SlidersHorizontal size={28} aria-hidden="true" />,
    <TrendingUp size={28} aria-hidden="true" />,
];

const SERVICE_NUMS = ['01', '02', '03', '04'];

type ServiceCardProps = {
    service: Service;
    index: number;
    isInView: boolean;
    reduced: boolean;
};

function ServiceCard({ service, index, isInView, reduced }: ServiceCardProps) {
    return (
        <motion.article
            className={`${s.card} ${service.highlight ? s.cardHighlight : ''}`}
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 })}
            transition={reduced ? undefined : { duration: 0.55, delay: index * 0.1 }}
            aria-label={service.title}
        >
            <div className={s.cardHeader}>
                <span className={s.cardNum} aria-hidden="true">
                    {SERVICE_NUMS[index]}
                </span>
                <div className={s.iconWrap} aria-hidden="true">
                    {ICONS[index]}
                </div>
            </div>

            {service.highlight && (
                <div className={s.badge} role="note">
                    Same-Day Available
                </div>
            )}

            <h3 className={s.cardTitle}>{service.title}</h3>
            <p className={s.cardDesc}>{service.description}</p>
        </motion.article>
    );
}

export function Services() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const reduced = useReducedMotion();

    return (
        <section id="services" className={s.services} aria-labelledby="services-heading">
            <div className={s.inner}>
                <div className={s.sectionHeader}>
                    <p className={s.sectionLabel}>What We Do</p>
                    <h2 id="services-heading" className={s.sectionHeading}>
                        Expert Service,
                        <br />
                        Every Time
                    </h2>
                </div>

                <div className={s.grid} ref={ref}>
                    {SERVICES.map((service, i) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={i}
                            isInView={isInView}
                            reduced={reduced}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
