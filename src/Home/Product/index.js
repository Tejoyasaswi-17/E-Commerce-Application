import React from "react";
import styles from "./styles.module.css";
function Product({ title = "", image = "", price = "", rating = "" }) {
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
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="2 states book" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
