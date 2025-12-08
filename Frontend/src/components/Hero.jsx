import './Hero.css';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Find Your Best Product</h1>
        <p>Quality items with the best price for you.</p>
        <button >Shop Now</button>
      </div>

      <div className="hero-img">
        <img src="/banner.JPG" alt="Banner" />
      </div>
    </section>
  );
}
