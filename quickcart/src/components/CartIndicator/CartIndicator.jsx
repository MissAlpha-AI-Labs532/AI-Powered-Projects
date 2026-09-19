import { useCart } from "../../hooks/useCart";
import styles from "./CartIndicator.module.css";

function formatMoney(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export default function CartIndicator() {
  const { count, total, items, isOpen, setIsOpen, removeItem, clearCart } =
    useCart();

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls="qc-cart-panel"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.icon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 7h15l-1.5 9h-12L6 7z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M6 7L5 3H2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="10" cy="20" r="1.5" fill="currentColor" />
            <circle cx="17" cy="20" r="1.5" fill="currentColor" />
          </svg>
        </span>
        <span className={styles.label}>Cart</span>
        <span
          className={`${styles.badge} ${count > 0 ? styles.badgeActive : ""}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
          <span className="sr-only"> items in cart</span>
        </span>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close cart"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="qc-cart-panel"
            className={styles.panel}
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className={styles.panelHead}>
              <h2 className={styles.panelTitle}>Your cart</h2>
              <button
                type="button"
                className={styles.close}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            {items.length === 0 ? (
              <p className={styles.empty}>
                Your cart is empty. Add something fresh from the aisle.
              </p>
            ) : (
              <>
                <ul className={styles.list}>
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className={styles.item}>
                      <div>
                        <p className={styles.itemName}>{product.name}</p>
                        <p className={styles.itemMeta}>
                          {quantity} × {formatMoney(product.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        className={styles.remove}
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remove ${product.name}`}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  <p className={styles.total}>
                    Total <strong>{formatMoney(total)}</strong>
                  </p>
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.secondary}
                      onClick={clearCart}
                    >
                      Clear
                    </button>
                    <button type="button" className={styles.primary}>
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
