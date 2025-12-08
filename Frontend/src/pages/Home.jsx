import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryList from "../components/categoryList";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Trending from "../components/trending";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      

      <CategoryList />

      <ProductGrid />

      <Footer />
    </>
  );
}