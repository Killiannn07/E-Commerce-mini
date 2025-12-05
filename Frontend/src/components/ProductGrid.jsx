const products = [
  { id: 1, name: "Nike Air Max", price: 1500000, image: "/p1.png" },
  { id: 2, name: "Adidas Ultraboost", price: 1800000, image: "/p2.png" },
  { id: 3, name: "Casual Shirt", price: 120000, image: "/p3.png" },
];

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
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
