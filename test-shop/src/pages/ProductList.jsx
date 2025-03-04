import { useEffect, useState } from "react";
import { fetchProducts } from "../Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
`;


const ProductTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  text-align: center;
  flex-grow: 1;
`;

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <ProductListWrapper>
      <h1>Список товаров</h1>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
            </Link>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductListWrapper>
  );
}

export default ProductList;