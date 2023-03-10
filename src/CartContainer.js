import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { state, clearCart } = useGlobalContext();
  const { items, total } = state;

  if (items.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        <CartItem />
      </div>
      {/* cart footer */}
      <div className="footer">
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </div>
    </section>
  );
};

export default CartContainer;
