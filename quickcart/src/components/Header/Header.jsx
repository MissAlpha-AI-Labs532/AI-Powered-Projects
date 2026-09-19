import SearchBar from "../SearchBar/SearchBar";
import LocationSelector from "../LocationSelector/LocationSelector";
import CartIndicator from "../CartIndicator/CartIndicator";
import styles from "./Header.module.css";

export default function Header({
  search,
  onSearchChange,
  onSearchClear,
  location,
  onLocationChange,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path
                d="M8 10h2.2l.4 2h11.2a1 1 0 0 1 .98 1.2l-1.1 5.2a1.5 1.5 0 0 1-1.47 1.2H12.1a1.5 1.5 0 0 1-1.47-1.18L9.2 10.5H8V10zm5.2 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7.2 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                fill="#E8A317"
              />
            </svg>
          </span>
          <span className={styles.wordmark}>QuickCart</span>
        </a>

        <div className={styles.search}>
          <SearchBar
            value={search}
            onChange={onSearchChange}
            onClear={onSearchClear}
          />
        </div>

        <div className={styles.meta}>
          <LocationSelector value={location} onChange={onLocationChange} />
          <CartIndicator />
        </div>
      </div>
    </header>
  );
}
