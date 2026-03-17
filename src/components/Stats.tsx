import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../data';
import { useReducedMotion } from '../hooks';
import s from './Stats.module.scss';

export function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const reduced = useReducedMotion();

    return (
        <section className={s.stats} aria-label="Business statistics">
            <div className={s.inner} ref={ref}>
                {STATS.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className={s.item}
                        initial={reduced ? undefined : { opacity: 0, y: 20 }}
                        animate={reduced ? undefined : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                        transition={reduced ? undefined : { duration: 0.5, delay: i * 0.1 }}
                    >
                        <span className={s.value}>{stat.value}</span>
                        <span className={s.label}>{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
