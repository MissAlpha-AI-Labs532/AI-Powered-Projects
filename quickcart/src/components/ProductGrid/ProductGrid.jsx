import ProductCard from "../ProductCard/ProductCard";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";
import styles from "./ProductGrid.module.css";

function ProductSkeleton() {
  return (
    <div className={styles.skeletonCard} aria-hidden="true">
      <Skeleton className={styles.skeletonMedia} />
      <div className={styles.skeletonBody}>
        <Skeleton style={{ height: "1.1rem", width: "70%" }} />
        <Skeleton style={{ height: "0.85rem", width: "90%" }} />
        <Skeleton style={{ height: "2rem", width: "40%", marginTop: "0.5rem" }} />
      </div>
    </div>
  );
}

export default function ProductGrid({
  products,
  loading,
  onClearFilters,
  hasFilters,
}) {
  if (loading) {
    return (
      <div
        className={styles.grid}
        aria-busy="true"
        aria-label="Loading products"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyState
        title="No matches in this aisle"
        message={
          hasFilters
            ? "Try another category or clear your search to see everything in stock."
            : "Products will show up here when the aisle is stocked."
        }
        actionLabel={hasFilters ? "Clear filters" : undefined}
        onAction={hasFilters ? onClearFilters : undefined}
      />
    );
  }

  return (
    <div className={styles.grid} role="list">
      {products.map((product, index) => (
        <div
          key={product.id}
          role="listitem"
          style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
