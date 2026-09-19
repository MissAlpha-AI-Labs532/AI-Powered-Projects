import { CATEGORIES } from "../../data/products";
import styles from "./Categories.module.css";

export default function Categories({ value, onChange }) {
  return (
    <nav className={styles.nav} aria-label="Product categories">
      <ul className={styles.list} role="list">
        {CATEGORIES.map((cat) => {
          const pressed = value === cat.id;
          return (
            <li key={cat.id}>
              <button
                type="button"
                className={`${styles.chip} ${pressed ? styles.active : ""}`}
                aria-pressed={pressed}
                onClick={() => onChange(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
