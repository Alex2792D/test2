import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProductById } from "../Api";
import styled from "styled-components";

const ProductDetailWrapper = styled.div`
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
`;

const Select = styled.select`
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Загрузка...</p>;

  const handleAddToCart = () => {
    const newItem = { ...product, selectedColor, selectedSize };
    dispatch(addToCart(newItem));
    navigate("/cart");
  };

  return (
    <ProductDetailWrapper>
      <h1>{product.title}</h1>
      <ProductImage src={product.image} alt={product.title} />
      <p>{product.description}</p>

      <div>
        <label>Цвет:</label>
        <Select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
          <option value="Red">Красный</option>
          <option value="Blue">Синий</option>
          <option value="Green">Зеленый</option>
        </Select>
      </div>

      <div>
        <label>Размер:</label>
        <Select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL" disabled>XL (нет в наличии)</option>
        </Select>
      </div>

      <Button onClick={handleAddToCart}>Добавить в корзину</Button>
    </ProductDetailWrapper>
  );
}

export default ProductDetail;