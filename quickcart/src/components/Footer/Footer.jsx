import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>QuickCart</p>
          <p className={styles.tagline}>
            Neighborhood groceries, delivered on the clock.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Footer">
          <a href="#products">Shop</a>
          <a href="#top">Locations</a>
          <a href="mailto:hello@quickcart.example">Support</a>
        </nav>
        <p className={styles.copy}>© {year} QuickCart. All rights reserved.</p>
      </div>
    </footer>
  );
}
