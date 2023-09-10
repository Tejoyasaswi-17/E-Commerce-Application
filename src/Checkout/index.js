import React from "react";
import styles from "./styles.module.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context";
import CheckoutProductList from "./CheckoutProductList";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_left}>
        <img
          className={styles.checkout_ad}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Siddhi/PC_CBCC-PC_Hero_3000x1200_Prime._CB597302649_.jpg"
          alt="Advertisement"
        />
        <div>
          <h2 className={styles.checkout_title}>Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProductList
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className={styles.checkout_right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
