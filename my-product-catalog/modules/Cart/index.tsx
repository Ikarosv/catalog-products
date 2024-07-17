'use client'
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleWhatsApp = () => {
    const productList = cart.map(item => `Code: ${item.code}, EMB: ${item.emb}`).join('\n');
    const message = encodeURIComponent(`Product List:\n${productList}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            Code: {product.code}, EMB: {product.emb}
            <button onClick={() => removeFromCart(product.code)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleWhatsApp}>Proceed to WhatsApp</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
