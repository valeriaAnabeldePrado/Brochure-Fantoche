// pages/index.js

import ProductCard from "./alta";
import "./alfa.css";

export default function AlfaHome({ products, pie, bgPosition }) {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg"
      style={{ "--bg-position": bgPosition }}
    >
      <div className="h-[85%] w-[85%] bg-slate-50 bg-opacity-85 flex items-center rounded-3xl justify-evenly relative align-middle ">
        <div className="absolute w-1 h-[350px] bg-amber-700 bg-opacity-50"></div>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
        <h1 className="absolute text-3xl bottom-10 right-10 text-amber-700 bg-opacity-50 ">
          {pie}
        </h1>
      </div>
    </div>
  );
}
