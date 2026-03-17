import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data';
import { useReducedMotion } from '../hooks';
import s from './Hero.module.scss';

export function Hero() {
    const reduced = useReducedMotion();

    const anim = (delay: number) =>
        reduced
            ? {}
            : {
                  initial: { opacity: 0, y: 28 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay },
              };

    return (
        <section className={s.hero} aria-label="Hero">
            {/* Background image — right side, diagonal clip */}
            <div className={s.imageWrap} aria-hidden="true">
                <img
                    src="./hero_background.png"
                    alt=""
                    className={s.image}
                    loading="eager"
                />
                <div className={s.imageOverlay} />
            </div>

            {/* Decorative diagonal stripe accent */}
            <div className={s.diagonalAccent} aria-hidden="true" />

            <div className={s.inner}>
                <div className={s.content}>
                    <motion.p className={s.eyebrow} {...anim(0)}>
                        Armidale, NSW&nbsp;&nbsp;·&nbsp;&nbsp;Est. 1974
                    </motion.p>

                    <motion.h1 className={s.headline} {...anim(0.1)}>
                        <span className={s.headlineRow}>Armidale's</span>
                        <span className={`${s.headlineRow} ${s.headlineAccent}`}>
                            Premier
                        </span>
                        <span className={s.headlineRow}>Bicycle Shop</span>
                    </motion.h1>

                    <motion.p className={s.sub} {...anim(0.25)}>
                        Expert sales, same-day repairs, and professional bike
                        fitting&nbsp;— since 1974.
                    </motion.p>

                    <motion.div className={s.ctas} {...anim(0.35)}>
                        <a
                            href={BUSINESS.phone}
                            className={s.ctaPrimary}
                            aria-label={`Call us: ${BUSINESS.phoneDisplay}`}
                        >
                            <Phone size={18} aria-hidden="true" />
                            Call Us Now
                        </a>
                        <a href="#contact" className={s.ctaSecondary}>
                            Get in Touch
                            <ArrowRight size={16} aria-hidden="true" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={s.scrollHint} aria-hidden="true">
                <span className={s.scrollLine} />
                <span className={s.scrollLabel}>Scroll</span>
            </div>
        </section>
    );
}
