import './Hero.css';
export default function Hero() {
  return (
    <section className="flex justify-between items-center hero m-10 bg-transparent">
      <div className="">
        <h1 className="text-5xl font-bold text-black">Find Your Best Product</h1>
        <p className="my-4 text-black">Quality items with the best price for you.</p>
        <button className=' px-6 py-3 bg-[#3F72AF] text-white rounded-lg hover:bg-[#112D4E] hover:scale-105'>Shop Now</button>
      </div>

      <div className="my-6 ml-6">
        <img src="/banner.JPG" alt="Banner" className='rounded-lg' />
      </div>
    </section>
  );
}
