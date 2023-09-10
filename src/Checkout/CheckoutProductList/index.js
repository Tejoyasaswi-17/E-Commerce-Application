import React from "react";
import styles from "./styles.module.css";
import { useStateValue } from "../../context";

function CheckoutProductList({
  id = "",
  title = "",
  image = "",
  price = "",
  rating = "",
}) {
  const [dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className={styles.checkout_product}>
      <img
        className={styles.checkout_product_image}
        src={image}
        alt="Product in Checkout List"
      />

      <div className={styles.checkout_product_info}>
        <p className={styles.checkout_product_title}>{title}</p>
        <p className={styles.checkout_product_price}>
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkout_product_rating}>
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProductList;
