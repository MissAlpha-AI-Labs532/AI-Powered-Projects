import { useState } from "react";
import { CartProvider } from "./context/CartProvider";
import { useProducts } from "./hooks/useProducts";
import Header from "./components/Header/Header";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import Categories from "./components/Categories/Categories";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("downtown");
  const { products, loading } = useProducts({ search, category });
  const hasFilters = search.trim().length > 0 || category !== "all";

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
  };

  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        onSearchClear={() => setSearch("")}
        location={location}
        onLocationChange={setLocation}
      />

      <main id="top" className={styles.main}>
        <section className={styles.hero} aria-labelledby="qc-hero-heading">
          <p className={styles.heroBrand}>QuickCart</p>
          <h1 id="qc-hero-heading" className={styles.heroTitle}>
            Fresh staples at your door
          </h1>
          <p className={styles.heroText}>
            Shop produce, dairy, bakery, and pantry essentials with
            neighborhood-speed delivery.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.heroCta} href="#products">
              Browse aisle
            </a>
            <a className={styles.heroSecondary} href="#promo">
              See offer
            </a>
          </div>
          <div className={styles.heroVisual} aria-hidden="true" />
        </section>

        <div id="promo" className={styles.section}>
          <PromoBanner locationId={location} />
        </div>

        <section
          id="products"
          className={styles.section}
          aria-labelledby="qc-products-heading"
        >
          <div className={styles.sectionHead}>
            <h2 id="qc-products-heading" className={styles.sectionTitle}>
              Today’s aisle
            </h2>
            <p className={styles.sectionText}>
              Filter by category or search by name.
            </p>
          </div>
          <Categories value={category} onChange={setCategory} />
          <ProductGrid
            products={products}
            loading={loading}
            hasFilters={hasFilters}
            onClearFilters={clearFilters}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Shop />
    </CartProvider>
  );
}
