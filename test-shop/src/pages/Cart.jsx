import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import styled from 'styled-components';


const CartWrapper = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 15px;
`;

const CartItemDetails = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius:5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e60000;
  }
`;

function Cart() {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <CartWrapper>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cart.map((item, index) => (
          <CartItem key={index}>
            <CartItemImage src={item.image} alt={item.title} />
            <CartItemDetails>
              <h3>{item.title}</h3>
              <p>Цвет: {item.selectedColor}</p>
              <p>Размер: {item.selectedSize}</p>
            </CartItemDetails>
            <Button onClick={() => handleRemove(index)}>Удалить</Button>
          </CartItem>
        ))
      )}
      <p>Товары в корзине: {cart.length}</p>
    </CartWrapper>
  );
}

export default Cart;