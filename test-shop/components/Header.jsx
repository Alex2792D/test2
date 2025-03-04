import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;

  &:hover {
    color: #007bff;
  }
`;

function Header() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <HeaderWrapper>
      <StyledLink to="/">Каталог</StyledLink>
      <StyledLink to="/cart">🛒 Корзина ({cart.length})</StyledLink>
    </HeaderWrapper>
  );
}

export default Header;