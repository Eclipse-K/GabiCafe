import Navbar from "../Navbar";
import { useState } from "react";
import ProductsContainer from "./ProductsElement/ProductsContainer";
import ProductsList from "./ProductsElement/ProductsList";
import ProductsBox from "./ProductsElement/ProductsBox";
import ProJson from "./Products.json";

function Products() {
  // eslint-disable-next-line
  const [products, setProducts] = useState(ProJson.products);

  return (
    <div>
      <Navbar />

      <ProductsContainer>
        <ProductsList>
          <h1>- Products -</h1>
          <div>
            {products.map((product, index) => (
              <ProductsBox key={index}>
                <img
                  src={process.env.PUBLIC_URL + `/images/${product.productUrl}`}
                  alt={product.product_name}
                />
                <p>{product.product_name}</p>
              </ProductsBox>
            ))}
          </div>
        </ProductsList>
      </ProductsContainer>
    </div>
  );
}

export default Products;
