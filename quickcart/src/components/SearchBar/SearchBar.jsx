import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <form
      className={styles.form}
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="qc-search" className="sr-only">
        Search products
      </label>
      <span className={styles.icon} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 20l-3.5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        id="qc-search"
        className={styles.input}
        type="search"
        placeholder="Search fresh finds…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
      {value ? (
        <button
          type="button"
          className={styles.clear}
          onClick={onClear}
          aria-label="Clear search"
        >
          Clear
        </button>
      ) : null}
    </form>
  );
}
