import React from "react";
import styles from "./styles.module.css";
import { useStateValue } from "../../context";

function Product({ id = "", title = "", image = "", price = "", rating = "" }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToCart = () => {
    // Dispatch the item into data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className={styles.product}>
      <div className={styles.product_info}>
        <p>{title}</p>
        <p className={styles.price}>
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="2 states book" />
      <button className={styles.add_to_cart} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
