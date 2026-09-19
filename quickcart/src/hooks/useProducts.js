import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../data/products";

const LOAD_MS = 650;

export function useProducts({ search, category }) {
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (active) {
        setCatalog(PRODUCTS);
      }
    }, LOAD_MS);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  const loading = catalog === null;

  const products = useMemo(() => {
    if (!catalog) return [];
    const q = search.trim().toLowerCase();
    return catalog.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [catalog, search, category]);

  return { products, loading };
}
