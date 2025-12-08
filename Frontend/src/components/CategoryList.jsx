import './categoryList.css';
const categories = [
  { id: 1, name: "Shoes", icon: "👟" },
  { id: 2, name: "Clothes", icon: "👕" },
  { id: 3, name: "Bags", icon: "👜" },
  { id: 4, name: "Pants", icon: "📱" },
];

export default function CategoryList() {
  return (
    <section className="categories">
      <h2>Categories</h2>

      <div className="category-grid">
        {categories.map((c) => (
          <div key={c.id} className="category-card">
            <span className="icon">{c.icon}</span>
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
