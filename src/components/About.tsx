import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks';
import s from './About.module.scss';

export function About() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-120px' });
    const reduced = useReducedMotion();

    const fadeUp = (delay: number) => ({
        initial: reduced ? undefined : { opacity: 0, y: 32 },
        animate: reduced ? undefined : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }),
        transition: reduced ? undefined : { duration: 0.65, delay },
    });

    return (
        <section id="about" className={s.about} aria-labelledby="about-heading">
            <div className={s.inner} ref={ref}>
                {/* Left — typographic anchor */}
                <div className={s.leftCol}>
                    <motion.div className={s.yearBlock} {...fadeUp(0)}>
                        <span className={s.yearNumber} aria-hidden="true">1974</span>
                        <span className={s.yearLabel}>Established</span>
                    </motion.div>

                    <motion.blockquote className={s.pullQuote} {...fadeUp(0.12)}>
                        <p>
                            "Six Olympic Games.
                            <br />
                            One town.
                            <br />
                            One shop."
                        </p>
                    </motion.blockquote>

                    <motion.div className={s.credentialPill} {...fadeUp(0.2)}>
                        Olympic &amp; Commonwealth Games Mechanics
                    </motion.div>
                </div>

                {/* Right — content */}
                <div className={s.rightCol}>
                    <motion.p className={s.sectionLabel} {...fadeUp(0.05)}>
                        About Us
                    </motion.p>

                    <motion.h2 id="about-heading" className={s.heading} {...fadeUp(0.1)}>
                        Family-Owned.
                        <br />
                        Olympic-Proven.
                    </motion.h2>

                    <motion.div className={s.body} {...fadeUp(0.18)}>
                        <p>
                            Armidale Bicycle Centre was founded in 1974 by{' '}
                            <strong>Jock Bullen</strong> — a name synonymous
                            with cycling excellence in New England. More than
                            fifty years on, we remain the region's most trusted
                            bike shop, built on a foundation of genuine
                            expertise and honest service.
                        </p>
                        <p>
                            Our team brings over{' '}
                            <strong>165 years of combined experience</strong>{' '}
                            to every interaction. Jock and Mark have represented
                            Australian cyclists as certified mechanics at{' '}
                            <strong>
                                six Olympic and Commonwealth Games
                            </strong>
                            , bringing world-class technical knowledge back to
                            our workshop on Beardy Street.
                        </p>
                        <p>
                            We are the biggest and most professional bike shop
                            in the New England region — stocking the world's
                            leading brands, running a full on-site workshop,
                            and offering professional bike fitting and coaching
                            across Armidale and surrounds.
                        </p>
                    </motion.div>

                    <motion.div className={s.statsRow} {...fadeUp(0.26)}>
                        <div className={s.statItem}>
                            <span className={s.statValue}>50+</span>
                            <span className={s.statDesc}>Years in Business</span>
                        </div>
                        <div className={s.statDivider} aria-hidden="true" />
                        <div className={s.statItem}>
                            <span className={s.statValue}>165+</span>
                            <span className={s.statDesc}>Years Combined Experience</span>
                        </div>
                        <div className={s.statDivider} aria-hidden="true" />
                        <div className={s.statItem}>
                            <span className={s.statValue}>6</span>
                            <span className={s.statDesc}>Olympic Games</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
