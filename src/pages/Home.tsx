import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("todos");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "todos" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <span style={styles.badge}>GAP Nutrition</span>

          <h1 style={styles.title}>
            Suplementos para potenciar tu rendimiento
          </h1>

          <p style={styles.subtitle}>
            Descubre proteínas, creatinas y accesorios pensados para acompañar
            tus objetivos físicos con una experiencia de compra simple, rápida y moderna.
          </p>

          <div style={styles.heroButtons}>
            <a href="#productos" style={styles.primaryButton}>
              Ver productos
            </a>

            <a href="/cart" style={styles.secondaryButton}>
              Ir al carrito
            </a>
          </div>
        </div>

        <div style={styles.heroCards}>
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>Envío rápido</h3>
            <p style={styles.cardText}>Compra simple y despacho eficiente.</p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>Calidad premium</h3>
            <p style={styles.cardText}>Suplementos orientados al rendimiento.</p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>Pago seguro</h3>
            <p style={styles.cardText}>Experiencia confiable y clara para el usuario.</p>
          </div>
        </div>
      </section>

      <section id="productos" style={styles.productsSection}>
        <div style={styles.topBar}>
          <div>
            <h2 style={styles.sectionTitle}>Catálogo de productos</h2>
            <p style={styles.sectionText}>
              Explora nuestra selección de suplementos y accesorios.
            </p>
          </div>

          <input
            type="text"
            placeholder="Buscar suplemento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.filters}>
          <button style={styles.filterButton} onClick={() => setCategory("todos")}>
            Todos
          </button>
          <button style={styles.filterButton} onClick={() => setCategory("proteina")}>
            Proteínas
          </button>
          <button style={styles.filterButton} onClick={() => setCategory("creatina")}>
            Creatinas
          </button>
          <button style={styles.filterButton} onClick={() => setCategory("accesorio")}>
            Accesorios
          </button>
        </div>

        <section style={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p style={styles.emptyText}>No se encontraron productos.</p>
          )}
        </section>
      </section>

      <footer style={styles.footer}>
        © 2026 GAP Nutrition · Desarrollado por Gonzalo Oyarzún
      </footer>

    </main>
  );
}

const styles = {
  page: {
    padding: "24px",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    alignItems: "center",
    padding: "32px",
    borderRadius: "24px",
    background: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
    color: "white",
    marginBottom: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  },
  heroText: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  badge: {
    display: "inline-block",
    width: "fit-content",
    backgroundColor: "#22c55e",
    color: "#111",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  title: {
    fontSize: "42px",
    lineHeight: 1.1,
    margin: 0,
  },
  subtitle: {
    fontSize: "17px",
    lineHeight: 1.6,
    margin: 0,
    color: "#e5e7eb",
    maxWidth: "560px",
  },
  heroButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap" as const,
    marginTop: "8px",
  },
  primaryButton: {
    backgroundColor: "#22c55e",
    color: "#111",
    padding: "12px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "white",
    padding: "12px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  heroCards: {
    display: "grid",
    gap: "14px",
  },
  infoCard: {
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "16px",
    padding: "18px",
    backdropFilter: "blur(6px)",
  },
  cardTitle: {
    margin: "0 0 8px 0",
    fontSize: "18px",
  },
  cardText: {
    margin: 0,
    color: "#e5e7eb",
    lineHeight: 1.5,
  },
  productsSection: {
    marginTop: "12px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: "16px",
    flexWrap: "wrap" as const,
    marginBottom: "20px",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "28px",
  },
  sectionText: {
    marginTop: "8px",
    marginBottom: 0,
    color: "#555",
  },
  input: {
    width: "100%",
    maxWidth: "360px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    backgroundColor: "white",
  },
  filters: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
    marginBottom: "24px",
    flexWrap: "wrap" as const,
  },
  filterButton: {
    padding: "10px 14px",
    border: "none",
    borderRadius: "999px",
    backgroundColor: "#111827",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "8px",
  },
  emptyText: {
    fontSize: "18px",
    color: "#666",
  },
  footer: {
    marginTop: "60px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e7eb",
    textAlign: "center" as const,
    color: "#6b7280",
    fontSize: "14px",
  },
};