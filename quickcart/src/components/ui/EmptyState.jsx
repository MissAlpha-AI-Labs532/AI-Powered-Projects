import styles from "./EmptyState.module.css";

export default function EmptyState({ title, message, actionLabel, onAction }) {
  return (
    <div className={styles.empty} role="status">
      <div className={styles.icon} aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
          <path
            d="M16 28c2.5-3 6-4.5 8-4.5s5.5 1.5 8 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="18" cy="20" r="2" fill="currentColor" />
          <circle cx="30" cy="20" r="2" fill="currentColor" />
        </svg>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {actionLabel && onAction ? (
        <button type="button" className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
