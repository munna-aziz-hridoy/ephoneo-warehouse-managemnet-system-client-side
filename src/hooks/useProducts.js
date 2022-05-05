import { useEffect, useState } from "react";

const useProducts = (limit, email) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://agile-ridge-94363.herokuapp.com/products?limit=${limit}&email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit, email]);
  return [products, setProducts];
};

export default useProducts;
