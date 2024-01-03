import Navbar from "../Navbar";
import { useState } from "react";
import ProductsContainer from "./ProductsElement/ProductsContainer";
import ProductsBox from "./ProductsElement/ProductsBox";
import ProductsList from "./ProductsElement/ProductsList";
import ProductsListArea from "./ProductsElement/ProductsListArea";
import ProductsLargeImgBox from "./ProductsElement/ProductsLargeImgBox";
import LargeImg from "./ProductsElement/ProductsLImg";
import ProJson from "./Products.json";
import "./Products.css";

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
    <div className="Products">
      <Navbar />

      <ProductsContainer>
        <ProductsBox>
          <h1>- Products -</h1>
          <ProductsLargeImgBox>
            <LargeImg
              src={
                process.env.PUBLIC_URL + `/images/${currentProduct.productUrl}`
              }
              alt={currentProduct.product_name}
              className="mainImage"
              onClick={handleImageClick}
            />
          </ProductsLargeImgBox>

          <ProductsListArea>
            {products.map((product, index) => (
              <ProductsList key={index}>
                <img
                  src={process.env.PUBLIC_URL + `/images/${product.productUrl}`}
                  alt={product.product_name}
                  onClick={() => handleProductImage(index)}
                />
                <p>{product.product_name}</p>
              </ProductsList>
            ))}
          </ProductsListArea>
        </ProductsBox>
      </ProductsContainer>
    </div>
  );
} //no way

export default Products;
