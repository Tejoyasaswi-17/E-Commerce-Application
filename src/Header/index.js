import React from "react";
import styles from "./styles.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.header_logo}
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
      />
      <LocationOnIcon className={styles.location_logo} />
      <div className={styles.header_search}>
        <input type="text" className={styles.header_search_input} />
        <SearchIcon className={styles.header_search_icon} />
      </div>

      <div className={styles.header_nav}>
        <div className={styles.header_flag}>
          <FlagIcon />
          <div className={styles.header_language}>EN</div>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_option_line1}>Hello Tejo</span>
          <span className={styles.header_option_line2}>Sign In</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_option_line1}>Returns</span>
          <span className={styles.header_option_line2}>& Orders</span>
        </div>
        <div className={styles.header_cart}>
          <span className={styles.header_cart_icon}>
            <ShoppingCartIcon />
            <span className={styles.cart_count}>0</span>
          </span>
          <span className={styles.header_cart_word}>Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
