import { useState } from "react";
import "../assets/CSS/layout.css";

export default function Product({ key, product, setCart, setTotal }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    if (quantity > 0) {
      setCart((prev) => [
        ...prev,
        {
          product: product.name,
          quantity,
          price: product.price,
        },
      ]);

      setTotal((prevTotal) => prevTotal + product.price * quantity);
    }
  };

  return (
    <div className="grid-item" key={key}>
      <div class="card">
        <img
          src={require(`../assets/image/${product.img}`)}
          alt={product.name}
        />
        <div class="card-body">
          <h5 class="card-title">{product.name} Price:</h5>
          <div class="quantity-container">
            <label for="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <button class="card-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}