import { BRANDS, ACCESSORIES_BRANDS } from '../data';
import type { Brand } from '../data';
import { useReducedMotion } from '../hooks';
import s from './Brands.module.scss';

function BrandLogo({ brand }: { brand: Brand }) {
    return (
        <a
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.logoLink}
            aria-label={`Visit ${brand.name} website (opens in new tab)`}
        >
            <div className={s.logoPill}>
                <img
                    src={brand.image}
                    alt={brand.name}
                    className={s.logoImg}
                    loading="lazy"
                />
            </div>
        </a>
    );
}

export function Brands() {
    const reduced = useReducedMotion();

    // Duplicate lists for seamless infinite loop
    const row1 = [...BRANDS, ...BRANDS];
    const row2 = [...BRANDS, ...BRANDS];

    return (
        <section id="brands" className={s.brands} aria-labelledby="brands-heading">
            <div className={s.inner}>
                <div className={s.sectionHeader}>
                    <p className={s.sectionLabel}>Brands We Stock</p>
                    <h2 id="brands-heading" className={s.sectionHeading}>
                        The World's Best Bikes
                    </h2>
                </div>
            </div>

            {/* Scrolling rows */}
            <div className={s.scrollArea} aria-label="Scrolling brand logos">
                {/* Row 1 — scrolls left */}
                <div className={s.row}>
                    <div
                        className={`${s.track} ${s.trackLeft}`}
                        style={reduced ? { animationPlayState: 'paused' } : undefined}
                    >
                        {row1.map((brand, i) => (
                            <BrandLogo key={`r1-${brand.name}-${i}`} brand={brand} />
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div className={s.row}>
                    <div
                        className={`${s.track} ${s.trackRight}`}
                        style={reduced ? { animationPlayState: 'paused' } : undefined}
                    >
                        {row2.map((brand, i) => (
                            <BrandLogo key={`r2-${brand.name}-${i}`} brand={brand} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Parts & Accessories */}
            <div className={s.inner}>
                <div className={s.accessories}>
                    <h3 className={s.accessoriesHeading}>Parts &amp; Accessories</h3>
                    <ul className={s.tagCloud} aria-label="Parts and accessories brands">
                        {ACCESSORIES_BRANDS.map((brand) => (
                            <li key={brand} className={s.tag}>
                                {brand}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
