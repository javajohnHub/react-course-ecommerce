import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/firebase/firebase.utils";
export const ProductsContext = createContext({
  setProducts: () => null,
  currentProducts: null,
});

export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(null);
  const value = { currentProducts, setCurrentProducts };
  useEffect(() => {
    const getCurrentProducts = async () => {
    const products = await getProducts();
    setCurrentProducts(products);
    };
    getCurrentProducts();
  }, []);
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};