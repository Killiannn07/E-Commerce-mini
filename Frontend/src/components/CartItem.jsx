import { useState, } from "react";

export default function CartItem({ img, title, variant, price, stock }) {
  const [qty, setQty] = useState(1);
  

  return (
    <div className="flex items-start gap-4 pb-6 border-b">
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="w-24 h-24 object-cover rounded-lg border"
      />

      {/* DETAILS */}
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{variant}</p>
        <p className="text-green-600 text-sm mt-1">✔ {stock}</p>

        {/* REMOVE */}
        <button className="text-sm text-indigo-500 hover:underline mt-1">
          Remove
        </button>
      </div>

      {/* QTY + PRICE */}
      <div className="flex flex-col items-end gap-2">
        {/* Quantity Box */}
        <select
          className="border rounded-lg px-2 py-1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Price */}
        <p className="font-semibold">
          Rp {(price * qty).toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
