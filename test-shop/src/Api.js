const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};