import { LOCATIONS } from "../../data/products";
import styles from "./LocationSelector.module.css";

export default function LocationSelector({ value, onChange }) {
  const selected = LOCATIONS.find((l) => l.id === value) ?? LOCATIONS[0];

  return (
    <div className={styles.wrap}>
      <label htmlFor="qc-location" className={styles.label}>
        Deliver to
      </label>
      <div className={styles.control}>
        <select
          id="qc-location"
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby="qc-location-eta"
        >
          {LOCATIONS.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.label}
            </option>
          ))}
        </select>
        <span id="qc-location-eta" className={styles.eta}>
          ETA {selected.eta}
        </span>
      </div>
    </div>
  );
}
