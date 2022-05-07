import { useEffect, useState } from "react";

const useProducts = (limit) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products?limit=${limit}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit]);
  return [products, setProducts];
};

export default useProducts;
