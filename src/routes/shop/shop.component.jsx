import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.styles.scss";

const Shop = () => {
  const { currentProducts } = useContext(ProductsContext);
  return (
    <div className="shop">
      {currentProducts?.map(({ id, name }) => (
        <h1 key={id}>{name}</h1>
      ))}
      ;
    </div>
  );
};
export default Shop;
