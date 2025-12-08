import './ProductGrid.css';
import products from "../data/product";

export default function ProductGrid() {
  return (
    <section className="products">
      <h2>Best Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Rp {p.price.toLocaleString()}</p>
            <button>Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}
