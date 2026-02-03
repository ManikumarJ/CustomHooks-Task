import React from "react";
import useFetchData from "../hooks/useFetch";

const FetchDisplayData = () => {
  const { data } = useFetchData("https://dummyjson.com/products");

  const products = data?.products || [];

  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-slate-800 text-white p-5">
        PRODUCTS
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl">
            <img src={product.thumbnail} alt={product.title} className="w-full h-44 object-cover rounded-t-xl"/>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold truncate">
                {product.title}
              </h2>
              <p className="text-sm text-slate-600">
                Rating: {product.rating}
              </p>
              <p className="text-sm text-slate-600 capitalize">
                Category: {product.category}
              </p>
              <p className="text-xl font-bold text-green-600">
                {product.price}
              </p>
              <button className="bg-black p-2 rounded-xl text-white">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchDisplayData;
