/* eslint-disable-next-line no-use-before-define */
import React, { useEffect, useState } from "react";
import { getProducts } from "./api";
import Loader from "./components/Loader";
import { ProductItem } from "./components/ProductItem";
import "./styles.css";

const PRODUCTS_PER_PAGE = 10;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    getProducts().then(({ success, products }) => {
      if (success) {
        setProducts(products);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="text-center p-2">
      <h1 className="font-bold text-3xl text-gray-800 my-2">
        Fetch and list products{" "}
        <span role="img" aria-label="Shop">
          🛒
        </span>
      </h1>
      <hr />
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col w-full">
            <h2 className="font-bold text-2xl text-gray-700 my-2">
              Product list
            </h2>
            {products.map((product, index) => (
              <ProductItem key={index.toString()} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
