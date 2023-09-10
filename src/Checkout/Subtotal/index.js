import React from "react";
import styles from "./styles.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../context/index'
import { getBasketTotal } from "../../context/reducer";

function Subtotal() {
  const [{basket}] = useStateValue();
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs. "}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
