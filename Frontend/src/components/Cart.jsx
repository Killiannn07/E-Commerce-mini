import CartItem from "./CartItem";

export default function Cart() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-bold text-2xl mb-6">Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* List Barang */}
        <div className="lg:col-span-2 space-y-10 bg-fourth p-6 rounded-lg shadow-lg">
          <CartItem
            img="/product_1.JPG"
            title="Sugeng Tumbler"
            variant="White"
            price={100000}
            stock="In stock"
          />
          <CartItem
            img="/product_2.JPG"
            title="Adidas Samba"
            variant="Red — 41"
            price={3200000}
            stock="In stock"
          />

          <CartItem
            img="/product_3.JPG"
            title="Nike Airforce"
            variant="Black — 41"
            price={320000}
            stock="Ships in 3-4 weeks"
          />
        </div>
        {/* SUMMARY BOX */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <div className="flex justify-between px-6 py-3 border-b">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">$99.00</span>
          </div>

          <div className="flex justify-between px-6 py-3 border-b">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium">$8.00</span>
          </div>

          <div className="flex justify-between px-6 py-3 border-b">
            <span className="text-gray-500">Tax</span>
            <span className="font-medium">$5.22</span>
          </div>

          <div className="flex justify-between px-6 py-3">
            <span className="font-semibold">Order total</span>
            <span className="font-bold">$112.22</span>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 mt-4 rounded-lg font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
