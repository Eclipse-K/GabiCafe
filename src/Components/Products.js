import Navbar from "../Navbar";
import { useEffect, useState } from "react";
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
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  // eslint-disable-next-line
  const [scrollLeft, setScrollLeft] = useState(0);

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

  useEffect(() => {
    const handleDragStart = (e) => {
      setDragging(true);
      setDragStartX(e.clientX);
      e.preventDefault();
    };

    const handleDragEnd = () => {
      setDragging(false);
    };

    const handleDragMove = (e) => {
      if (!dragging) return;

      const dragDistance = e.clientX - dragStartX;

      // 조절할 스크롤 양을 계산하고 적용
      const productListArea = document.getElementById("scrollable-div");
      if (productListArea) {
        productListArea.scrollLeft = productListArea.scrollLeft - dragDistance;
      }
    };

    // 이벤트 핸들러 등록
    const productListArea = document.getElementById("scrollable-div");
    productListArea.addEventListener("mousedown", handleDragStart);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("mousemove", handleDragMove);

    // Clean up 이후에 이벤트 핸들러 제거
    return () => {
      productListArea.removeEventListener("mousedown", handleDragStart);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("mousemove", handleDragMove);
    };
  }, [dragging, dragStartX, scrollLeft]);

  return (
    <div className="Products">
      <Navbar />

      <ProductsContainer>
        <ProductsBox>
          <h1>- Products -</h1>
          <div className="Temporary">
            <ProductsLargeImgBox>
              <LargeImg
                src={
                  process.env.PUBLIC_URL +
                  `/images/${currentProduct.productUrl}`
                }
                alt={currentProduct.product_name}
                className="mainImage"
                onClick={handleImageClick}
              />
              <ProductsListArea id="scrollable-div">
                {products.map((product, index) => (
                  <ProductsList key={index}>
                    <img
                      src={
                        process.env.PUBLIC_URL + `/images/${product.productUrl}`
                      }
                      alt={product.product_name}
                      onClick={() => handleProductImage(index)}
                    />
                  </ProductsList>
                ))}
              </ProductsListArea>
            </ProductsLargeImgBox>

            <div className="DetailPage">
              <p>{currentProduct.product_name}</p>
              <p>상세 내용</p>
              <hr />
              <p>상품 금액</p>
              <hr />
              <button className="wishbutton">+ Wish List</button>

              <div className="ButtonGroup">
                <button className="buybutton">BUY NOW</button>
                <button className="addbutton">ADD CART</button>
              </div>
            </div>
          </div>
        </ProductsBox>
      </ProductsContainer>
    </div>
  );
} //no way

export default Products;
