import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  function addToCart(product) {
  setCart((prev) => [...prev, product]);
}

 return (
  <div style={{ padding: "20px" }}>
    <h1>Simple E-Commerce Store</h1>
    <p><b>Cart Items:</b> {cart.length}</p>
    <p>Products: {products.length}</p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100%", borderRadius: "6px" }}
          />

          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <b>${product.price}</b>
          </p>
          <button
  onClick={() => addToCart(product)}
  style={{
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Add to Cart
</button>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;
