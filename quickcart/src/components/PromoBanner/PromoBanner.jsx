import { LOCATIONS } from "../../data/products";
import styles from "./PromoBanner.module.css";

export default function PromoBanner({ locationId }) {
  const location = LOCATIONS.find((l) => l.id === locationId) ?? LOCATIONS[0];

  return (
    <section className={styles.banner} aria-labelledby="qc-promo-heading">
      <div className={styles.copy}>
        <p className={styles.kicker}>Same-day from {location.label}</p>
        <h2 id="qc-promo-heading" className={styles.title}>
          First order free delivery under 30 minutes
        </h2>
        <p className={styles.text}>
          Stock the kitchen with neighborhood-fresh staples. ETA{" "}
          {location.eta}.
        </p>
        <a className={styles.cta} href="#products">
          Shop the aisle
        </a>
      </div>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.orb} />
        <svg className={styles.art} viewBox="0 0 320 220" fill="none">
          <rect
            x="40"
            y="50"
            width="180"
            height="130"
            rx="18"
            fill="rgba(255,255,255,0.2)"
          />
          <rect x="70" y="80" width="50" height="70" rx="8" fill="#E8A317" />
          <rect x="135" y="70" width="55" height="80" rx="8" fill="#fff" />
          <circle cx="250" cy="70" r="36" fill="rgba(232,163,23,0.55)" />
          <path
            d="M210 160c20-30 55-35 75-10"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
