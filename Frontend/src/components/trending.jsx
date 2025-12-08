import { useRef } from "react";
import trendingProducts from "../data/trending";

export default function Trending(){
    
    const slider = useRef(null);

    const scrollLeft = () => {
        slider.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        slider.current.scrollBy({ left: 300, behavior: "smooth" });
    };
    return(<section className="trending">
      <h2>Trending Products</h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={scrollLeft}>‹</button>

        <div className="carousel" ref={slider}>
          {trendingProducts.map((item) => (
            <div className="carousel-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Rp {item.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>›</button>
      </div>
    </section>);
    
}