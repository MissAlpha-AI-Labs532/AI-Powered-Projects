import { useCart } from "../../hooks/useCart";
import styles from "./ProductCard.module.css";

function formatMoney(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={product.image} alt="" role="presentation" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.row}>
          <p className={styles.price}>
            {formatMoney(product.price)}
            <span className={styles.unit}> / {product.unit}</span>
          </p>
          <button
            type="button"
            className={styles.add}
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
