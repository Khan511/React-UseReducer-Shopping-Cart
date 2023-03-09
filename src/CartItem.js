import React from "react";
import { GoPlus } from "../node_modules/react-icons/go";
import { HiMinusSm } from "../node_modules/react-icons/hi";
import { useGlobalContext } from "./context";
const CartItem = () => {
  const { state, removeItem, toggleAmount } = useGlobalContext();

  const { items } = state;

  return items.map((item) => {
    const { id, title, price, amount, img } = item;

    return (
      <article className="cart-item" key={id}>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          {/* remove button */}
          <button className="remove-btn" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
        <div className="inc-btns">
          {/* increase amount */}
          <button
            className="amount-btn"
            onClick={() => toggleAmount(id, "INC")}
          >
            <GoPlus />
          </button>
          {/* amount */}
          <p className="amount">{amount}</p>
          {/* decrease amount */}
          <button
            className="amount-btn"
            onClick={() => toggleAmount(id, "DEC")}
          >
            <HiMinusSm />
          </button>
        </div>
      </article>
    );
  });
};

export default CartItem;
