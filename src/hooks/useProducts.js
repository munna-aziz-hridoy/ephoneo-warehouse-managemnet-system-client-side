import { useEffect, useState } from "react";

const useProducts = (limit) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://agile-ridge-94363.herokuapp.com/products?limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit]);
  return [products, setProducts];
};

export default useProducts;
