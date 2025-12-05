import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

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