import Navbar from "../Navbar";
import { useState } from "react";
import ProductsContainer from "./ProductsElement/ProductsContainer";
import ProductsList from "./ProductsElement/ProductsList";
import ProductsBox from "./ProductsElement/ProductsBox";
import ProJson from "./Products.json";

function Products() {
  // eslint-disable-next-line
  const [products, setProducts] = useState(ProJson.products);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handleProductImage = (index) => {
    if (products[index]) {
      setCurrentIndex(index);
    }
  };

  // 현재 선택된 제품 정보 가져오기
  const currentProduct = products[currentIndex];

  return (
    <div>
      <Navbar />

      <ProductsContainer>
        <ProductsList>
          <h1>- Products -</h1>
          <img
            src={
              process.env.PUBLIC_URL + `/images/${currentProduct.productUrl}`
            }
            alt={currentProduct.product_name}
            className="mainImage"
            onClick={handleImageClick}
          />

          <div>
            {products.map((product, index) => (
              <ProductsBox key={index}>
                <img
                  src={process.env.PUBLIC_URL + `/images/${product.productUrl}`}
                  alt={product.product_name}
                  onClick={() => handleProductImage(index)}
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
